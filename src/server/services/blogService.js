import db from '../db.js'

export async function fetchBlogsByLang(langCode, slug) {
    // Build WHERE clause dynamically
    const whereClause = slug 
        ? 'WHERE bpt.lang_code = $1 AND bp.slug = $2'
        : 'WHERE bpt.lang_code = $1';
    
    const params = slug ? [langCode, slug] : [langCode];
    
    const result = await db.query(`
        SELECT 
            bpt.id, bpt.blog_post_id, bpt.lang_code, bpt.title, bpt.content,
            bp.slug, bp.author, bp.published_at, bp.display_order,
            COALESCE(
                (
                    SELECT json_agg(
                        jsonb_build_object(
                            'id', ci.id,
                            'blog_post_id', ci.blog_post_id,
                            'image_path', ci.image_path,
                            'caption', ci.caption,
                            'display_order', ci.display_order
                        ) ORDER BY ci.display_order ASC
                    )
                    FROM cyventra.content_image ci
                    WHERE ci.blog_post_id = bp.id
                ),
                '[]'::json
            ) as images,
            COALESCE(
                (
                    SELECT json_agg(
                        jsonb_build_object(
                            'id', bpt2.id,
                            'lang_code', bpt2.lang_code,
                            'title', bpt2.title,
                            'content', bpt2.content
                        )
                    )
                    FROM cyventra.blog_post_translation bpt2
                    WHERE bpt2.blog_post_id = bp.id
                ),
                '[]'::json
            ) as translations
        FROM cyventra.blog_post_translation bpt
        JOIN cyventra.blog_post bp ON bp.id = bpt.blog_post_id
        ${whereClause}
        ORDER BY bp.display_order ASC, bp.published_at DESC
    `, params);
    
    // Transform to match Prisma structure
    return result.rows.map(row => ({
        id: row.id,
        blog_post_id: row.blog_post_id,
        lang_code: row.lang_code,
        title: row.title,
        content: row.content,
        blog_post: {
            id: row.blog_post_id,
            slug: row.slug,
            author: row.author,
            published_at: row.published_at,
            display_order: row.display_order,
            images: Array.isArray(row.images) ? row.images : [],
            translations: Array.isArray(row.translations) ? row.translations : []
        }
    }));
}

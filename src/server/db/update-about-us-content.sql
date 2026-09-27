-- Rewrites the About Us section (cyventra.section_translation, section_id=3,
-- slug 'about-us') to humanize the story around the founder instead of a
-- generic "group of engineers" narrative. Mentions Cyventra, Inc. is a U.S.
-- corporation (Florida) as supporting context, not a headline -- no
-- registration document number or exact street address is published (per
-- decision: most small-business buyers don't recognize/verify a state filing
-- number, and a real founder identity builds more trust than a legal ID for
-- this audience).

UPDATE cyventra.section_translation
SET
  title = 'Why I Started Cyventra',
  description = 'I''m Felipe, the founder of Cyventra, Inc. — a U.S. corporation based in Florida. I started Cyventra because I kept seeing the same thing at small businesses: one manual, repetitive process quietly costing them hours every week, while every "digital transformation" pitch out there was built for companies ten times their size, with price tags and timelines to match.

Cyventra exists to fix that gap. We take one costly, repetitive workflow — the kind every small business has — and automate it at a fixed price, delivered in weeks, not quarters. Behind every project is a hands-on engineering team across Latin America that I bring in specifically for that work, so you get senior talent without the overhead of a big agency.

We''re a young company, and I''d rather be upfront about that than pretend otherwise. What you get in exchange is direct access to the person actually responsible for your project — me — and a fixed-price, fixed-scope engagement with nothing to hide behind.

My goal is simple: build a track record one automated workflow at a time, starting with yours.',
  cta_text = 'Start a conversation'
WHERE section_id = 3 AND lang_code = 'en';

UPDATE cyventra.section_translation
SET
  title = 'Por Qué Empecé Cyventra',
  description = 'Soy Felipe, el fundador de Cyventra, Inc. — una corporación de Estados Unidos con sede en Florida. Empecé Cyventra porque veía lo mismo una y otra vez en las pequeñas empresas: un proceso manual y repetitivo que les costaba horas cada semana, mientras que todas las propuestas de "transformación digital" estaban pensadas para empresas diez veces más grandes, con precios y tiempos a la altura.

Cyventra existe para cerrar esa brecha. Tomamos un proceso costoso y repetitivo — el tipo que toda pyme tiene — y lo automatizamos a precio fijo, entregado en semanas, no en trimestres. Detrás de cada proyecto hay un equipo de ingeniería en Latinoamérica que yo mismo convoco específicamente para ese trabajo, para que tengas talento senior sin la estructura de una agencia grande.

Somos una empresa joven, y prefiero decirlo de frente en vez de fingir lo contrario. Lo que obtienes a cambio es acceso directo a la persona realmente responsable de tu proyecto — yo — y un compromiso de precio y alcance fijos, sin nada detrás de qué esconderse.

Mi objetivo es simple: construir una trayectoria un proceso automatizado a la vez, empezando por el tuyo.',
  cta_text = 'Empecemos una conversación'
WHERE section_id = 3 AND lang_code = 'es';

-- Verify
SELECT section_id, lang_code, title, cta_text FROM cyventra.section_translation WHERE section_id = 3;

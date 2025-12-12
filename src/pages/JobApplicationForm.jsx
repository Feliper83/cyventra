import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { apiUrl } from '../config/api.js';
import '../styles/cyventra-theme.css';

export default function JobApplicationForm() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        job_id: "",
        resumeUrl: "",
        coverLetter: "",
    });

    const positions = [
        { label: "iOS Developer (Swift, SwiftUI)", value: 1 },
        { label: "Backend Java Developer (Java 8/17, Spring Boot, Microservices, Angular)", value: 2 },
        { label: "Oracle Database Administrator (DBA)", value: 3 }
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(apiUrl("/api/apply"), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                alert("✅ " + t("apply.success"));
                console.log(data);
                // Reset form
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    job_id: "",
                    resumeUrl: "",
                    coverLetter: "",
                });
            } else {
                let errorMsg = t("apply.error_unknown");
                try {
                    const error = await response.json();
                    errorMsg = error.message || JSON.stringify(error);
                } catch {
                    errorMsg = await response.text();
                }
                alert("❌ " + t("apply.error") + ": " + errorMsg);
            }
        } catch (err) {
            console.error("Error submitting application:", err);
            alert("⚠️ " + t("apply.error_something_wrong"));
        }
    };

    return (
        <div className="cyv-page-wrapper">
            {/* Page Header */}
            <div className="cyv-page-header">
                <div className="container">
                    <div className="cyv-page-content">
                        <h1 className="cyv-page-title">{t("apply.title")}</h1>
                        <p className="cyv-page-subtitle">
                            {t("apply.subtitle")}
                        </p>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="container">
                <div className="cyv-page-content">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="cyv-card">
                                <form onSubmit={handleSubmit}>
                                    {/* Full Name */}
                                    <div className="cyv-form-group">
                                        <label className="cyv-form-label">{t("apply.full_name")}</label>
                                        <input
                                            type="text"
                                            className="cyv-form-input"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder={t("apply.full_name_placeholder")}
                                            required
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="cyv-form-group">
                                        <label className="cyv-form-label">{t("apply.email")}</label>
                                        <input
                                            type="email"
                                            className="cyv-form-input"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder={t("apply.email_placeholder")}
                                            required
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div className="cyv-form-group">
                                        <label className="cyv-form-label">{t("apply.phone")}</label>
                                        <input
                                            type="tel"
                                            className="cyv-form-input"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            placeholder={t("apply.phone_placeholder")}
                                            required
                                        />
                                    </div>

                                    {/* Position */}
                                    <div className="cyv-form-group">
                                        <label className="cyv-form-label">{t("apply.position")}</label>
                                        <select
                                            className="cyv-form-input"
                                            value={formData.job_id}
                                            onChange={(e) => setFormData({ ...formData, job_id: e.target.value })}
                                            required
                                        >
                                            <option value="">{t("apply.position_placeholder")}</option>
                                            {positions.map((pos) => (
                                                <option key={pos.value} value={pos.value}>
                                                    {pos.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Resume */}
                                    <div className="cyv-form-group">
                                        <label className="cyv-form-label">{t("apply.resume_url")}</label>
                                        <input
                                            type="url"
                                            className="cyv-form-input"
                                            value={formData.resumeUrl}
                                            onChange={(e) => setFormData({ ...formData, resumeUrl: e.target.value })}
                                            placeholder={t("apply.resume_url_placeholder")}
                                        />
                                    </div>

                                    {/* Cover Letter */}
                                    <div className="cyv-form-group">
                                        <label className="cyv-form-label">{t("apply.cover_letter")}</label>
                                        <textarea
                                            rows={5}
                                            className="cyv-form-input cyv-form-textarea"
                                            value={formData.coverLetter}
                                            onChange={(e) =>
                                                setFormData({ ...formData, coverLetter: e.target.value })
                                            }
                                            placeholder={t("apply.cover_letter_placeholder")}
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <div className="mt-4">
                                        <button
                                            type="submit"
                                            className="cyv-btn cyv-btn-primary"
                                            style={{ width: '100%' }}
                                        >
                                            {t("apply.submit")}
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" style={{ marginLeft: '0.5rem' }}>
                                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

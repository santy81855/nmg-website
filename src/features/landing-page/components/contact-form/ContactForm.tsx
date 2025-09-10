"use client";

import styles from "./style.module.css";
import { useState } from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
    const [submitting, setSubmitting] = useState(false);

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSubmitting(true);

        const form = e.currentTarget;
        const formData = new FormData(form);
        const name = String(formData.get("name") || "").trim();
        const email = String(formData.get("email") || "").trim();
        const phone = String(formData.get("phone") || "").trim();
        const company = String(formData.get("company") || "").trim();
        const message = String(formData.get("message") || "").trim();

        if (!name || !email || !phone || !message) {
            toast.error("Please fill out name, email, phone, and message.");
            setSubmitting(false);
            return;
        }

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, phone, company, message }),
            });

            if (!res.ok) throw new Error("Failed to send");

            toast.success("Thanks! Your message has been sent.");
            form.reset();
        } catch {
            toast.error(
                "Sorry, we couldn't send your message. Please try again."
            );
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <section className={styles.container}>
            <h3>Send Us a Message</h3>
            <form className={styles.form} onSubmit={onSubmit}>
                <div className={styles.inputRow}>
                    <label htmlFor="name">Name *</label>
                    <input
                        placeholder="Name"
                        type="text"
                        id="name"
                        name="name"
                        required
                    />
                    <label htmlFor="phone">Phone *</label>
                    <input
                        placeholder="Phone"
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                    />
                </div>
                <div className={styles.inputRow}>
                    <label htmlFor="email">Email *</label>
                    <input
                        placeholder="Email"
                        type="email"
                        id="email"
                        name="email"
                        required
                    />
                    <label htmlFor="company">Company (optional)</label>
                    <input
                        placeholder="Company (optional)"
                        type="text"
                        id="company"
                        name="company"
                    />
                </div>
                <label htmlFor="message">Message *</label>
                <textarea
                    rows={6}
                    placeholder="Message"
                    id="message"
                    name="message"
                    required
                />
                <button type="submit" disabled={submitting}>
                    {submitting ? "Sending..." : "Send"}
                </button>
            </form>
        </section>
    );
};

export default ContactForm;

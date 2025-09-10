"use client";

import styles from "./style.module.css";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";

const HeaderSection = () => {
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
        <section className={styles.horizontalContainer}>
            <div className={styles.imageContainer}>
                <Image
                    className={styles.image}
                    src="/images/contact-us/contact.jpg"
                    alt="Contact us"
                    width={970}
                    height={1212}
                />
            </div>
            <section className={styles.contactContainer}>
                <section className={styles.headingContainer}>
                    <Image
                        className={styles.icon}
                        src="/logos/red-removed.png"
                        alt="Contact icon"
                        width={56}
                        height={64}
                    />
                    <section className={styles.heading}>
                        <h1>Contact Us</h1>
                        <p>GET A QUOTE</p>
                    </section>
                </section>
                <form className={styles.form} onSubmit={onSubmit}>
                    <div className={styles.inputContainer}>
                        <label htmlFor="name">Name *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            required
                        />
                    </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="email">Email *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            required
                        />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="phone">Phone *</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Phone"
                            required
                        />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="company">Company</label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Company (optional)"
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="message">Message *</label>
                    <textarea
                        rows={5}
                        id="message"
                        name="message"
                        placeholder="Your message"
                        required
                    />
                </div>
                    <button type="submit" disabled={submitting}>
                        {submitting ? "Sending..." : "Submit"}
                    </button>
                </form>
            </section>
        </section>
    );
};

export default HeaderSection;

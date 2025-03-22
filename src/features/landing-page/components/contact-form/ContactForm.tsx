import styles from "./style.module.css";

const ContactForm = () => {
    return (
        <section className={styles.container}>
            <h3>Send Us a Message</h3>
            <form className={styles.form}>
                <div className={styles.inputRow}>
                    <label htmlFor="name">Name</label>
                    <input
                        placeholder="Name"
                        type="text"
                        id="name"
                        name="name"
                    />
                    <label htmlFor="phone">Phone</label>
                    <input
                        placeholder="Phone"
                        type="tel"
                        id="phone"
                        name="phone"
                    />
                </div>
                <div className={styles.inputRow}>
                    <label htmlFor="email">Email</label>
                    <input
                        placeholder="Email"
                        type="email"
                        id="email"
                        name="email"
                    />
                    <label htmlFor="company">Company</label>
                    <input
                        placeholder="Company"
                        type="text"
                        id="company"
                        name="company"
                    />
                </div>
                <label htmlFor="message">Message</label>
                <textarea
                    rows={6}
                    placeholder="Message"
                    id="message"
                    name="message"
                />
                <button type="submit">Send</button>
            </form>
        </section>
    );
};

export default ContactForm;

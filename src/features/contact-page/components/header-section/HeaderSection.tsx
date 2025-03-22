import styles from "./style.module.css";
import Image from "next/image";

const HeaderSection = () => {
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
                <form className={styles.form}>
                    <div className={styles.inputContainer}>
                        <label htmlFor="name">Name *</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="email">Email *</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="phone">Phone *</label>
                        <input type="tel" id="phone" name="phone" />
                    </div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="message">Message *</label>
                        <textarea rows={5} id="message" name="message" />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </section>
        </section>
    );
};

export default HeaderSection;

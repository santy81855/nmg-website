import styles from "./style.module.css";
import Link from "next/link";
import {
    phone,
    mail,
    facebook,
    instagram,
    instagramColor,
    facebookColor,
    ContactForm,
} from "@/features/landing-page";

const Contact = () => {
    return (
        <section className={styles.container}>
            <section className={styles.topItem}>
                <h3>Get In Touch</h3>
                <section className={styles.itemContainer}>
                    <section className={styles.item}>
                        {phone}
                        <p>(404) 940-2212</p>
                    </section>
                    <section className={styles.item}>
                        {mail}
                        <p>info@nmgremodeling.com</p>
                    </section>
                    <section className={styles.item}>
                        {facebook}
                        <p>@nmgremodeling</p>
                    </section>
                    <section
                        className={`${styles.item} ${styles.instagramIcon}`}
                    >
                        {instagram}
                        <p>@nmgremodeling</p>
                    </section>
                </section>
                <section className={styles.socialMediaContainer}>
                    <Link
                        className={styles.buttonLink}
                        href="https://www.instagram.com/nmgremodeling/"
                    >
                        {instagramColor}
                    </Link>
                    <Link
                        className={styles.buttonLink}
                        href="https://www.facebook.com/nmgremodeling"
                    >
                        {facebookColor}
                    </Link>
                </section>
            </section>
            <section className={styles.bottomItem}>
                <ContactForm />
            </section>
        </section>
    );
};

export default Contact;

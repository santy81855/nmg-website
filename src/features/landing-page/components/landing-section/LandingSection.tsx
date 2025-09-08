import Image from "next/image";
import styles from "./style.module.css";
import Link from "next/link";

const LandingSection = () => {
    return (
        <section className={styles.landingSection}>
            <section className={styles.backgroundImageContainer}>
                <Image
                    className={styles.backgroundImage}
                    src="/images/home/home-image.jpg"
                    alt="Background"
                    width={1280}
                    height={854}
                    priority
                    objectFit="cover"
                />
                <div className={styles.overlay} />
                <section className={styles.content}>
                    <section className={styles.text}>
                        <h1 className={styles.title}>
                            <span>NM&G</span>
                            <br />
                            HOME
                            <br />
                            REMODELING
                        </h1>
                        <p className={styles.description}>
                            INTERION AND EXTERIOR REMODELING
                        </p>
                    </section>
                    <Link href="/contact-us" className={styles.ctaButton}>
                        GET IN TOUCH
                    </Link>
                </section>
            </section>
        </section>
    );
};

export default LandingSection;

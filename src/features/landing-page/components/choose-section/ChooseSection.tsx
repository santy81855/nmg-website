import styles from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import { check } from "@/features/landing-page";

const ChooseSection = () => {
    return (
        <div className={styles.container}>
            <h2>WHY CHOOSE US?</h2>
            <section className={styles.card}>
                <Image
                    className={styles.logo}
                    src="/logos/red.png"
                    alt="NMG Logo"
                    width={600}
                    height={550}
                />
                <div className={styles.imageContainer}>
                    <Image
                        className={styles.image}
                        src="/images/home/collaboration.jpeg"
                        alt="collaboration image"
                        width={667}
                        height={1000}
                    />
                </div>
                <section className={styles.textContainer}>
                    <h3 className={styles.title}>OUR COMMITMENT</h3>
                    <p className={styles.description}>
                        We treat your home like our own—clear timelines, honest
                        pricing, and craftsmanship that lasts.
                    </p>
                    <section className={styles.checkItems}>
                        <section className={styles.item}>
                            {check}
                            <p className={styles.itemDescription}>
                                Straightforward estimates with no surprise
                                add-ons
                            </p>
                        </section>
                        <section className={styles.item}>
                            {check}
                            <p className={styles.itemDescription}>
                                Reliable schedules and respectful, tidy crews
                            </p>
                        </section>
                        <section className={styles.item}>
                            {check}
                            <p className={styles.itemDescription}>
                                Quality materials installed the right way
                            </p>
                        </section>
                    </section>
                    <Link className={styles.aboutButton} href="/about">
                        About Us
                    </Link>
                </section>
            </section>
        </div>
    );
};

export default ChooseSection;

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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla facilisi. Vestibulum ac libero id sapien
                        fermentum.
                    </p>
                    <section className={styles.checkItems}>
                        <section className={styles.item}>
                            {check}
                            <p className={styles.itemDescription}>
                                Lorem ipsum dolor sit amet
                            </p>
                        </section>
                        <section className={styles.item}>
                            {check}
                            <p className={styles.itemDescription}>
                                Lorem ipsum dolor sit amet, consectetur
                            </p>
                        </section>
                        <section className={styles.item}>
                            {check}
                            <p className={styles.itemDescription}>
                                Lorem ipsum dolor sit
                            </p>
                        </section>
                    </section>
                    <Link className={styles.aboutButton} href="/">
                        About Us
                    </Link>
                </section>
            </section>
        </div>
    );
};

export default ChooseSection;

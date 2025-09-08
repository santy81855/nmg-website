import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "About | NM&G Remodeling",
};

export default function AboutPage() {
    return (
        <article className={styles.wrap}>
            <header className={styles.header}>
                <div className={styles.hero}>
                    <Image
                        src="/images/home/home-image.jpg"
                        alt="Tools and remodeling materials"
                        fill
                        sizes="(max-width: 768px) 100vw, 100vw"
                        className={styles.heroImg}
                        priority
                    />
                    <div className={styles.heroOverlay}>
                        <p className={styles.kicker}>
                            <span className={styles.kickerLight}>ABOUT</span>{" "}
                            <span className={styles.kickerAccent}>NM&G </span>
                            <span className={styles.kickerLight}>
                                REMODELING
                            </span>
                        </p>
                    </div>
                </div>
            </header>

            {/* Tagline block under hero with accent bar and watermark logo */}
            <section className={styles.tagline}>
                <h1 className={styles.taglineTitle}>
                    Turning your vision into
                    <br /> reality with
                    <br /> craftsmanship you can
                    <br /> trust
                </h1>
            </section>

            <section className={styles.featuresBand}>
                <div className={styles.feature}>
                    <svg
                        viewBox="0 0 24 24"
                        aria-hidden
                        className={styles.icon}
                    >
                        <path d="M10.5 2 3 6v12l7.5 4 7.5-4V6L10.5 2Zm0 2.3 5.5 3v9.4l-5.5 3-5.5-3V7.3l5.5-3Z" />
                    </svg>
                    <h3>Experience & Expertise</h3>
                    <p>Bring your vision to life</p>
                </div>
                <div className={styles.feature}>
                    <svg
                        viewBox="0 0 24 24"
                        aria-hidden
                        className={styles.icon}
                    >
                        <path d="M12 2 2 7l10 5 10-5-10-5Zm0 7.5L4.5 7 12 3.5 19.5 7 12 9.5ZM2 11l10 5 10-5v6l-10 5-10-5v-6Z" />
                    </svg>
                    <h3>Quality Craftsmanship</h3>
                    <p>Get quality results</p>
                </div>
                <div className={styles.feature}>
                    <svg
                        viewBox="0 0 24 24"
                        aria-hidden
                        className={styles.icon}
                    >
                        <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm-9 9.5C3 17.9 7 15 12 15s9 2.9 9 6.5V22H3v-.5Z" />
                    </svg>
                    <h3>Customer Satisfaction</h3>
                    <p>Your vision, our priority</p>
                </div>
            </section>

            <section className={styles.aboutSplit}>
                <div className={styles.patternCol} aria-hidden>
                    {/* decorative column */}
                </div>
                <div className={`${styles.section} ${styles.card}`}>
                    <h2 className={styles.sectionHeading}>
                        What Separates Us From the Rest
                    </h2>
                    <p>
                        We combine thoughtful design, skilled craftsmanship, and
                        clear communication to transform everyday spaces into
                        meaningful, lasting places. From kitchens and bathrooms
                        to basements and decks, our team focuses on quality at
                        every step.
                    </p>
                    <p>
                        You get realistic timelines, transparent pricing, and a
                        partner who cares about the details as much as the final
                        reveal.
                    </p>
                </div>
            </section>

            <section className={`${styles.section} ${styles.vision}`}>
                <div className={styles.visionImage}>
                    <Image
                        src="/images/home/collaboration.jpeg"
                        alt="Team collaborating on a remodel"
                        width={640}
                        height={480}
                        className={styles.img}
                    />
                </div>
                <div className={styles.visionText}>
                    <h3 className={styles.sectionSubheading}>
                        From Vision to Reality
                    </h3>
                    <p>
                        See the transformation for yourself—your ideas, our
                        craftsmanship. We bring your dream spaces to life with
                        quality and precision.
                    </p>
                </div>
            </section>

            <section className={styles.beforeAfterBand}>
                <div className={styles.baStack}>
                    <span
                        className={`${styles.baLabel} ${styles.baBeforeLabel}`}
                    >
                        BEFORE
                    </span>
                    <span
                        className={`${styles.baLabel} ${styles.baAfterLabel}`}
                    >
                        AFTER
                    </span>
                    <div
                        className={`${styles.baCard} ${styles.baBefore}`}
                    ></div>
                    <div className={`${styles.baCard} ${styles.baAfter}`}></div>
                </div>
                <div className={styles.baStackAlt}>
                    <span
                        className={`${styles.baLabel} ${styles.baBeforeLabel}`}
                    >
                        BEFORE
                    </span>
                    <span
                        className={`${styles.baLabel} ${styles.baAfterLabel}`}
                    >
                        AFTER
                    </span>
                    <div
                        className={`${styles.baCard} ${styles.baBefore}`}
                    ></div>
                    <div className={`${styles.baCard} ${styles.baAfter}`}></div>
                </div>
            </section>

            <section className={styles.cta}>
                <Link href="/contact-us" className={styles.ctaButton}>
                    Get a free quote
                </Link>
            </section>
        </article>
    );
}

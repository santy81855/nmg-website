import styles from "./style.module.css";
import { VerticalSlideout } from "@/features/landing-page";

const SlideoutSection = () => {
    return (
        <section className={styles.container}>
            <section className={styles.textContainer}>
                <div className={styles.titleContainer}>
                    <h2>WHAT WE DO</h2>
                    <div className={styles.horLine}></div>
                </div>
                <p>
                    From kitchens and baths to full home makeovers, we design,
                    build, and finish spaces that fit the way you live. We
                    handle the planning, permits, and clean execution—so you
                    don’t have to.
                </p>
            </section>
            <section className={styles.slideoutContainer}>
                <VerticalSlideout />
            </section>
            <section className={styles.footerSection}>
                <h2>... AND MORE</h2>
                <p>Get in touch with us now for custom inquiries.</p>
            </section>
        </section>
    );
};

export default SlideoutSection;

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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla facilisi. Vestibulum ac libero id sapien fermentum.
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

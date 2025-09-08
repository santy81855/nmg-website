import styles from "./page.module.css";
import {
    LandingSection,
    SlideoutSection,
    AccentButton,
    WorkSection,
    TrustSection,
    ChooseSection,
    Contact,
} from "@/features/landing-page";
import { Footer } from "@/features/footer";

export default function Home() {
    return (
        <div className={styles.page}>
            <section className={styles.landingSection}>
                <LandingSection />
            </section>
            <section className={styles.sectionContainer}>
                <section className={styles.slideOutSection}>
                    <SlideoutSection />
                </section>
                <AccentButton text="CONTACT US" />
                <section className={styles.workSection}>
                    <WorkSection />
                </section>
                <section className={styles.trustSection}>
                    <TrustSection />
                </section>
                <section className={styles.chooseSection}>
                    <ChooseSection />
                </section>
                <section className={styles.contactSection}>
                    <Contact />
                </section>
            </section>
            <Footer />
        </div>
    );
}

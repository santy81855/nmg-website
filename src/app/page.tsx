import Image from "next/image";
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
            <footer className={styles.footer}>
                <a
                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/file.svg"
                        alt="File icon"
                        width={16}
                        height={16}
                    />
                    Learn
                </a>
                <a
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/window.svg"
                        alt="Window icon"
                        width={16}
                        height={16}
                    />
                    Examples
                </a>
                <a
                    href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/globe.svg"
                        alt="Globe icon"
                        width={16}
                        height={16}
                    />
                    Go to nextjs.org →
                </a>
            </footer>
        </div>
    );
}

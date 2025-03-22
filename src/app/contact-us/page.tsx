import styles from "./page.module.css";
import { HeaderSection, Details } from "@/features/contact-page";

const Page = () => {
    return (
        <section className={styles.main}>
            <section className={styles.headerSection}>
                <HeaderSection />
            </section>
            <section className={styles.detailsSection}>
                <Details />
            </section>
        </section>
    );
};

export default Page;

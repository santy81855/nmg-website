import styles from "./page.module.css";
import { HeaderSection, Details } from "@/features/contact-page";
import { Footer } from "@/features/footer";

const Page = () => {
    return (
        <section className={styles.main}>
            <section className={styles.headerSection}>
                <HeaderSection />
            </section>
            <section className={styles.detailsSection}>
                <Details />
            </section>
            <Footer />
        </section>
    );
};

export default Page;

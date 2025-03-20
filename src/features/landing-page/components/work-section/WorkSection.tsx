import styles from "./style.module.css";
import { rightDownArrow, WorkComponent } from "@/features/landing-page";

const WorkSection = () => {
    return (
        <section className={styles.container}>
            <section className={styles.titleSection}>
                <section className={styles.textContainer}>
                    <h2>OUR WORK IN ACTION</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adispiscing
                        elit. Nulla facillsi. Vestibulum ac liberia id sopien
                        fermentum.
                    </p>
                </section>
                {rightDownArrow}
            </section>
            <section className={styles.workContainer}>
                <WorkComponent />
            </section>
        </section>
    );
};

export default WorkSection;

import styles from "./style.module.css";
import { rightDownArrow, WorkComponent } from "@/features/landing-page";

const WorkSection = () => {
    return (
        <section className={styles.container}>
            <section className={styles.titleSection}>
                <section className={styles.textContainer}>
                    <h2>OUR WORK IN ACTION</h2>
                    <p>
                        Every project starts with a clear plan and ends with
                        careful, clean workmanship. Take a look at a few
                        recent transformations to see the details, materials,
                        and finishes up close.
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

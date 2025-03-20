import { JSX } from "react";
import styles from "./style.module.css";
import { tools, house, handshake } from "@/features/landing-page";

type ItemProps = {
    title: string;
    description: string;
    image: JSX.Element;
};

const Item = ({ title, description, image }: ItemProps) => {
    return (
        <section className={styles.item}>
            {image}
            <section className={styles.textContainer}>
                <h3>{title}</h3>
                <p>{description}</p>
            </section>
        </section>
    );
};

const TrustSection = () => {
    return (
        <section className={styles.container}>
            <Item
                title="Experience & Expertise"
                description="Bring your vision to life"
                image={tools}
            />
            <div className={styles.vertLine}></div>
            <Item
                title="Quality Craftsmanship"
                description="Get quality results"
                image={house}
            />
            <div className={styles.vertLine}></div>
            <Item
                title="Customer Satisfaction"
                description="Your vision, our priority"
                image={handshake}
            />
        </section>
    );
};

export default TrustSection;

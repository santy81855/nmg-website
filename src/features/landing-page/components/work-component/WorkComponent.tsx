import styles from "./style.module.css";
import Image from "next/image";
import Link from "next/link";

type itemProps = {
    image: string;
    alt: string;
    title: string;
    description: string;
    link: string;
};

const Item = ({ image, alt, title, description, link }: itemProps) => {
    return (
        <div className={styles.item}>
            <Image
                className={styles.image}
                src={image}
                alt={alt}
                width={1920}
                height={1080}
            />
            <Link href={link} className={styles.textContainer}>
                <h3>{title}</h3>
                <p>{description}</p>
            </Link>
        </div>
    );
};

const WorkComponent = () => {
    return (
        <section className={styles.container}>
            <Item
                image="/images/home/kitchen-2.webp"
                alt="kitchen-image"
                title="PORTFOLIO"
                description="Finished Projects"
                link="/"
            />
            <Item
                image="/images/home/deck-2.webp"
                alt="deck-image"
                title="PROJECTS"
                description="Current Projects"
                link="/"
            />
        </section>
    );
};

export default WorkComponent;

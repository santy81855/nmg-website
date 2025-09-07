import styles from "./style.module.css";
import Image from "next/image";
import Link from "next/link";

type ItemProps = {
    title: string;
    link: string;
    active: boolean;
};

const Item = ({ title, link, active }: ItemProps) => {
    return (
        <Link
            className={`${styles.item} ${active && styles.active}`}
            href={link}
        >
            <p>{title}</p>
        </Link>
    );
};

type HeaderSectionProps = {
    tab: string | string[];
};

const HeaderSection = ({ tab }: HeaderSectionProps) => {
    return (
        <section className={styles.container}>
            <Image
                className={styles.image}
                src="/images/projects/header.jpg"
                alt="Header Image"
                width={1060}
                height={756}
            />
            <h1 className={styles.title}>Projects</h1>
            <section className={styles.itemContainer}>
                <Item
                    title="All"
                    link="/projects?tab=all"
                    active={tab == "all"}
                />
                <Item
                    title="Bathrooms"
                    link="/projects?tab=bathrooms"
                    active={tab == "bathrooms"}
                />
                <Item
                    title="Kitchens"
                    link="/projects?tab=kitchens"
                    active={tab == "kitchens"}
                />
                <Item
                    title="Decks"
                    link="/projects?tab=decks"
                    active={tab == "decks"}
                />
                <Item
                    title="Basements"
                    link="/projects?tab=basements"
                    active={tab == "basements"}
                />
            </section>
        </section>
    );
};

export default HeaderSection;

import styles from "./style.module.css";
import { JSX } from "react";
import {
    phone,
    mail,
    facebook,
    instagram,
    instagramColor,
    facebookColor,
} from "@/features/landing-page";
import Link from "next/link";

type ItemProps = {
    icon: JSX.Element;
    text: string;
    fill: boolean;
};

const Item = ({ icon, text, fill }: ItemProps) => {
    return (
        <section className={`${fill && styles.itemFill} ${styles.item}`}>
            {icon}
            <p>{text}</p>
        </section>
    );
};

const Details = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Get In Touch</h2>
            <section className={styles.itemContainer}>
                <Item icon={phone} text="(404) 940-2212" fill={true} />
                <Item icon={mail} text="info@nmgremodeling.com" fill={true} />
                <Item icon={facebook} text="@nmgremodeling" fill={true} />
                <Item icon={instagram} text="@nmgremodeling" fill={false} />
                <section className={styles.socialContainer}>
                    <Link
                        href="https://www.instagram.com/nmgremodeling"
                        className={styles.socialItem}
                    >
                        {facebookColor}
                    </Link>
                    <Link
                        href="https://www.facebook.com/nmgremodeling"
                        className={styles.socialItem}
                    >
                        {instagramColor}
                    </Link>
                </section>
            </section>
        </section>
    );
};

export default Details;

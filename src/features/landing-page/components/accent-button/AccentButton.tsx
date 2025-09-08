import styles from "./style.module.css";
import Link from "next/link";

type AccentButtonProps = {
    text: string;
};

const AccentButton = ({ text }: AccentButtonProps) => {
    return (
        <Link href="/contact-us" className={styles.button}>
            {text}
        </Link>
    );
};

export default AccentButton;

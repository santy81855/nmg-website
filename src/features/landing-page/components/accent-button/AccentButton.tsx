import styles from "./style.module.css";

type AccentButtonProps = {
    text: string;
};

const AccentButton = ({ text }: AccentButtonProps) => {
    return <button className={styles.button}>{text}</button>;
};

export default AccentButton;

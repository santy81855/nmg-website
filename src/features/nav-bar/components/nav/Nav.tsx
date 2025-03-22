import styles from "./style.module.css";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <section className={styles.content}>
                <Link href="/" className={styles.logoContainer}>
                    <Image
                        className={styles.logo}
                        src="/logos/white.png"
                        alt="Logo"
                        width={30}
                        height={40}
                    />
                    <h3 className={styles.name}>NM&G Remodeling</h3>
                </Link>
                <ul className={styles.navLinks}>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                </ul>
            </section>
        </nav>
    );
};

export default Navbar;

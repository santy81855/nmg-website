import styles from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import HamburgerMenu from "../hamburger-menu/HamburgerMenu";

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
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link href="/contact-us">Contact Us</Link>
                    </li>
                </ul>
            </section>
            <div className={styles.hamburgerMenu}>
                <HamburgerMenu />
            </div>
        </nav>
    );
};

export default Navbar;

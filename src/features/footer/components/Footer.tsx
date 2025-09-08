"use client";

import Image from "next/image";
import styles from "./style.module.css";

export function Footer() {
    return (
        <footer className={styles.footerWrap}>
            <div className={styles.inner}>
                <div className={styles.ruleRow}>
                    <span className={styles.rule} aria-hidden></span>
                    <Image
                        src="/logos/red.png"
                        alt="NM&G Remodeling logo"
                        width={44}
                        height={44}
                        className={styles.logo}
                        priority={false}
                    />
                    <span className={styles.rule} aria-hidden></span>
                </div>
            </div>
        </footer>
    );
}


"use client";

import { useState } from "react";
import style from "./style.module.css";
import "react-hamburger-menus/dist/style.css";
import { ResponsiveNavbar } from "react-hamburger-menus";
import Image from "next/image";
import Link from "next/link";

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className={style.container}>
            <ResponsiveNavbar
                toggleNavigationBarSmallValue={isOpen}
                logo={
                    <div className={style.logoContainer}>
                        <Image
                            className={style.logo}
                            src="/logos/white.png"
                            alt="Logo"
                            width={30}
                            height={40}
                        />
                        <h3 className={style.name}>NM&G Remodeling</h3>
                    </div>
                }
                iconColor="white"
                styles={{
                    navigation: {
                        fontFamily: "var(--font-family)",
                        color: "white",
                    },
                    navigationBarSmall: {
                        backgroundColor: "rgba(30, 30, 30, 0.4)",
                        height: "100%",
                    },
                    navigationCardSmall: {
                        backgroundColor: "white",
                    },
                }}
                toggleNavigationBarSmallFunction={onClick}
            >
                <ul className={style.navLinks}>
                    <li>
                        <Link href="/" onClick={onClick}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" onClick={onClick}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects" onClick={onClick}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact-us" onClick={onClick}>
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </ResponsiveNavbar>
        </section>
    );
};

export default HamburgerMenu;

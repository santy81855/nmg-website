"use client";

import { JSX } from "react";
import styles from "./style.module.css";
import {
    deck,
    kitchen,
    bathroom,
    stairs,
    downArrow,
} from "@/features/landing-page";
import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";

type ItemProps = {
    title: string;
    description: string;
    image: string;
    icon: JSX.Element;
    number: number;
    openItem: number;
    setOpenItem: (index: number) => void;
};

const Item = ({
    title,
    description,
    image,
    icon,
    number,
    openItem,
    setOpenItem,
}: ItemProps) => {
    const handleClick = () => {
        setOpenItem(number);
    };

    return number === openItem ? (
        <AnimatePresence mode="wait">
            <motion.div
                className={styles.expandedItem}
                key={"e-item" + number}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                exit={{ scaleY: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ transformOrigin: "top" }}
            >
                <Image
                    className={styles.image}
                    src={image}
                    alt={title}
                    fill
                    quality={100}
                    priority
                    sizes="(max-width: 768px) 100vw, 600px"
                />
                <section className={styles.content}>
                    <section className={styles.textContainer}>
                        <p className={styles.title}>{title}</p>
                        <p className={styles.description}>{description}</p>
                    </section>
                    <button>LEARN MORE</button>
                </section>
            </motion.div>
        </AnimatePresence>
    ) : (
        <motion.div className={styles.item}>
            <div className={styles.icon}>{icon}</div>
            <section className={styles.titleContainer}>
                {title.split(" ").map((word, index) => (
                    <h2 className={styles.title} key={title + index}>
                        {word}
                    </h2>
                ))}
            </section>
            <button className={styles.arrow} onClick={handleClick}>
                {downArrow}
            </button>
        </motion.div>
    );
};

const VerticalSlideout = () => {
    const [openItem, setOpenItem] = useState(2);

    useEffect(() => {
        const interval = setInterval(() => {
            setOpenItem((openItem + 1) % 4);
        }, 10000);

        return () => clearInterval(interval);
    }, [openItem]);

    return (
        <section className={styles.container}>
            <Item
                title="Deck Remodeling"
                description="Custom deck design and construction"
                image="/images/home/deck.webp"
                icon={deck}
                number={0}
                openItem={openItem}
                setOpenItem={setOpenItem}
            />
            <Item
                title="Kitchen Remodeling"
                description="Custom deck design and construction"
                image="/images/home/kitchen.webp"
                icon={kitchen}
                number={1}
                openItem={openItem}
                setOpenItem={setOpenItem}
            />
            <Item
                title="Bathroom Remodeling"
                description="Custom deck design and construction"
                image="/images/home/bathroom.jpg"
                icon={bathroom}
                number={2}
                openItem={openItem}
                setOpenItem={setOpenItem}
            />
            <Item
                title="Basement Remodeling"
                description="Custom deck design and construction"
                image="/images/home/basement.jfif"
                icon={stairs}
                number={3}
                openItem={openItem}
                setOpenItem={setOpenItem}
            />
        </section>
    );
};

export default VerticalSlideout;

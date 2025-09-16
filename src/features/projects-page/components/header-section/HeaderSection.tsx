"use client";
import styles from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

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
    const current = Array.isArray(tab) ? tab[0] : tab;
    const items = useMemo(
        () => [
            { title: "All", value: "all" },
            { title: "Bathrooms", value: "bathrooms" },
            { title: "Kitchens", value: "kitchens" },
            { title: "Decks", value: "decks" },
            { title: "Basements", value: "basements" },
            { title: "Other", value: "other" }, // last
        ],
        []
    );

    const containerRef = useRef<HTMLDivElement | null>(null);
    const moreBtnRef = useRef<HTMLButtonElement | null>(null);
    const moreWrapRef = useRef<HTMLDivElement | null>(null);
    const measureRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const [visibleCount, setVisibleCount] = useState(items.length);
    const [menuOpen, setMenuOpen] = useState(false);

    // measure and decide how many tabs fit
    const recalc = () => {
        const container = containerRef.current;
        if (!container) return;
        const widthsAll = measureRefs.current.map((el) => el?.offsetWidth ?? 0);
        // split items into candidates (visible) and fixed hidden (other)
        const candidatesIdx = items
            .map((it, i) => ({ it, i }))
            .filter(({ it }) => it.value !== "other")
            .map(({ i }) => i);

        const candidateWidths = candidatesIdx.map((i) => widthsAll[i]);
        const moreWidth = (moreBtnRef.current?.offsetWidth ?? 48) + 8; // always present
        const available = Math.max(0, container.clientWidth - moreWidth);

        let sum = 0;
        let fit = 0;
        for (let i = 0; i < candidateWidths.length; i++) {
            const w = candidateWidths[i] ?? 0;
            if (sum + w <= available) {
                sum += w;
                fit = i + 1;
            } else {
                break;
            }
        }
        setVisibleCount(Math.max(0, Math.min(fit, candidateWidths.length)));
    };

    useLayoutEffect(() => {
        recalc();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        const ro = new ResizeObserver(() => recalc());
        if (containerRef.current) ro.observe(containerRef.current);
        window.addEventListener("resize", recalc);
        return () => {
            ro.disconnect();
            window.removeEventListener("resize", recalc);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        // close menu when route changes via anchors
        setMenuOpen(false);
    }, [current]);

    // Close menu on outside click or Escape key
    useEffect(() => {
        if (!menuOpen) return;
        const onPointerDown = (e: PointerEvent) => {
            const wrap = moreWrapRef.current;
            if (wrap && e.target && !wrap.contains(e.target as Node)) {
                setMenuOpen(false);
            }
        };
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setMenuOpen(false);
        };
        document.addEventListener("pointerdown", onPointerDown);
        document.addEventListener("keydown", onKey);
        return () => {
            document.removeEventListener("pointerdown", onPointerDown);
            document.removeEventListener("keydown", onKey);
        };
    }, [menuOpen]);

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
            <section className={styles.itemContainer} ref={containerRef}>
                {/* Hidden measurement row */}
                <div className={styles.measureRow} aria-hidden>
                    {items.map((it, i) => (
                        <span
                            key={`m-${it.value}`}
                            className={styles.measureTab}
                            ref={(el) => {
                                measureRefs.current[i] = el;
                            }}
                        >
                            {it.title}
                        </span>
                    ))}
                </div>

                {/* Visible fill row */}
                <div className={styles.fillRow}>
                    {items
                        .filter((it) => it.value !== "other")
                        .slice(0, visibleCount)
                        .map((it) => (
                        <div key={it.value} className={styles.tabWrapper}>
                            <Item
                                title={it.title}
                                link={`/projects?tab=${it.value}`}
                                active={current === it.value}
                            />
                        </div>
                    ))}
                </div>
                <div className={styles.moreWrap} ref={moreWrapRef}>
                    <button
                        ref={moreBtnRef}
                        className={`${styles.item} ${
                            menuOpen ? styles.active : ""
                        } ${styles.moreBtn}`}
                        onClick={() => setMenuOpen((s) => !s)}
                        aria-haspopup="menu"
                        aria-expanded={menuOpen}
                        aria-label="More project categories"
                    >
                        …
                    </button>
                    {menuOpen && (
                        <div role="menu" className={styles.menu}>
                            {/* Always include Other */}
                            {items
                                .filter((it) => it.value === "other")
                                .map((it) => (
                                    <Link
                                        key={it.value}
                                        className={`${styles.menuItem} ${
                                            current === it.value
                                                ? styles.active
                                                : ""
                                        }`}
                                        href={`/projects?tab=${it.value}`}
                                        role="menuitem"
                                    >
                                        {it.title}
                                    </Link>
                                ))}
                            {/* And any overflowed regular tabs */}
                            {items
                                .filter((it) => it.value !== "other")
                                .slice(visibleCount)
                                .map((it) => (
                                    <Link
                                        key={it.value}
                                        className={`${styles.menuItem} ${
                                            current === it.value
                                                ? styles.active
                                                : ""
                                        }`}
                                        href={`/projects?tab=${it.value}`}
                                        role="menuitem"
                                    >
                                        {it.title}
                                    </Link>
                                ))}
                        </div>
                    )}
                </div>
            </section>
        </section>
    );
};

export default HeaderSection;

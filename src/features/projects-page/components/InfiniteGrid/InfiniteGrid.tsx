"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./style.module.css";
import type { Project } from "@/data/projects";
import ProjectCard from "@/features/projects-page/components/ProjectCard/ProjectCard";

type Props = {
    items: Project[];
    batch?: number; // how many to add per step
    initial?: number; // initial render count
};

const InfiniteGrid = ({ items, batch = 9, initial = 9 }: Props) => {
    const [count, setCount] = useState(Math.min(initial, items.length));
    const sentinelRef = useRef<HTMLDivElement | null>(null);

    // Reset when the list of items changes (tab switch, etc.)
    useEffect(() => {
        setCount(Math.min(initial, items.length));
    }, [items, initial]);

    const hasMore = count < items.length;
    const visibleItems = useMemo(() => items.slice(0, count), [items, count]);

    useEffect(() => {
        if (!hasMore) return; // nothing to observe
        const node = sentinelRef.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    setCount((c) => Math.min(c + batch, items.length));
                }
            },
            { root: null, rootMargin: "1000px 0px", threshold: 0 }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [hasMore, batch, items.length]);

    if (!items.length) return <p className={styles.empty}>No projects yet.</p>;

    return (
        <div className={styles.wrap}>
            <div className={styles.grid}>
                {visibleItems.map((p) => (
                    <ProjectCard key={p.slug} project={p} />
                ))}
            </div>
            <div
                ref={sentinelRef}
                className={styles.sentinel}
                aria-hidden
            />
        </div>
    );
};

export default InfiniteGrid;


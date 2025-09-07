"use client";

import styles from "./style.module.css";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {
    page: number;
    totalPages: number;
};

const Pagination = ({ page, totalPages }: Props) => {
    const router = useRouter();
    const sp = useSearchParams();
    const tab = sp.get("tab") ?? "all";

    const go = (p: number) => {
        const params = new URLSearchParams(sp.toString());
        params.set("tab", tab);
        params.set("page", String(p));
        router.push(`/projects?${params.toString()}`);
    };

    if (totalPages <= 1) return null;

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <nav className={styles.pagination} aria-label="Projects pagination">
            <button
                className={styles.nav}
                onClick={() => go(Math.max(1, page - 1))}
                disabled={page === 1}
            >
                Prev
            </button>
            <div className={styles.pages}>
                {pages.map((p) => (
                    <button
                        key={p}
                        onClick={() => go(p)}
                        className={`${styles.page} ${
                            p === page ? styles.active : ""
                        }`}
                        aria-current={p === page ? "page" : undefined}
                    >
                        {p}
                    </button>
                ))}
            </div>
            <button
                className={styles.nav}
                onClick={() => go(Math.min(totalPages, page + 1))}
                disabled={page === totalPages}
            >
                Next
            </button>
        </nav>
    );
};

export default Pagination;

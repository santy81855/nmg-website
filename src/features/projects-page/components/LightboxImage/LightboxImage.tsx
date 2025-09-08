"use client";

import { useState, useEffect, CSSProperties } from "react";
import Image from "next/image";
import styles from "./style.module.css";

type Props = {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
    className?: string;
    sizes?: string;
    fill?: boolean;
    style?: CSSProperties;
};

export default function LightboxImage({
    src,
    alt = "",
    width,
    height,
    className,
    sizes,
    fill,
    style,
}: Props) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open]);

    return (
        <>
            {fill ? (
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className={className}
                    sizes={sizes}
                    onClick={() => setOpen(true)}
                    style={{ cursor: "zoom-in", ...(style ?? {}) }}
                />
            ) : (
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    className={className}
                    sizes={sizes}
                    onClick={() => setOpen(true)}
                    style={{ cursor: "zoom-in", ...(style ?? {}) }}
                />
            )}

            {open && (
                <div
                    className={styles.overlay}
                    role="dialog"
                    aria-modal="true"
                    onClick={() => setOpen(false)}
                >
                    <button
                        className={styles.close}
                        aria-label="Close"
                        onClick={(e) => {
                            e.stopPropagation();
                            setOpen(false);
                        }}
                    >
                        ✕
                    </button>
                    <div className={styles.media} onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={src}
                            alt={alt}
                            fill
                            sizes="100vw"
                            className={styles.mediaImg}
                            priority={false}
                        />
                    </div>
                </div>
            )}
        </>
    );
}

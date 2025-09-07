"use client";

import styles from "./style.module.css";
import Image from "next/image";

type Img = { src: string; width?: number; height?: number; alt?: string };

export default function BeforeAfter({
    before,
    after,
}: {
    before?: Img;
    after: Img;
}) {
    return (
        <section className={styles.wrapper}>
            {before && (
                <figure className={styles.block}>
                    <Image
                        src={before.src}
                        alt={before.alt ?? "Before"}
                        fill
                        className={styles.img}
                        sizes="(max-width:768px) 100vw, 50vw"
                    />
                    <figcaption className={styles.caption}>Before</figcaption>
                </figure>
            )}
            <figure className={styles.block}>
                <Image
                    src={after.src}
                    alt={after.alt ?? "After"}
                    fill
                    className={styles.img}
                    sizes="(max-width:768px) 100vw, 50vw"
                />
                <figcaption className={styles.caption}>After</figcaption>
            </figure>
        </section>
    );
}

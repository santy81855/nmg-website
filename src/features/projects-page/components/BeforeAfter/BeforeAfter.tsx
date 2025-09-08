"use client";

import styles from "./style.module.css";
import LightboxImage from "../LightboxImage/LightboxImage";

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
                    <LightboxImage
                        src={before.src}
                        alt={before.alt ?? "Before"}
                        fill
                        className={styles.img}
                        sizes="(max-width:768px) 100vw, 50vw"
                    />
                </figure>
            )}
            <figure className={styles.block}>
                <LightboxImage
                    src={after.src}
                    alt={after.alt ?? "After"}
                    fill
                    className={styles.img}
                    sizes="(max-width:768px) 100vw, 50vw"
                />
            </figure>
        </section>
    );
}

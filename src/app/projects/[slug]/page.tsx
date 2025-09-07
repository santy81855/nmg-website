import styles from "./page.module.css";
import { notFound } from "next/navigation";
import Image from "next/image";
import BeforeAfter from "@/features/projects-page/components/BeforeAfter/BeforeAfter";
import { projects } from "@/data/projects";

type Params = { slug: string };

export function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetail({ params }: { params: Params }) {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) return notFound();

    const heroSrc = project.hero?.src ?? project.after.src;
    const heroAlt = project.hero?.alt ?? project.after.alt ?? project.title;

    return (
        <article className={styles.wrap}>
            <header className={styles.header}>
                <div className={styles.hero}>
                    <Image
                        src={heroSrc}
                        alt={heroAlt}
                        fill
                        className={styles.heroImg}
                        sizes="(max-width: 768px) 100vw, 100vw"
                        priority
                    />
                    <div className={styles.heroOverlay}>
                        <span className={styles.badge}>{project.category}</span>
                        <h1 className={styles.title}>{project.title}</h1>
                    </div>
                </div>
                {project.summary && (
                    <p className={styles.summary}>{project.summary}</p>
                )}
                {!!project.scope?.length && (
                    <ul className={styles.scope}>
                        {project.scope.map((s) => (
                            <li key={s}>{s}</li>
                        ))}
                    </ul>
                )}
            </header>

            <section className={styles.beforeAfter}>
                {project.before ? (
                    <BeforeAfter
                        before={project.before}
                        after={project.after}
                    />
                ) : (
                    <BeforeAfter after={project.after} />
                )}
            </section>

            {project.gallery?.length ? (
                <section className={styles.gallery}>
                    {project.gallery.map((g) => (
                        <div key={g.src} className={styles.gItem}>
                            <Image
                                src={g.src}
                                alt={g.alt ?? ""}
                                fill
                                className={styles.gImg}
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>
                    ))}
                </section>
            ) : null}
        </article>
    );
}

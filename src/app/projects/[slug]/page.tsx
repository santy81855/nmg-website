import styles from "./page.module.css";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import BeforeAfter from "@/features/projects-page/components/BeforeAfter/BeforeAfter";
import { projects } from "@/data/projects";
import LightboxImage from "@/features/projects-page/components/LightboxImage/LightboxImage";
import { Footer } from "@/features/footer";

type Params = { slug: string };

export function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetail({
    params,
}: {
    params: Promise<Params>;
}) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) return notFound();

    const heroSrc =
        project.hero?.src ??
        project.after?.src ??
        project.gallery?.[0]?.src ??
        "";
    const heroAlt = project.hero?.alt ?? project.after?.alt ?? project.title;

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
                        <span className={styles.heroBadge}>
                            {project.category}
                        </span>
                        <h1 className={styles.heroTitle}>{project.title}</h1>
                    </div>
                </div>
                <div className={styles.breadcrumb}>
                    <Link href="/projects">← Back to Projects</Link>
                </div>
            </header>

            <section className={styles.meta}>
                <div className={`${styles.metaMain} ${styles.card}`}>
                    {project.summary && (
                        <p className={styles.summary}>{project.summary}</p>
                    )}
                    {project.description && (
                        <div className={styles.richText}>
                            <h3 className={styles.sectionHeading}>
                                Project Overview
                            </h3>
                            {project.description
                                .split("\n\n")
                                .map((para, i) => (
                                    <p key={i}>{para}</p>
                                ))}
                        </div>
                    )}
                    {project.testimonial?.quote && (
                        <blockquote className={styles.testimonial}>
                            “{project.testimonial.quote}”
                            {project.testimonial.author && (
                                <footer className={styles.testimonialAuthor}>
                                    — {project.testimonial.author}
                                </footer>
                            )}
                        </blockquote>
                    )}
                </div>
                <aside className={`${styles.metaSide} ${styles.card}`}>
                    <dl className={styles.info}>
                        <div>
                            <dt>Project Type</dt>
                            <dd>{project.category}</dd>
                        </div>
                        {project.location && (
                            <div>
                                <dt>Location</dt>
                                <dd>{project.location}</dd>
                            </div>
                        )}
                        {project.date && (
                            <div>
                                <dt>Completed</dt>
                                <dd>{project.date}</dd>
                            </div>
                        )}
                    </dl>

                    {!!project.scope?.length && (
                        <div className={styles.scopeBlock}>
                            <h3 className={styles.scopeHeading}>
                                Work Included
                            </h3>
                            <ul className={styles.scope}>
                                {project.scope.map((s) => (
                                    <li key={s}>{s}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </aside>
            </section>

            {project.before && project.after ? (
                <section className={styles.beforeAfter}>
                    <div className={styles.card}>
                        <h3 className={styles.sectionHeading}>
                            Before & After
                        </h3>
                        <BeforeAfter
                            before={project.before}
                            after={project.after}
                        />
                    </div>
                </section>
            ) : null}

            {project.gallery?.length ? (
                <section className={`${styles.gallery} ${styles.card}`}>
                    <h3 className={styles.sectionHeading}>Project Gallery</h3>
                    {project.gallery.map((g) => (
                        <div key={g.src} className={styles.gItem}>
                            <LightboxImage
                                src={g.src}
                                alt={g.alt ?? ""}
                                width={g.width ?? 1400}
                                height={g.height ?? 933}
                                className={styles.gImg}
                                sizes="(max-width: 700px) 100vw, (max-width: 1024px) 50vw, (max-width: 1600px) 33vw, 25vw"
                            />
                        </div>
                    ))}
                </section>
            ) : null}

            <section className={styles.cta}>
                <Link href="/contact-us" className={styles.ctaButton}>
                    Get in touch
                </Link>
            </section>
            <Footer />
        </article>
    );
}

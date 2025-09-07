import styles from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

type Props = { project: Project };

const ProjectCard = ({ project }: Props) => {
    const cover = project.hero?.src ?? project.after.src;
    const alt = project.hero?.alt ?? project.after.alt ?? project.title;

    return (
        <Link href={`/projects/${project.slug}`} className={styles.card}>
            <div className={styles.imageWrap}>
                <Image
                    src={cover}
                    alt={alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    className={styles.image}
                />
            </div>
            <div className={styles.overlay}>
                <span className={styles.badge}>{project.category}</span>
                <h3 className={styles.title}>{project.title}</h3>
            </div>
        </Link>
    );
};

export default ProjectCard;

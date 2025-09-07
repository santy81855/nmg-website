import styles from "./style.module.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import type { Project } from "@/data/projects";

type Props = {
    items: Project[];
};

const ProjectGrid = ({ items }: Props) => {
    if (!items.length) return <p className={styles.empty}>No projects yet.</p>;
    return (
        <div className={styles.grid}>
            {items.map((p) => (
                <ProjectCard key={p.slug} project={p} />
            ))}
        </div>
    );
};

export default ProjectGrid;

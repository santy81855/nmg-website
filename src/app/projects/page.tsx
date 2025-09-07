import styles from "./page.module.css";
import { HeaderSection } from "@/features/projects-page";
import ProjectGrid from "@/features/projects-page/components/ProjectGrid/ProjectGrid";
import Pagination from "@/features/projects-page/components/Pagination/Pagination";
import { projects } from "@/data/projects";
import { redirect } from "next/navigation";

// categories that your HeaderSection uses
const CATS = ["all", "bathrooms", "kitchens", "decks", "basements"] as const;
const PAGE_SIZE = 9;

const Page = async ({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
    const { tab, page } = await searchParams; // your file already awaits this
    if (!tab) redirect(`/projects?tab=all`);

    const tabStr = Array.isArray(tab) ? tab[0] : tab;
    const pageNum = Math.max(
        1,
        parseInt(Array.isArray(page) ? page[0] : page || "1", 10)
    );

    // filter by category
    const filtered =
        tabStr === "all" || !CATS.includes(tabStr as typeof CATS[number])
            ? projects
            : projects.filter((p) => p.category === tabStr);

    // sort: featured first, then date desc (fallback: by title)
    const sorted = [...filtered].sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        if (a.date && b.date) return b.date.localeCompare(a.date);
        return a.title.localeCompare(b.title);
    });

    // paginate
    const start = (pageNum - 1) * PAGE_SIZE;
    const pageItems = sorted.slice(start, start + PAGE_SIZE);
    const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));

    return (
        <section className={styles.main}>
            <section className={styles.headerSection}>
                <HeaderSection tab={tabStr} />
            </section>

            <section className={styles.content}>
                <ProjectGrid items={pageItems} />
                <Pagination page={pageNum} totalPages={totalPages} />
            </section>
        </section>
    );
};

export default Page;

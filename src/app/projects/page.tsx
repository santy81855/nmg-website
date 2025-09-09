import styles from "./page.module.css";
import { HeaderSection } from "@/features/projects-page";
import InfiniteGrid from "@/features/projects-page/components/InfiniteGrid/InfiniteGrid";
import { projects } from "@/data/projects";
import { redirect } from "next/navigation";
import { Footer } from "@/features/footer";

// categories that your HeaderSection uses
const CATS = ["all", "bathrooms", "kitchens", "decks", "basements"] as const;
type Category = (typeof CATS)[number];

const isCategory = (v: unknown): v is Category =>
    typeof v === "string" && (CATS as readonly string[]).includes(v);
// no PAGE_SIZE needed with infinite scroll

const Page = async ({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
    const { tab } = await searchParams; // using infinite scroll — no page param
    if (!tab) redirect(`/projects?tab=all`);

    const tabStr = Array.isArray(tab) ? tab[0] : tab;
    // page param removed

    // filter by category
    const selectedTab: Category = isCategory(tabStr) ? tabStr : "all";
    const filtered =
        selectedTab === "all"
            ? projects
            : projects.filter((p) => p.category === selectedTab);

    // sort: featured first, then date desc (fallback: by title)
    const sorted = [...filtered].sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        if (a.date && b.date) return b.date.localeCompare(a.date);
        return a.title.localeCompare(b.title);
    });

    return (
        <section className={styles.main}>
            <section className={styles.headerSection}>
                <HeaderSection tab={selectedTab} />
            </section>

            <section className={styles.content}>
                <InfiniteGrid items={sorted} />
            </section>
            <Footer />
        </section>
    );
};

export default Page;

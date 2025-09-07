// /src/data/projects.ts

export type Project = {
    title: string; // "Master Bathroom Remodel"
    slug: string; // "master-bathroom-remodel-atlanta-2025"
    category: "bathrooms" | "kitchens" | "decks" | "basements" | "other";
    location?: string; // "Atlanta, GA"
    date?: string; // "2025-07"
    summary: string; // short 1–2 sentence overview
    scope: string[]; // e.g. ["New tile flooring", "Custom vanity", "Lighting upgrade"]
    description?: string; // long-form description/content

    hero?: {
        src: string;
        width?: number;
        height?: number;
        alt?: string;
    };

    before?: {
        src: string;
        width?: number;
        height?: number;
        alt?: string;
    };

    after: {
        src: string;
        width?: number;
        height?: number;
        alt?: string;
    };

    gallery?: {
        src: string;
        width?: number;
        height?: number;
        alt?: string;
    }[];

    testimonial?: {
        quote: string;
        author?: string;
    };

    featured?: boolean;

    seo?: {
        title?: string; // custom meta title
        description?: string; // custom meta description
    };
};

export const projects: Project[] = [
    {
        title: "Tile shower and bathtub remodel",
        slug: "kenneston-bathroom",
        category: "bathrooms",
        summary: "A full bathroom remodel.",
        scope: ["Tile shower", "Added bathtub"],
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, risus in volutpat rhoncus, urna nulla fermentum eros, a placerat lacus libero id libero. Integer ac vulputate felis.\n\nCurabitur a massa id neque eleifend mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent ut scelerisque massa. Donec mattis, mi non pharetra convallis, mi nibh cursus leo, id lacinia urna lorem ac arcu.",
        hero: {
            src: "/projects/kenneston-bathroom/after.jpg",
            alt: "Finished bathroom remodel",
            width: 3000,
            height: 4000,
        },
        before: {
            src: "/projects/kenneston-bathroom/before.jpg",
            alt: "Bathroom before remodel",
            width: 3000,
            height: 4000,
        },
        after: {
            src: "/projects/kenneston-bathroom/after.jpg",
            alt: "Bathroom after remodel",
            width: 3000,
            height: 4000,
        },
        featured: false,
        seo: {
            title: "Modern Bathroom Remodel",
            description: "Tile shower and bathtub remodel.",
        },
    },
    {
        title: "Deck construction",
        slug: "charles-deck",
        category: "decks",
        summary: "A new deck construction.",
        scope: ["Pressure-treated wood", "Custom railing", "elevated deck"],
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae sapien et quam euismod aliquet. Suspendisse potenti. Phasellus non mattis tellus, eu pellentesque tortor.\n\nAenean vel justo volutpat, sagittis turpis at, feugiat odio. Nulla facilisi. Nam pulvinar orci a orci lobortis, vitae fringilla sem convallis.",
        hero: {
            src: "/projects/charles-deck/after.jpg",
            alt: "Finished deck construction",
            width: 1512,
            height: 2016,
        },
        before: {
            src: "/projects/charles-deck/before.jpg",
            alt: "Yard before deck construction",
            width: 4000,
            height: 3000,
        },
        after: {
            src: "/projects/charles-deck/after.jpg",
            alt: "Yard after deck construction",
            width: 1512,
            height: 2016,
        },
        gallery: [
            {
                src: "/projects/charles-deck/gallery-01.jpg",
                alt: "Deck angle 1",
                width: 3000,
                height: 4000,
            },
            {
                src: "/projects/charles-deck/gallery-02.jpg",
                alt: "Deck angle 2",
                width: 2040,
                height: 1530,
            },
            {
                src: "/projects/charles-deck/gallery-03.jpg",
                alt: "Deck angle 3",
                width: 3543,
                height: 2314,
            },
        ],
        featured: true,
        seo: {
            title: "Custom Deck Construction",
            description: "A new elevated deck with custom railing.",
        },
    },
    {
        title: "Basement finishing and remodeling",
        slug: "tefera-basement",
        category: "basements",
        summary: "A basement finishing and remodeling project.",
        scope: [
            "Drywall installation",
            "Flooring",
            "LED Lighting",
            "Bathroom addition",
            "Custom bar",
        ],
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet risus vitae metus porta tincidunt. Suspendisse potenti. Etiam eu rhoncus mauris, id volutpat arcu.\n\nMauris sed efficitur augue. Fusce sit amet arcu vitae nulla pharetra aliquam. Cras iaculis orci at justo dictum, id congue erat tristique.",
        hero: {
            src: "/projects/tefera-basement/after.jpg",
            alt: "Finished basement remodel",
            width: 4032,
            height: 3024,
        },
        before: {
            src: "/projects/tefera-basement/before.jpg",
            alt: "Basement before remodel",
            width: 4032,
            height: 3024,
        },
        after: {
            src: "/projects/tefera-basement/after.jpg",
            alt: "Basement after remodel",
            width: 4032,
            height: 3024,
        },
        gallery: [
            {
                src: "/projects/tefera-basement/gallery-01.jpg",
                alt: "Basement angle 1",
                width: 4032,
                height: 3024,
            },
            {
                src: "/projects/tefera-basement/gallery-02.jpg",
                alt: "Basement angle 2",
                width: 4032,
                height: 3024,
            },
            {
                src: "/projects/tefera-basement/gallery-03.jpg",
                alt: "Basement angle 3",
                width: 4032,
                height: 3024,
            },
        ],
        featured: true,
        seo: {
            title: "Basement Finishing and Remodeling",
            description:
                "A complete basement finishing and remodeling project.",
        },
    },
    {
        title: "Bathroom and shower remodel",
        slug: "josh-bathroom",
        category: "bathrooms",
        summary: "A bathroom and shower remodel.",
        scope: ["Tile shower", "Custom vanity", "Lighting upgrade"],
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis, dui in elementum gravida, lectus augue dictum nulla, vitae porttitor arcu arcu sit amet lorem.\n\nInteger ultricies, nunc quis consectetur aliquet, turpis massa egestas velit, id ultrices nunc purus vitae arcu.",
        hero: {
            src: "/projects/josh-bathroom/after.jpg",
            alt: "Finished bathroom remodel",
            width: 1868,
            height: 4000,
        },
        before: {
            src: "/projects/josh-bathroom/before.jpg",
            alt: "Bathroom before remodel",
            width: 3000,
            height: 4000,
        },
        after: {
            src: "/projects/josh-bathroom/after.jpg",
            alt: "Bathroom after remodel",
            width: 1868,
            height: 4000,
        },
        gallery: [
            {
                src: "/projects/josh-bathroom/gallery-01.jpg",
                alt: "Bathroom angle 1",
                width: 1868,
                height: 4000,
            },
            {
                src: "/projects/josh-bathroom/gallery-02.jpg",
                alt: "Bathroom angle 2",
                width: 1868,
                height: 4000,
            },
            {
                src: "/projects/josh-bathroom/gallery-03.jpg",
                alt: "Bathroom angle 3",
                width: 1868,
                height: 4000,
            },
        ],
        featured: true,
        seo: {
            title: "Bathroom and Shower Remodel",
            description: "A modern bathroom and shower remodel.",
        },
    },
    {
        title: "Basement kitchen remodel",
        slug: "andrew-basement",
        category: "basements",
        summary: "A basement kitchen remodel.",
        scope: ["Custom cabinets", "Lighting upgrade"],
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel lacinia purus. In suscipit eget lectus at mattis. Sed elementum justo ut ante interdum, id tempor nibh placerat.\n\nDuis tempor, quam id aliquet imperdiet, arcu nibh cursus libero, vitae pulvinar magna mi quis est.",
        hero: {
            src: "/projects/andrew-basement/after.jpg",
            alt: "Finished basement kitchen remodel",
            width: 1600,
            height: 1200,
        },
        before: {
            src: "/projects/andrew-basement/before.jpg",
            alt: "Basement kitchen before remodel",
            width: 4000,
            height: 3000,
        },
        after: {
            src: "/projects/andrew-basement/after.jpg",
            alt: "Basement kitchen after remodel",
            width: 1600,
            height: 1200,
        },
        gallery: [
            {
                src: "/projects/andrew-basement/gallery-01.jpg",
                alt: "Basement kitchen angle 1",
                width: 2048,
                height: 1536,
            },
            {
                src: "/projects/andrew-basement/gallery-02.jpg",
                alt: "Basement kitchen angle 2",
                width: 4000,
                height: 3000,
            },
        ],
        featured: false,
        seo: {
            title: "Basement Kitchen Remodel",
            description: "A modern basement kitchen remodel.",
        },
    },
    {
        title: "Kitchen remodel",
        slug: "jonesboro-kitchen",
        category: "kitchens",
        summary: "A full kitchen remodel.",
        scope: [
            "Custom cabinets",
            "New countertops",
            "Lighting upgrade",
            "island installation",
        ],
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu dui sed mi faucibus tempus. Aliquam commodo ullamcorper sem, vitae tempor est interdum quis.\n\nUt tristique ex sed risus blandit, non sollicitudin arcu fermentum. Praesent a nunc at quam viverra finibus.",
        hero: {
            src: "/projects/jonesboro-kitchen/after.jpg",
            alt: "Finished kitchen remodel",
            width: 4000,
            height: 2252,
        },
        before: {
            src: "/projects/jonesboro-kitchen/before.jpg",
            alt: "Kitchen before remodel",
            width: 3264,
            height: 1836,
        },
        after: {
            src: "/projects/jonesboro-kitchen/after.jpg",
            alt: "Kitchen after remodel",
            width: 4000,
            height: 2252,
        },
        gallery: [
            {
                src: "/projects/jonesboro-kitchen/gallery-01.jpg",
                alt: "Kitchen angle 1",
                width: 2252,
                height: 4000,
            },
            {
                src: "/projects/jonesboro-kitchen/gallery-02.jpg",
                alt: "Kitchen angle 2",
                width: 2252,
                height: 4000,
            },
        ],
        featured: true,
        seo: {
            title: "Kitchen Remodel",
            description: "A modern kitchen remodel.",
        },
    },
    {
        title: "Bathroom remodel",
        slug: "arquis-bathroom",
        category: "bathrooms",
        summary: "A full shower remodel.",
        scope: ["Tile shower", "Custom vanity", "Lighting upgrade"],
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a ligula pharetra, mattis felis vel, vulputate tellus.\n\nSed imperdiet sapien a arcu tristique, in dictum mi consequat. Curabitur vitae interdum lectus.",
        hero: {
            src: "/projects/arquis-bathroom/after.jpg",
            alt: "Finished bathroom remodel",
            width: 768,
            height: 1024,
        },
        before: {
            src: "/projects/arquis-bathroom/before.jpg",
            alt: "Bathroom before remodel",
            width: 4000,
            height: 3000,
        },
        after: {
            src: "/projects/arquis-bathroom/after.jpg",
            alt: "Bathroom after remodel",
            width: 768,
            height: 1024,
        },
        featured: false,
        seo: {
            title: "Bathroom Remodel",
            description: "A modern bathroom remodel.",
        },
    },
    {
        title: "Bathroom remodel",
        slug: "miles-bathroom",
        category: "bathrooms",
        summary: "A full bathroom remodel.",
        scope: ["Shower upgrade"],
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra nisl ut ex rhoncus, a volutpat arcu auctor. Integer vitae ante nisi.\n\nDonec sed sem id libero luctus posuere nec at massa.",
        hero: {
            src: "/projects/miles-bathroom/after.jpg",
            alt: "Finished bathroom remodel",
            width: 1152,
            height: 2048,
        },
        before: {
            src: "/projects/miles-bathroom/before.jpg",
            alt: "Bathroom before remodel",
            width: 3000,
            height: 4000,
        },
        after: {
            src: "/projects/miles-bathroom/after.jpg",
            alt: "Bathroom after remodel",
            width: 1152,
            height: 2048,
        },
        featured: false,
        seo: {
            title: "Bathroom Remodel",
            description: "A modern bathroom remodel.",
        },
    },
    {
        title: "Shower remodel",
        slug: "scott-bathroom",
        category: "bathrooms",
        summary: "A full shower remodel.",
        scope: ["Tile shower"],
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu mattis ipsum. Integer viverra efficitur mauris id interdum.\n\nQuisque iaculis, nibh eget finibus sagittis, nunc libero condimentum nisl, vitae mattis mi nunc non arcu.",
        hero: {
            src: "/projects/scott-bathroom/after.jpg",
            alt: "Finished shower remodel",
            width: 1334,
            height: 1600,
        },
        after: {
            src: "/projects/scott-bathroom/after.jpg",
            alt: "Finished shower remodel",
            width: 1334,
            height: 1600,
        },
        featured: false,
        seo: {
            title: "Shower Remodel",
            description: "A modern shower remodel.",
        },
    },
];

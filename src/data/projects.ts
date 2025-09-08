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
        summary:
            "Gutted and rebuilt a small bathroom with a new tub/shower, beadboard wainscoting and bright, clean finishes.",
        scope: [
            "Demo to studs and subfloor repairs",
            "New plumbing rough‑ins and shutoffs",
            "Waterproofed window wall and surround",
            "Alcove tub with white subway tile to the ceiling",
            "Brass tub/shower trim and new shower rod",
            "Beadboard wainscoting, trim, paint",
        ],
        description:
            "This bath was taken down to framing. We replaced compromised plank subflooring, corrected plumbing locations and properly waterproofed the wet wall that includes a window. The new alcove tub is wrapped in classic subway tile with tight, even lines and mildew‑resistant grout. We finished the room with beadboard wainscoting and fresh paint for a bright, low‑maintenance space that will hold up to daily use.",
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
        summary:
            "Elevated composite deck with a screened porch wall, safe access stair and low‑maintenance finishes.",
        scope: [
            "Concrete footings and pressure‑treated framing",
            "Composite decking with picture‑frame detail",
            "Black aluminum balusters with PT rails",
            "Wide access stairs",
            "Screened wall system with full‑view door",
            "Proper ledger flashing and code hardware",
        ],
        description:
            "We framed a new elevated deck tied into the brick home with properly flashed ledger and through‑bolted connections. The walking surface is composite for longevity and easy upkeep. A screened wall creates a protected sitting area while the open deck remains for grilling and sun. Black metal balusters keep views open and the wide stair makes access to the yard comfortable and safe.",
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
        summary:
            "Complete basement finish with porcelain tile floors, a custom wet bar and LED cove lighting.",
        scope: [
            "Framing, insulation and drywall",
            "Electrical rough‑in, recessed cans and LED cove",
            "Plumbing for wet bar",
            "Porcelain tile flooring throughout",
            "Brick veneer feature wall",
            "Granite bar top with tiled face",
        ],
        description:
            "This space started as open framing and insulation. We laid out zones for entertaining, added a full wet‑bar with plumbing and power, and finished the room with durable porcelain tile. A brick veneer wall anchors the room while the tray with LED cove lighting gives the basement a warm, finished feel. Everything is clean, code‑compliant and easy to maintain.",
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
        summary:
            "Tub‑to‑shower conversion with a black‑grid glass panel, marble accents and clean new finishes.",
        scope: [
            "Demo and conversion from tub to walk‑in shower",
            "Waterproof pan and niche, subway tile walls",
            "Marble mosaic shower floor and curb caps",
            "Matte‑black trim and hardware",
            "New vanity with marble top and updated flooring",
            "Paint and wood shelving",
        ],
        description:
            "We opened up a cramped bath by removing the old tub and building a full‑size walk‑in shower. The pan is properly sloped and waterproofed, finished with marble hex mosaic that ties into the vanity top. Matte black trim and a steel‑grid style panel give the room a modern edge while keeping maintenance simple.",
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
        summary:
            "Basement kitchenette and feature wall with floating shelves and integrated lighting.",
        scope: [
            "Rough plumbing and electrical for kitchenette",
            "Base cabinets with quartz counters",
            "Full tile feature wall in gray subway",
            "Custom stained floating shelves",
            "LED under‑shelf lighting and recessed cans",
            "Drywall, paint and trim",
        ],
        description:
            "We built out a clean, functional kitchenette anchored by a full height tiled wall. Two timber posts and floating shelves with integrated LED lighting provide display space and warmth against the gray tile. Durable quartz counters and modern cabinetry make the area ready for daily use and entertaining.",
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
        summary: "Full kitchen renovation with a waterfall island, new shaker cabinetry and full‑height quartz splash.",
        scope: [
            "Layout update and soffit removal",
            "New shaker cabinets with glass display uppers",
            "Quartz counters with waterfall island",
            "Full‑height quartz backsplash",
            "Under‑cabinet and in‑cabinet lighting",
            "New hood and appliance upgrades",
        ],
        description:
            "This 90s kitchen was rebuilt with a cleaner layout and brighter finishes. We installed new shaker cabinetry, added a large waterfall island and ran quartz up the walls for a continuous, easy‑to‑clean backsplash. Layered lighting—pendants, under‑cabinet and lit display uppers—keeps the workspace bright and inviting.",
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
        summary: "New tiled shower with large‑format gray tile and a modern spa panel.",
        scope: [
            "New shower pan and waterproofing",
            "Large‑format gray wall tile",
            "Recessed niche and stone threshold",
            "Multi‑function shower tower and handheld",
        ],
        description:
            "We rebuilt the shower from the studs, waterproofed properly and finished the walls in a contemporary large‑format tile. A multi‑function shower panel adds body sprays and a rainfall head. The penny‑round floor mosaic provides grip and a timeless look.",
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
        summary:
            "Upgraded shower with frameless glass, marble‑look tile and basketweave mosaic pan next to a soaking tub.",
        scope: [
            "Re‑tile shower walls in marble‑look subway",
            "Built‑in niches",
            "Basketweave mosaic shower pan and curb",
            "Frameless glass enclosure with matte black hardware",
        ],
        description:
            "We refreshed this primary bath by rebuilding the shower with a new waterproof pan and crisp marble‑look tile. A basketweave mosaic floor ties in with the room’s gray plank tile, and a frameless enclosure keeps sightlines open to the freestanding tub.",
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
        summary:
            "Glass shower with marble‑look tile, dual niches and mosaic pan—bright, clean and easy to maintain.",
        scope: [
            "New waterproof pan and curb",
            "Marble‑look subway tile with accent niches",
            "Frameless glass enclosure",
            "Updated trim with handheld",
        ],
        description:
            "We built a tight, leak‑free shower using durable materials: porcelain wall tile with marble veining, a mosaic pan for traction and a frameless enclosure to keep the room feeling open. The niches provide practical storage without crowding the design.",
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

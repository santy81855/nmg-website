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

    after?: {
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
            "New plumbing rough-ins and shutoffs",
            "Waterproofed window wall and surround",
            "Alcove tub with white subway tile to the ceiling",
            "Brass tub/shower trim and new shower rod",
            "Beadboard wainscoting, trim, paint",
        ],
        description:
            "This bath was taken down to framing. We replaced compromised plank subflooring, corrected plumbing locations and properly waterproofed the wet wall that includes a window. The new alcove tub is wrapped in classic subway tile with tight, even lines and mildew-resistant grout. We finished the room with beadboard wainscoting and fresh paint for a bright, low-maintenance space that will hold up to daily use.",
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
            "Elevated composite deck with a screened porch wall, safe access stair and low-maintenance finishes.",
        scope: [
            "Concrete footings and pressure-treated framing",
            "Composite decking with picture-frame detail",
            "Black aluminum balusters with PT rails",
            "Wide access stairs",
            "Screened wall system with full-view door",
            "Proper ledger flashing and code hardware",
        ],
        description:
            "We framed a new elevated deck tied into the brick home with properly flashed ledger and through-bolted connections. The walking surface is composite for longevity and easy upkeep. A screened wall creates a protected sitting area while the open deck remains for grilling and sun. Black metal balusters keep views open and the wide stair makes access to the yard comfortable and safe.",
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
            "Electrical rough-in, recessed cans and LED cove",
            "Plumbing for wet bar",
            "Porcelain tile flooring throughout",
            "Brick veneer feature wall",
            "Granite bar top with tiled face",
        ],
        description:
            "This space started as open framing and insulation. We laid out zones for entertaining, added a full wet-bar with plumbing and power, and finished the room with durable porcelain tile. A brick veneer wall anchors the room while the tray with LED cove lighting gives the basement a warm, finished feel. Everything is clean, code-compliant and easy to maintain.",
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
            "Tub-to-shower conversion with a black-grid glass panel, marble accents and clean new finishes.",
        scope: [
            "Demo and conversion from tub to walk-in shower",
            "Waterproof pan and niche, subway tile walls",
            "Marble mosaic shower floor and curb caps",
            "Matte-black trim and hardware",
            "New vanity with marble top and updated flooring",
            "Paint and wood shelving",
        ],
        description:
            "We opened up a cramped bath by removing the old tub and building a full-size walk-in shower. The pan is properly sloped and waterproofed, finished with marble hex mosaic that ties into the vanity top. Matte black trim and a steel-grid style panel give the room a modern edge while keeping maintenance simple.",
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
            "LED under-shelf lighting and recessed cans",
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
        summary:
            "Full kitchen renovation with a waterfall island, new shaker cabinetry and full-height quartz splash.",
        scope: [
            "Layout update and soffit removal",
            "New shaker cabinets with glass display uppers",
            "Quartz counters with waterfall island",
            "Full-height quartz backsplash",
            "Under-cabinet and in-cabinet lighting",
            "New hood and appliance upgrades",
        ],
        description:
            "This 90s kitchen was rebuilt with a cleaner layout and brighter finishes. We installed new shaker cabinetry, added a large waterfall island and ran quartz up the walls for a continuous, easy-to-clean backsplash. Layered lighting—pendants, under-cabinet and lit display uppers—keeps the workspace bright and inviting.",
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
        summary:
            "New tiled shower with large-format gray tile and a modern spa panel.",
        scope: [
            "New shower pan and waterproofing",
            "Large-format gray wall tile",
            "Recessed niche and stone threshold",
            "Multi-function shower tower and handheld",
        ],
        description:
            "We rebuilt the shower from the studs, waterproofed properly and finished the walls in a contemporary large-format tile. A multi-function shower panel adds body sprays and a rainfall head. The penny-round floor mosaic provides grip and a timeless look.",
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
            "Upgraded shower with frameless glass, marble-look tile and basketweave mosaic pan next to a soaking tub.",
        scope: [
            "Re-tile shower walls in marble-look subway",
            "Built-in niches",
            "Basketweave mosaic shower pan and curb",
            "Frameless glass enclosure with matte black hardware",
        ],
        description:
            "We refreshed this primary bath by rebuilding the shower with a new waterproof pan and crisp marble-look tile. A basketweave mosaic floor ties in with the room’s gray plank tile, and a frameless enclosure keeps sightlines open to the freestanding tub.",
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
            "Glass shower with marble-look tile, dual niches and mosaic pan—bright, clean and easy to maintain.",
        scope: [
            "New waterproof pan and curb",
            "Marble-look subway tile with accent niches",
            "Frameless glass enclosure",
            "Updated trim with handheld",
        ],
        description:
            "We built a tight, leak-free shower using durable materials: porcelain wall tile with marble veining, a mosaic pan for traction and a frameless enclosure to keep the room feeling open. The niches provide practical storage without crowding the design.",
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
    {
        slug: "detached-garage-roof-rebuild",
        title: "Detached Garage Roof Rebuild & Exterior Refresh",
        category: "other",
        summary:
            "Removed storm-damaged roof, reframed with new rafters and ridge, installed sheathing, and restored exterior trims/siding to match the home. Final result blends seamlessly with existing façade.",
        scope: [
            "Full roof tear-off and structural reframing",
            "New sheathing and weather barrier",
            "Exterior trim/siding repairs and paint match",
            "Garage door and surround reinstalled/realigned",
        ],
        description:
            "After storm damage, this garage was stripped down and rebuilt with new rafters, sheathing, and exterior finishes. The siding and trim were carefully matched to the main house, making the garage look like it had always been part of the original design. The result is a strong, weather-tight structure with a seamless exterior that blends perfectly with the home.",
        before: {
            src: "/projects/outdoor-garage/before.jpg",
            width: 3000,
            height: 4000,
            alt: "Garage opening tarped after storm damage",
        },
        after: {
            src: "/projects/outdoor-garage/after.jpg",
            width: 4000,
            height: 3000,
            alt: "Finished detached garage with new roof and matching exterior",
        },

        hero: {
            src: "/projects/outdoor-garage/after.jpg",
            width: 4000,
            height: 3000,
            alt: "Finished detached garage exterior",
        },
        gallery: [
            {
                src: "/projects/outdoor-garage/gallery-01.jpg",
                width: 4000,
                height: 3000,
                alt: "New framing: rafters, ridge, and ceiling joists in progress",
            },
            {
                src: "/projects/outdoor-garage/gallery-02.jpg",
                width: 3000,
                height: 4000,
                alt: "Front view of the completed garage matching the house",
            },
        ],
        featured: false,
        seo: {
            title: "Detached Garage Roof Rebuild & Exterior Refresh",
            description:
                "Rebuilt detached garage roof and restored exterior to match home.",
        },
    },
    {
        title: "Backyard Fire Pits",
        slug: "fireplaces",
        category: "other",
        summary:
            "A collection of custom fire pits built with stone, brick, and paver patios. Each project is designed to fit the outdoor space and create a comfortable gathering spot.",
        scope: [
            "Excavation and base preparation",
            "Paver and stone patio installs",
            "Custom fire pit construction with brick or stone",
            "Seating areas and landscaping touch-ups",
        ],
        hero: {
            src: "/projects/fireplaces/gallery-01.jpg",
            alt: "Custom stone fire pit with mulch landscaping",
            width: 1200,
            height: 1600,
        },
        description:
            "Each fire pit project was designed to match the homeowner’s yard and style, whether it’s brick, stone, or pavers. These fire features not only create a warm focal point but also extend the usability of outdoor spaces throughout the year. From intimate seating circles to patios with built-in pits, these projects show the variety of ways a fire pit can transform a backyard.",
        gallery: [
            {
                src: "/projects/fireplaces/gallery-01.jpg",
                alt: "Stone fire pit surrounded by mulch landscaping",
                width: 1200,
                height: 1600,
            },
            {
                src: "/projects/fireplaces/gallery-02.jpg",
                alt: "Fire pit with flagstone patio by the house",
                width: 1600,
                height: 1200,
            },
            {
                src: "/projects/fireplaces/gallery-03.jpg",
                alt: "Square paver patio with block fire pit and grill insert",
                width: 1200,
                height: 1600,
            },
            {
                src: "/projects/fireplaces/gallery-04.jpg",
                alt: "Circular fire pit area with gravel and Adirondack chairs",
                width: 1200,
                height: 1600,
            },
            {
                src: "/projects/fireplaces/gallery-05.jpg",
                alt: "Paver patio with stacked stone fire pit and gravel walkway",
                width: 1200,
                height: 1600,
            },
            {
                src: "/projects/fireplaces/gallery-06.jpg",
                alt: "Brick fire pit with wood-look paver patio and seating",
                width: 1200,
                height: 1600,
            },
        ],
        seo: {
            title: "Custom Outdoor Fire Pits",
            description:
                "See our collection of backyard fire pit projects built with stone, brick, and paver patios—perfect for outdoor gatherings.",
        },
    },
    {
        title: "Poolside Patio with Stone Tile",
        slug: "pool-patio",
        category: "decks",
        summary:
            "Upgraded a poolside patio with natural stone tile, creating a durable and stylish outdoor space for entertaining.",
        description:
            "This poolside space was upgraded with natural stone tile, giving it a timeless and durable finish. The patterned stone layout creates an elegant surface that’s easy to maintain and stands up well to water and sun exposure. With its mix of light and warm tones, the new patio is both practical and stylish, making it an inviting area for gatherings by the pool.",
        scope: [
            "Removed old surface and prepared sub-base",
            "Installed cement board underlayment",
            "Set natural stone tile in a mixed pattern",
            "Grouted and sealed for durability",
        ],
        before: {
            src: "/projects/pool-patio/before.jpg",
            alt: "Patio area before tile installation",
            width: 2048,
            height: 1152,
        },
        after: {
            src: "/projects/pool-patio/after.jpg",
            alt: "Finished poolside patio with stone tile",
            width: 2048,
            height: 1152,
        },
        hero: {
            src: "/projects/pool-patio/after.jpg",
            alt: "Stone tile poolside patio",
            width: 2048,
            height: 1152,
        },
        gallery: [
            {
                src: "/projects/pool-patio/gallery-01.jpg",
                alt: "View of tiled patio with stone railing posts",
                width: 2048,
                height: 1152,
            },
            {
                src: "/projects/pool-patio/gallery-02.jpg",
                alt: "Patio with stone tile overlooking pool",
                width: 2048,
                height: 1152,
            },
        ],
        seo: {
            title: "Poolside Patio Remodel",
            description:
                "See this poolside patio upgrade with natural stone tile, perfect for outdoor living and entertaining.",
        },
    },
    {
        title: "Backyard Pergola Build",
        slug: "fulton-pergola",
        category: "other",
        summary:
            "Added a custom wood pergola over the patio to provide shade and a natural extension of the home’s outdoor space.",
        scope: [
            "Site prep and layout for posts",
            "Installed heavy-duty support beams",
            "Constructed lattice-style roof for shade",
            "Stained and sealed wood for long-lasting protection",
        ],
        description:
            "This project turned a plain patio into a shaded retreat with a custom wood pergola. The heavy beams and detailed lattice roof provide both strength and style, while the rich stain finish protects the structure and enhances its natural beauty. The pergola adds shade during the day and creates a cozy, inviting atmosphere for relaxing or entertaining outdoors.",
        before: {
            src: "/projects/fulton-pergola/before.jpg",
            alt: "Patio space before pergola installation",
            width: 2048,
            height: 956,
        },
        after: {
            src: "/projects/fulton-pergola/after.jpg",
            alt: "Finished pergola installed over patio",
            width: 956,
            height: 2048,
        },
        hero: {
            src: "/projects/fulton-pergola/after.jpg",
            alt: "Custom wooden pergola over backyard patio",
            width: 956,
            height: 2048,
        },
        gallery: [
            {
                src: "/projects/fulton-pergola/gallery-01.jpg",
                alt: "View looking up through pergola beams",
                width: 2048,
                height: 956,
            },
            {
                src: "/projects/fulton-pergola/gallery-02.jpg",
                alt: "Close-up of pergola woodwork and beam details",
                width: 2048,
                height: 956,
            },
        ],
        seo: {
            title: "Custom Pergola Installation",
            description:
                "See this backyard pergola project featuring a custom wood structure built for shade and outdoor living.",
        },
    },
    {
        title: "Bathroom Tub and Tile Remodel",
        slug: "bathroom-tub-tile",
        category: "bathrooms",
        summary:
            "This bathroom was gutted to the studs and rebuilt with a fresh tub, wall tile, and floor tile for a clean and updated look.",
        scope: [
            "Removed old tub and wall coverings down to studs",
            "Installed new insulation and wall backer",
            "Set new bathtub in place",
            "Installed wall tile and matching floor tile",
            "New plumbing fixtures and trim",
        ],
        before: {
            src: "/projects/policarpo-bathroom/before.jpg",
            alt: "Bathroom before remodel with walls opened to studs",
            width: 1602,
            height: 2848,
        },
        after: {
            src: "/projects/policarpo-bathroom/after.jpg",
            alt: "Finished bathroom remodel with new tub and tile",
            width: 1836,
            height: 3264,
        },
        hero: {
            src: "/projects/policarpo-bathroom/after.jpg",
            alt: "Remodeled bathroom with tub and tiled shower wall",
            width: 1836,
            height: 3264,
        },
        gallery: [
            {
                src: "/projects/policarpo-bathroom/gallery-01.jpg",
                alt: "Close-up of tiled shower wall and tub",
                width: 1836,
                height: 3264,
            },
        ],
        description:
            "We stripped this bathroom back to the framing and rebuilt it with all new finishes. A new tub was installed and surrounded with fresh tile for a durable and attractive shower area. The same tile was carried through to the floor for a cohesive look. With new fixtures and a clean finish, the space feels fresh and ready for daily use.",
        seo: {
            title: "Bathroom Remodel with Tub and Tile",
            description:
                "See this bathroom remodel featuring a new tub, wall tile, and floor tile for a clean and modern finish.",
        },
    },
    {
        title: "Garage Addition",
        slug: "suwanne-garage",
        category: "other",
        summary:
            "Built a new garage addition with three bays, matching the home’s style and providing plenty of space for parking and storage.",
        scope: [
            "Excavation and foundation work",
            "Framing and structural build",
            "Exterior siding and trim to match house",
            "Installation of three garage doors",
            "Concrete driveway extension",
        ],
        before: {
            src: "/projects/suwanne-garage/before.jpg",
            alt: "Foundation being prepared for garage addition",
            width: 2048,
            height: 1536,
        },
        after: {
            src: "/projects/suwanne-garage/after.jpg",
            alt: "Completed garage addition with three white garage doors",
            width: 2048,
            height: 1536,
        },
        hero: {
            src: "/projects/suwanne-garage/after.jpg",
            alt: "Finished garage addition with extended driveway",
            width: 2048,
            height: 1536,
        },
        gallery: [
            {
                src: "/projects/suwanne-garage/gallery-01.jpg",
                alt: "Interior view of gym space built above garage",
                width: 2048,
                height: 1536,
            },
            {
                src: "/projects/suwanne-garage/gallery-02.jpg",
                alt: "Exterior siding detail with HVAC system installed",
                width: 1200,
                height: 1600,
            },
            {
                src: "/projects/suwanne-garage/gallery-03.jpg",
                alt: "Large mirror wall inside finished studio space",
                width: 2048,
                height: 1152,
            },
        ],
        description:
            "This project added a spacious three-bay garage to the home with a functional studio space above. Work began with excavation and a new foundation, followed by full framing and siding to match the existing house. The addition included garage doors, driveway extension, and climate control for the upstairs studio. The final build blends seamlessly with the home while adding both storage and living space.",
        seo: {
            title: "Suwanne Garage Addition",
            description:
                "See this Suwanne garage addition with three bays, extended driveway, and a finished studio space above.",
        },
    },
    {
        title: "Bathroom Vanity Update",
        slug: "lucile-bathroom",
        category: "bathrooms",
        summary:
            "This bathroom was refreshed with new vanities, wood countertops, updated lighting, and backsplash tile for a modern look.",
        scope: [
            "Installed new bathroom vanities",
            "Wood countertops with natural finish",
            "Glass and brass lighting fixtures",
            "Tile backsplash for added detail",
        ],
        hero: {
            src: "/projects/lucile-bathroom/gallery-01.jpg",
            alt: "Updated bathroom vanity with wood countertop, backsplash, and brass lighting",
            width: 1186,
            height: 2048,
        },
        gallery: [
            {
                src: "/projects/lucile-bathroom/gallery-01.jpg",
                alt: "Updated vanity with wood top, tile backsplash, and brass fixtures",
                width: 1186,
                height: 2048,
            },
            {
                src: "/projects/lucile-bathroom/gallery-02.jpg",
                alt: "Compact vanity with backsplash and brass fixtures",
                width: 955,
                height: 2048,
            },
        ],
        description:
            "The Lucile bathroom project brought new life to this space with stylish vanities and updated finishes. Warm wood countertops and brass fixtures pair beautifully with the colorful backsplash tile, while new lighting adds brightness and charm. The result is a bathroom that feels both fresh and inviting.",
        seo: {
            title: "Lucile Bathroom Remodel",
            description:
                "See the Lucile bathroom remodel featuring new vanities, wood countertops, backsplash tile, and updated lighting.",
        },
    },
    {
        title: "Living Room Doorway Remodel",
        slug: "derrick-deck",
        category: "other",
        summary:
            "Replaced a standard set of doors and windows with a large folding glass doorway, opening the living room to the outdoor space.",
        scope: [
            "Removed old windows and doors",
            "Framed opening for new doorway system",
            "Installed folding glass doors",
            "Finished interior trim and exterior details",
        ],
        before: {
            src: "/projects/derrick-deck/before.jpg",
            alt: "Living room wall with old windows and doors before remodel",
            width: 2048,
            height: 955,
        },
        after: {
            src: "/projects/derrick-deck/after.jpg",
            alt: "Living room after remodel with new folding glass doorway",
            width: 2048,
            height: 956,
        },
        hero: {
            src: "/projects/derrick-deck/after.jpg",
            alt: "Large folding glass doorway opening living room to deck",
            width: 2048,
            height: 956,
        },
        gallery: [
            {
                src: "/projects/derrick-deck/gallery-01.jpg",
                alt: "Exterior view of new folding glass doorway from deck",
                width: 2048,
                height: 956,
            },
        ],
        description:
            "This remodel transformed the living room by replacing older windows and doors with a modern folding glass doorway. The wide opening connects the indoor space with the deck, creating a bright and open feel while making it easy to move between the two areas.",
        seo: {
            title: "Living Room Doorway Remodel",
            description:
                "See this doorway remodel where old windows and doors were replaced with a wide folding glass door system, opening the living room to the deck.",
        },
    },
    {
        title: "Finished Bathroom Gallery",
        slug: "finished-bathrooms",
        category: "bathrooms",
        summary:
            "A collection of beautifully finished bathrooms showcasing modern tile work, custom showers, and elegant design details.",
        scope: [
            "Custom tile showers",
            "Freestanding tubs",
            "Glass shower enclosures",
            "Modern fixtures and finishes",
        ],
        hero: {
            src: "/projects/finished-bathrooms/gallery-01.jpg",
            alt: "Bathroom with freestanding tub and glass shower enclosure",
            width: 1536,
            height: 2048,
        },
        gallery: [
            {
                src: "/projects/finished-bathrooms/gallery-01.jpg",
                alt: "Bathroom with freestanding tub and glass shower enclosure",
                width: 1536,
                height: 2048,
            },
            {
                src: "/projects/finished-bathrooms/gallery-02.jpg",
                alt: "Shower with stone tile accents and built-in niches",
                width: 1536,
                height: 2048,
            },
            {
                src: "/projects/finished-bathrooms/gallery-03.jpg",
                alt: "Luxurious shower with marble-pattern tile wall",
                width: 1406,
                height: 2048,
            },
            {
                src: "/projects/finished-bathrooms/gallery-04.jpg",
                alt: "Shower with geometric tile pattern and window above",
                width: 1200,
                height: 1600,
            },
            {
                src: "/projects/finished-bathrooms/gallery-05.jpg",
                alt: "Tub-shower combo with sliding glass doors and marble-style tile",
                width: 1200,
                height: 1600,
            },
            {
                src: "/projects/finished-bathrooms/gallery-06.jpg",
                alt: "Shower with pebble tile floor and dark fixtures",
                width: 1536,
                height: 2048,
            },
            {
                src: "/projects/finished-bathrooms/gallery-07.jpg",
                alt: "Shower with beige tile walls and hexagon tile floor",
                width: 1200,
                height: 1600,
            },
            {
                src: "/projects/finished-bathrooms/gallery-08.jpg",
                alt: "Bathroom with dark tile shower and patterned floor",
                width: 1200,
                height: 1600,
            },
            {
                src: "/projects/finished-bathrooms/gallery-09.jpg",
                alt: "Minimalist shower with vertical white tiles and built-in shelf",
                width: 1179,
                height: 1830,
            },
            {
                src: "/projects/finished-bathrooms/gallery-10.jpg",
                alt: "Shower with marble-style tiles and dark floor accent",
                width: 1200,
                height: 1600,
            },
            {
                src: "/projects/finished-bathrooms/gallery-11.jpg",
                alt: "Additional finished bathroom project",
                width: 0,
                height: 0,
            },
        ],
        description:
            "This gallery highlights a range of completed bathroom projects, from modern spa-like retreats with freestanding tubs to compact yet stylish showers. Each design showcases expert tile work, quality fixtures, and layouts that maximize both function and beauty.",
        seo: {
            title: "Finished Bathroom Projects",
            description:
                "Explore our gallery of finished bathrooms featuring custom tile showers, freestanding tubs, and modern fixtures.",
        },
    },
    {
        title: "Modern Black Kitchen Remodel",
        category: "kitchens",
        slug: "black-kitchen",
        hero: {
            src: "/projects/black-kitchen/gallery-01.jpg",
            width: 2048,
            height: 1536,
        },
        summary:
            "This kitchen remodel showcases a bold, modern design with sleek black cabinetry, white countertops, and elegant gold fixtures. The spacious island and open layout create the perfect balance of function and style.",
        scope: [
            "Custom black cabinetry",
            "Quartz countertops",
            "Modern lighting fixtures",
            "Hardwood flooring",
            "Stainless steel appliances",
        ],
        seo: {
            title: "Modern Black Kitchen Remodel | Custom Kitchen Renovation",
            description:
                "A modern kitchen renovation with bold black cabinetry, quartz countertops, gold accents, and high-end appliances. Stylish, functional, and timeless.",
        },
        gallery: [
            {
                src: "/projects/black-kitchen/gallery-01.jpg",
                width: 2048,
                height: 1536,
            },
        ],
    },
    {
        title: "Custom Student Room Remodel",
        category: "other",
        slug: "student-room",
        hero: {
            src: "/projects/student-room/after.jpg",
            width: 2048,
            height: 957,
        },
        summary:
            "A fully customized student room remodel designed to maximize both comfort and productivity. This project includes built-in shelving, integrated desk space, and a cohesive design to create a modern and functional study environment.",
        scope: [
            "Custom built-in desk",
            "Floating shelves",
            "Wood finish bed frame",
            "Modern paint accents",
            "Integrated storage solutions",
        ],
        seo: {
            title: "Custom Student Room Remodel | Functional & Modern Design",
            description:
                "A personalized student room remodel featuring a built-in desk, floating shelves, custom storage, and a clean, modern design perfect for studying and relaxing.",
        },
        before: {
            src: "/projects/student-room/before.jpg",
            width: 2048,
            height: 957,
        },
        after: {
            src: "/projects/student-room/after.jpg",
            width: 2048,
            height: 957,
        },
        gallery: [
            {
                src: "/projects/student-room/gallery-01.jpg",
                width: 2048,
                height: 957,
            },
        ],
    },
];

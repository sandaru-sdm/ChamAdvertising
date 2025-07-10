const servicesData = [
    {
        id: 1,
        title: "Digital & Offset Printing",
        description: "Any kind of offset printing can be done according to your customized requirements, from small to large size prints.",
        icon: "bi-printer-fill", // Bootstrap Icon class
    },
    {
        id: 2,
        title: "Indoor & Outdoor Signs & Displays",
        description: "A wide range of Indoor & Outdoor signs and advertising products according to client's unique requirements, including customized indoor and outdoor branding.",
        icon: "bi-signpost-fill",
    },
    {
        id: 3,
        title: "Hoardings",
        description: "Customized and right-fitting size hoardings with perfect location, providing maximum display and significant communication. Available in and around Colombo as well as island-wide.",
        icon: "bi-building-fill",
    },
    {
        id: 4,
        title: "Corporate Gifts",
        description: "Customized logos and branded gifts according to client's unique requirements with over 15 years of expertise. Includes branded merchandise, apparel, drinkware, awards, business gifts, mugs, clocks, electronic gadgets, wooden gift items, pens & pen drives.",
        icon: "bi-gift-fill",
    },
    {
        id: 5,
        title: "Events & Exhibition Stalls",
        description: "Application of project management to create and develop small and large-scale personal or corporate events. Event design and installation are highly organized according to your requirements. With up to 15 years of experience in the field, we can customize and dress your stall from head to toe in an amazing way.",
        icon: "bi-shop-window",
    },
    {
        id: 6,
        title: "Display Advertising",
        description: "Display advertising is usually interactive, which allows brands and advertisers to engage deeper with the users. Contact Cham Advertising to make your display advertisements according to your requirements.",
        icon: "bi-display-fill",
    }
];

const portfolioData = [
    {
        id: 1,
        title: "Digital Banner",
        category: "Digital & Offset Printing",
        images: [
            "https://picsum.photos/id/101/800/600?random=1",
            "https://picsum.photos/id/102/800/600?random=1",
        ],
        description: "Professionally designed and printed digital banners for various promotional needs."
    },
    {
        id: 2,
        title: "Fabric Prints",
        category: "Digital & Offset Printing",
        images: [
            "https://picsum.photos/id/103/800/600?random=2",
        ],
        description: "High-quality fabric prints for displays, events, or decorative purposes."
    },
    {
        id: 3,
        title: "Printed Murals & Displays",
        category: "Digital & Offset Printing",
        images: [
            "https://picsum.photos/id/104/800/600?random=3",
            "https://picsum.photos/id/105/800/600?random=3"
        ],
        description: "Custom printed murals and various display solutions to enhance your space."
    },
    {
        id: 4,
        title: "Pull Up Stands / 'X' Pennants",
        category: "Digital & Offset Printing",
        images: [
            "https://picsum.photos/id/106/800/600?random=4",
            "https://picsum.photos/id/107/800/600?random=4"
        ],
        description: "Portable and effective pull-up stands and 'X' pennants for events and promotions."
    },
    {
        id: 5,
        title: "Vehicle Branding",
        category: "Digital & Offset Printing",
        images: [
            "https://picsum.photos/id/108/800/600?random=5",
            "https://picsum.photos/id/109/800/600?random=5"
        ],
        description: "Transform your vehicles into mobile advertising with custom branding."
    },
    {
        id: 6,
        title: "Trade Show Panels & Tripod Stands",
        category: "Digital & Offset Printing",
        images: [
            "https://picsum.photos/id/110/800/600?random=6",
            "https://picsum.photos/id/111/800/600?random=6"
        ],
        description: "Durable trade show panels and versatile tripod stands for your exhibition needs."
    },
    {
        id: 7,
        title: "Custom Prints & Wall Papers",
        category: "Digital & Offset Printing",
        images: [
            "https://picsum.photos/id/112/800/600?random=7",
            "https://picsum.photos/id/113/800/600?random=7"
        ],
        description: "Personalized custom prints and wallpapers for unique interior branding."
    },
    {
        id: 8,
        title: "Flags",
        category: "Digital & Offset Printing",
        images: [
            "https://picsum.photos/id/114/800/600?random=8",
            "https://picsum.photos/id/115/800/600?random=8"
        ],
        description: "Custom designed flags for outdoor advertising and events."
    },
    {
        id: 9,
        title: "Books & Magazines",
        category: "Digital & Offset Printing",
        images: [
            "https://picsum.photos/id/116/800/600?random=9",
        ],
        description: "Professional printing services for books and magazines."
    },
    {
        id: 10,
        title: "Posters",
        category: "Digital & Offset Printing",
        images: [
            "https://picsum.photos/id/117/800/600?random=10",
        ],
        description: "High-quality poster printing for various promotional and informational purposes."
    },
    {
        id: 11,
        title: "Catalogues & Brochures/Leaflets",
        category: "Digital & Offset Printing",
        images: [
            "https://picsum.photos/id/118/800/600?random=11",
            "https://picsum.photos/id/119/800/600?random=11"
        ],
        description: "Comprehensive printing for catalogues, brochures, and leaflets."
    },
    {
        id: 12,
        title: "Booklets & Corporate Profiles",
        category: "Digital & Offset Printing",
        images: [
            "https://picsum.photos/id/120/800/600?random=12",
            "https://picsum.photos/id/121/800/600?random=12"
        ],
        description: "Custom designed booklets and corporate profiles to showcase your business."
    },
    {
        id: 13,
        title: "Custom Designed Packaging & Display Materials",
        category: "Digital & Offset Printing",
        images: [
            "https://picsum.photos/id/122/800/600?random=13",
            "https://picsum.photos/id/123/800/600?random=13"
        ],
        description: "Innovative custom designed packaging and display materials."
    },
    {
        id: 14,
        title: "Letterheads",
        category: "Digital & Offset Printing",
        images: [
            "https://picsum.photos/id/124/800/600?random=14",
        ],
        description: "Professional letterhead printing for corporate branding."
    },
    {
        id: 15,
        title: "Engraved Signs",
        category: "Indoor & Outdoor Signs & Displays",
        images: [
            "https://picsum.photos/id/125/800/600?random=15",
        ],
        description: "Elegant and durable engraved signs for a sophisticated look."
    },
    {
        id: 16,
        title: "Reception Signs",
        category: "Indoor & Outdoor Signs & Displays",
        images: [
            "https://picsum.photos/id/126/800/600?random=16",
        ],
        description: "Customized reception signs to create a strong first impression."
    },
    {
        id: 17,
        title: "Wall Murals",
        category: "Indoor & Outdoor Signs & Displays",
        images: [
            "https://picsum.photos/id/127/800/600?random=17",
        ],
        description: "Large-scale wall murals for impactful indoor and outdoor branding."
    },
    {
        id: 18,
        title: "Banner Stands",
        category: "Indoor & Outdoor Signs & Displays",
        images: [
            "https://picsum.photos/id/128/800/600?random=18",
        ],
        description: "Versatile banner stands for easy display at events and retail spaces."
    },
    {
        id: 19,
        title: "3D Lettering",
        category: "Indoor & Outdoor Signs & Displays",
        images: [
            "https://picsum.photos/id/129/800/600?random=19",
        ],
        description: "Eye-catching 3D lettering for prominent signage and branding."
    },
    {
        id: 20,
        title: "Digital Displays",
        category: "Indoor & Outdoor Signs & Displays",
        images: [
            "https://picsum.photos/id/130/800/600?random=20",
        ],
        description: "Modern digital display solutions for dynamic content presentation."
    },
    {
        id: 21,
        title: "Custom Store Signs",
        category: "Indoor & Outdoor Signs & Displays",
        images: [
            "https://picsum.photos/id/131/800/600?random=21",
        ],
        description: "Tailored store signs to reflect your brand's unique identity."
    },
    {
        id: 22,
        title: "Corporate Apparel & Wearables",
        category: "Corporate Gifts",
        images: [
            "https://picsum.photos/id/132/800/600?random=22",
            "https://picsum.photos/id/133/800/600?random=22"
        ],
        description: "Branded apparel and wearable items for corporate gifting and promotion."
    },
    {
        id: 23,
        title: "Drinkware",
        category: "Corporate Gifts",
        images: [
            "https://picsum.photos/id/134/800/600?random=23",
        ],
        description: "Custom branded drinkware for corporate giveaways and internal use."
    },
    {
        id: 24,
        title: "Awards",
        category: "Corporate Gifts",
        images: [
            "https://picsum.photos/id/135/800/600?random=24",
        ],
        description: "Custom designed awards to recognize achievements."
    },
    {
        id: 25,
        title: "Business Gifts",
        category: "Corporate Gifts",
        images: [
            "https://picsum.photos/id/136/800/600?random=25",
        ],
        description: "Thoughtful business gifts tailored to strengthen client relationships."
    },
    {
        id: 26,
        title: "Mugs & Clocks",
        category: "Corporate Gifts",
        images: [
            "https://picsum.photos/id/137/800/600?random=26",
            "https://picsum.photos/id/138/800/600?random=26"
        ],
        description: "Branded mugs and clocks for office use or promotional giveaways."
    },
    {
        id: 27,
        title: "Electronic Gadgets",
        category: "Corporate Gifts",
        images: [
            "https://picsum.photos/id/139/800/600?random=27",
        ],
        description: "A range of branded electronic gadgets for modern corporate gifts."
    },
    {
        id: 28,
        title: "Wooden Gift Items",
        category: "Corporate Gifts",
        images: [
            "https://picsum.photos/id/140/800/600?random=28",
        ],
        description: "Unique and elegant wooden gift items with custom branding."
    },
    {
        id: 29,
        title: "Pens & Pen Drives",
        category: "Corporate Gifts",
        images: [
            "https://picsum.photos/id/141/800/600?random=29",
            "https://picsum.photos/id/142/800/600?random=29"
        ],
        description: "Branded pens and pen drives for practical and memorable corporate giveaways."
    },
    {
        id: 30,
        title: "Event Inspiration & Concept Design",
        category: "Events & Exhibition Stalls",
        images: [
            "https://picsum.photos/id/143/800/600?random=30",
            "https://picsum.photos/id/144/800/600?random=30"
        ],
        description: "Creative event inspiration and comprehensive concept design services."
    },
    {
        id: 31,
        title: "Event Coordination",
        category: "Events & Exhibition Stalls",
        images: [
            "https://picsum.photos/id/145/800/600?random=31",
        ],
        description: "Seamless event coordination to ensure a smooth and successful execution."
    },
    {
        id: 32,
        title: "Audio & Video Equipment for Events",
        category: "Events & Exhibition Stalls",
        images: [
            "https://picsum.photos/id/146/800/600?random=32",
        ],
        description: "High-quality audio and video equipment setup for all event types."
    },
    {
        id: 33,
        title: "Event Lighting Decor & Productions",
        category: "Events & Exhibition Stalls",
        images: [
            "https://picsum.photos/id/147/800/600?random=33",
            "https://picsum.photos/id/148/800/600?random=33"
        ],
        description: "Creative lighting decor and full event production services."
    },
    {
        id: 34,
        title: "Exhibition Stall Design & Material",
        category: "Events & Exhibition Stalls",
        images: [
            "https://picsum.photos/id/149/800/600?random=34",
            "https://picsum.photos/id/150/800/600?random=34"
        ],
        description: "Innovative exhibition stall design and high-quality display materials."
    },
    {
        id: 35,
        title: "Exhibition Furniture & Counters",
        category: "Events & Exhibition Stalls",
        images: [
            "https://picsum.photos/id/151/800/600?random=35",
            "https://picsum.photos/id/152/800/600?random=35"
        ],
        description: "Functional and stylish exhibition furniture and counters."
    },
    {
        id: 36,
        title: "Audio & Video Equipment for Stalls",
        category: "Events & Exhibition Stalls",
        images: [
            "https://picsum.photos/id/153/800/600?random=36",
        ],
        description: "Integrated audio and video equipment for engaging exhibition stalls."
    },
    {
        id: 37,
        title: "Exhibition Stall Production & Installation",
        category: "Events & Exhibition Stalls",
        images: [
            "https://picsum.photos/id/154/800/600?random=37",
        ],
        description: "Complete exhibition stall production and professional installation services."
    },
    {
        id: 38,
        title: "Dodster Baked Wrap Display",
        category: "Indoor & Outdoor Signs & Displays",
        images: [
            "https://via.placeholder.com/800x600?text=Dodster+Baked+Wrap+Display",
        ],
        description: "Eye-catching display advertising for Dodster Baked Wrap."
    },
    {
        id: 39,
        title: "Motability Signage",
        category: "Indoor & Outdoor Signs & Displays",
        images: [
            "https://via.placeholder.com/800x600?text=Motability+Signage",
        ],
        description: "Prominent signage for Motability, designed for clear visibility."
    },
    {
        id: 40,
        title: "Correx, Foamex, Dibond Displays",
        category: "Indoor & Outdoor Signs & Displays",
        images: [
            "https://via.placeholder.com/800x600?text=Correx+Foamex+Dibond",
        ],
        description: "Versatile display solutions using Correx, Foamex, and Dibond materials."
    },
    {
        id: 41,
        title: "Lakeshore Hoarding",
        category: "Hoardings",
        images: [
            "https://via.placeholder.com/800x600?text=Lakeshore+Hoarding",
        ],
        description: "Large-scale hoarding for Lakeshore, advertising 2 & 3 BHK properties."
    },
    {
        id: 42,
        title: "Indo Amines Limited Exhibition Stall",
        category: "Events & Exhibition Stalls",
        images: [
            "https://via.placeholder.com/800x600?text=Indo+Amines+Stall",
        ],
        description: "Professional exhibition stall design and setup for Indo Amines Limited."
    },
];

const customerLogos = [
    { name: "Industrial Asphalts (Ceylon) PLC", logo: "https://via.placeholder.com/150x100?text=Industrial+Asphalts" },
    { name: "99 X (Software Company)", logo: "https://via.placeholder.com/150x100?text=99+X" },
    { name: "Lankem Ceylon PLC", logo: "https://via.placeholder.com/150x100?text=Lankem+Ceylon" },
    { name: "Chrrelisa Italy (Pvt) Ltd", logo: "https://via.placeholder.com/150x100?text=Chrrelisa+Italy" },
    { name: "Pon Pure Chemical Lanka (Pvt) Ltd", logo: "https://via.placeholder.com/150x100?text=Pon+Pure+Chemical" },
    { name: "SR Steel (Pvt) Ltd", logo: "https://via.placeholder.com/150x100?text=SR+Steel" },
    { name: "SR Cable (Pvt) Ltd", logo: "https://via.placeholder.com/150x100?text=SR+Cable" },
    { name: "Sada Sarana Motors (Pvt) Ltd", logo: "https://via.placeholder.com/150x100?text=Sada+Sarana+Motors" },
    { name: "Sun Cable (Pvt) Ltd", logo: "https://via.placeholder.com/150x100?text=Sun+Cable" },
    { name: "Nihon Leathers (Pvt) Ltd", logo: "https://via.placeholder.com/150x100?text=Nihon+Leathers" },
    { name: "BOC", logo: "https://via.placeholder.com/150x100?text=BOC" },
    { name: "Bread Talk", logo: "https://via.placeholder.com/150x100?text=Bread+Talk" },
    { name: "ALU Master", logo: "https://via.placeholder.com/150x100?text=ALU+Master" },
    { name: "Kids World", logo: "https://via.placeholder.com/150x100?text=Kids+World" },
    { name: "Ferguson High School", logo: "https://via.placeholder.com/150x100?text=Ferguson+High+School" },
];

const testimonialsData = [
    {
        quote: "Chamdvertising truly understands our vision and consistently delivers high-quality advertising solutions. Their team is professional and highly creative.",
        name: "A. Perera",
        title: "Marketing Manager, Industrial Asphalts (Ceylon) PLC"
    },
    {
        quote: "Their exhibition stall designs are exceptional! They transformed our ideas into a stunning and engaging space at the tech expo.",
        name: "S. Fernando",
        title: "Operations Director, 99 X (Software Company)"
    },
    {
        quote: "The corporate gifts they provided were a huge hit with our clients. Excellent quality and customized to perfection.",
        name: "L. Silva",
        title: "HR Manager, Lankem Ceylon PLC"
    },
    {
        quote: "Chamdvertising managed our event seamlessly, from concept to execution. We were impressed by their attention to detail and professionalism.",
        name: "K. Gunawardena",
        title: "Event Coordinator, Sada Sarana Motors (Pvt) Ltd"
    },
    {
        quote: "Their vehicle branding service gave our fleet a fresh, professional look. Highly recommend their digital printing capabilities.",
        name: "D. Mendis",
        title: "Logistics Head, Sun Cable (Pvt) Ltd"
    }
];
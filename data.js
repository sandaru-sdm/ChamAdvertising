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
    },
    {
        id: 7, // New service ID
        title: "Custom Mug Printing",
        description: "Personalized mug printing for corporate branding, promotional giveaways, or special occasions.",
        icon: "bi-cup-fill", // A suitable Bootstrap Icon
    }
];

const portfolioData = [
    {
        id: 1,
        title: "Digital Banner",
        category: "Digital & Offset Printing",
        images: [
            "./assets/portfolio/nameboard1.jpg",
            "./assets/portfolio/nameboard2.jpg",
            "./assets/portfolio/nameboard3.jpg",
            "./assets/portfolio/nameboard4.jpg",
            "./assets/portfolio/nameboard5.jpg",
            "./assets/portfolio/nameboard6.jpg",
            "./assets/portfolio/nameboard7.jpg",
            "./assets/portfolio/nameboard8.jpg",
            "./assets/portfolio/nameboard9.jpg",
            "./assets/portfolio/nameboard10.jpg",
        ],
        description: "Professionally designed and printed digital banners for various promotional needs."
    },
    {
        id: 2,
        title: "Pull Up Stands / 'X' Pennants",
        category: "Digital & Offset Printing",
        images: [
            "./assets/portfolio/x-pannets1.jpg",
            "./assets/portfolio/x-pannets2.jpg",
            "./assets/portfolio/x-pannets3.jpg",
        ],
        description: "Portable and effective pull-up stands and 'X' pennants for events and promotions."
    },
    {
        id: 3,
        title: "Vehicle Branding",
        category: "Digital & Offset Printing",
        images: [
            "./assets/portfolio/vehicle1.jpg",
            "./assets/portfolio/vehicle2.jpg",
            "./assets/portfolio/vehicle3.jpg",
        ],
        description: "Transform your vehicles into mobile advertising with custom branding."
    },
    {
        id: 4,
        title: "Engraved Signs",
        category: "Indoor & Outdoor Signs & Displays",
        images: [
            "./assets/portfolio/Woodenlogo1.jpg",
            "./assets/portfolio/Woodensign2.jpg",
        ],
        description: "Elegant and durable engraved signs for a sophisticated look."
    },
    {
        id: 5,
        title: "Reception Signs",
        category: "Indoor & Outdoor Signs & Displays",
        images: [
            "./assets/portfolio/ReceptionSigns.jpg",
        ],
        description: "Customized reception signs to create a strong first impression."
    },
    {
        id: 6,
        title: "3D Lettering",
        category: "Indoor & Outdoor Signs & Displays",
        images: [
            "./assets/portfolio/3dletter1.jpg",
            "./assets/portfolio/3dletter2.jpg",
        ],
        description: "Eye-catching 3D lettering for prominent signage and branding."
    },
    {
        id: 7,
        title: "Custom Signs",
        category: "Indoor & Outdoor Signs & Displays",
        images: [
            "./assets/portfolio/sign1.jpg",
            "./assets/portfolio/sign2.jpg",
            "./assets/portfolio/sign3.jpg",
        ],
        description: "Tailored signs to reflect your needs."
    },
    {
        id: 8,
        title: "Exhibition Stall Design",
        category: "Events & Exhibition Stalls",
        images: [
            "./assets/portfolio/stall1.jpg",
            "./assets/portfolio/stall2.jpg",
            "./assets/portfolio/stall4.jpg",
            "./assets/portfolio/stall5.jpg",
            "./assets/portfolio/stall6.jpg",
            "./assets/portfolio/stall7.jpg",
        ],
        description: "Innovative exhibition stall design and high-quality display materials."
    },
    {
        id: 35,
        title: "Mini Exhibition Stall Design",
        category: "Events & Exhibition Stalls",
        images: [
            "./assets/portfolio/ministall.jpg",
            "./assets/portfolio/ministall1.jpg",
            "./assets/portfolio/ministall2.jpg",
        ],
        description: "Innovative exhibition stall design and high-quality display materials."
    },
    {
        id: 9,
        title: "Dodster Baked Wrap Display",
        category: "Indoor & Outdoor Signs & Displays",
        images: [
            "./assets/portfolio/backdrop1.jpg",
            "./assets/portfolio/backdrop2.jpg",
        ],
        description: "Eye-catching display advertising for Dodster Baked Wrap."
    },
    {
        id: 10,
        title: "Illuminated Light Boards",
        category: "Indoor & Outdoor Signs & Displays",
        images: [
            "./assets/portfolio/lightboard1.jpg",
            "./assets/portfolio/lightboard2.jpg",
        ],
        description: "Bright and impactful illuminated light boards designed to grab attention day and night."
    },
    {
        id: 11,
        title: "Custom Name Plates",
        category: "Indoor & Outdoor Signs & Displays",
        images: [
            "./assets/portfolio/nameplate1.jpg",
        ],
        description: "Elegant and professional custom name plates for offices, homes, and businesses."
    },
    {
        id: 12,
        title: "Table Tents & Promotional Displays",
        category: "Digital & Offset Printing",
        images: [
            "./assets/portfolio/tabletent1.jpg",
            "./assets/portfolio/tabletent2.jpg",
            "./assets/portfolio/tabletent3.jpg",
            "./assets/portfolio/tabletent4.jpg",
        ],
        description: "Versatile table tents and promotional displays perfect for restaurants, events, and retail promotions."
    },
    {
        id: 13,
        title: "Custom Printed Mugs",
        category: "Corporate Gifts",
        images: [
            "./assets/portfolio/mugprint.jpg",
        ],
        description: "High-quality custom mug printing for branded merchandise, gifts, and promotional items."
    }
];

const customerLogos = [
    { name: "Industrial Asphalts (Ceylon) PLC", logo: "./assets/customers/IndustrialAsphalts.jpeg" },
    { name: "99X (Software Company)", logo: "./assets/customers/99x.png" },
    { name: "Lankem Ceylon PLC", logo: "./assets/customers/Lankem.avif" },
    // { name: "Chrrelisa Italy (Pvt) Ltd", logo: "https://via.placeholder.com/150x100?text=Chrrelisa+Italy" },
    { name: "Pon Pure Chemical Lanka (Pvt) Ltd", logo: "./assets/customers/ponpure.png" },
    // { name: "SR Steel (Pvt) Ltd", logo: "https://via.placeholder.com/150x100?text=SR+Steel" },
    { name: "SR Cable (Pvt) Ltd", logo: "./assets/customers/srcable.png" },
    // { name: "Sada Sarana Motors (Pvt) Ltd", logo: "https://via.placeholder.com/150x100?text=Sada+Sarana+Motors" },
    // { name: "Sun Cable (Pvt) Ltd", logo: "https://via.placeholder.com/150x100?text=Sun+Cable" },
    // { name: "Nihon Leathers (Pvt) Ltd", logo: "https://via.placeholder.com/150x100?text=Nihon+Leathers" },
    { name: "BOC", logo: "./assets/customers/boc.png" },
    { name: "Bread Talk", logo: "./assets/customers/breadtalk.png" },
    { name: "Yorkshire High School", logo: "./assets/customers/york.png" },
    // { name: "ALU Master", logo: "./assets/customers/srcable.png" },
    // { name: "Kids World", logo: "./assets/customers/srcable.png" },
    // { name: "Ferguson High School", logo: "./assets/customers/srcable.png" },
];

const testimonialsData = [
    {
        quote: "Cham Advertising truly understands our vision and consistently delivers high-quality advertising solutions. Their team is professional and highly creative.",
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
        quote: "Cham Advertising managed our event seamlessly, from concept to execution. We were impressed by their attention to detail and professionalism.",
        name: "K. Gunawardena",
        title: "Event Coordinator, Sada Sarana Motors (Pvt) Ltd"
    },
    {
        quote: "Their vehicle branding service gave our fleet a fresh, professional look. Highly recommend their digital printing capabilities.",
        name: "D. Mendis",
        title: "Logistics Head, Sun Cable (Pvt) Ltd"
    }
];
const servicesData = [
  {
    id: 1,
    title: "Digital & Offset Printing",
    description:
      "Any kind of offset printing can be done according to your customized requirements, from small to large size prints.",
    icon: "bi-printer-fill",
  },
  {
    id: 2,
    title: "Indoor & Outdoor Signs & Displays",
    description:
      "A wide range of Indoor & Outdoor signs and advertising products according to client's unique requirements, including customized indoor and outdoor branding.",
    icon: "bi-signpost-fill",
  },
  {
    id: 3,
    title: "Hoardings",
    description:
      "Customized and right-fitting size hoardings with perfect location, providing maximum display and significant communication. Available in and around Colombo as well as island-wide.",
    icon: "bi-building-fill",
  },
  {
    id: 4,
    title: "Corporate Gifts",
    description:
      "Customized logos and branded gifts according to client's unique requirements with over 15 years of expertise. Includes branded merchandise, apparel, drinkware, awards, business gifts, mugs, clocks, electronic gadgets, wooden gift items, pens & pen drives.",
    icon: "bi-gift-fill",
  },
  {
    id: 5,
    title: "Events & Exhibition Stalls",
    description:
      "Application of project management to create and develop small and large-scale personal or corporate events. Event design and installation are highly organized according to your requirements. With up to 15 years of experience in the field, we can customize and dress your stall from head to toe in an amazing way.",
    icon: "bi-shop-window",
  },
  {
    id: 6,
    title: "Display Advertising",
    description:
      "Display advertising is usually interactive, which allows brands and advertisers to engage deeper with the users. Contact Cham Advertising to make your display advertisements according to your requirements.",
    icon: "bi-display-fill",
  },
  {
    id: 7,
    title: "Custom Mug Printing",
    description:
      "Personalized mug printing for corporate branding, promotional giveaways, or special occasions.",
    icon: "bi-cup-fill",
  },
  {
    id: 8,
    title: "Fabric Prints",
    description:
      "High-quality printing on various fabric materials for banners, displays, and custom textiles.",
    icon: "bi-text-wrap",
  },
  {
    id: 9,
    title: "Printed Murals & Wallpapers",
    description:
      "Transform spaces with custom-designed and printed murals or wallpapers for impactful branding and decor.",
    icon: "bi-image-fill",
  },
  {
    id: 10,
    title: "Trade Show Panels",
    description:
      "Professionally printed and designed panels for trade shows, ensuring your booth stands out.",
    icon: "bi-easel-fill",
  },
  {
    id: 11,
    title: "Tripod Stands",
    description:
      "Lightweight and portable tripod stands for various displays and promotions.",
    icon: "bi-triangle-fill",
  },
  {
    id: 12,
    title: "Custom Flags",
    description:
      "Custom-designed and printed flags for branding, events, or promotional purposes.",
    icon: "bi-flag-fill",
  },
  {
    id: 13,
    title: "Books & Magazines Printing",
    description:
      "High-quality offset printing for books and magazines, from small runs to large publications.",
    icon: "bi-book-fill",
  },
  {
    id: 14,
    title: "Posters & Catalogues Printing",
    description:
      "Eye-catching poster design and printing, and comprehensive catalogue printing to showcase products or services.",
    icon: "bi-journal-text",
  },
  {
    id: 15,
    title: "Brochures & Leaflets",
    description:
      "Informative and attractive brochures and leaflets for effective marketing and information dissemination.",
    icon: "bi-file-earmark-text-fill",
  },
  {
    id: 16,
    title: "Booklets & Corporate Profiles",
    description:
      "Custom-designed and printed booklets and corporate profiles to present your company's story and services professionally.",
    icon: "bi-file-earmark-person-fill",
  },
  {
    id: 17,
    title: "Custom Packaging & Display Materials",
    description:
      "Creative and functional custom packaging and display materials to enhance your product presentation and brand appeal.",
    icon: "bi-box-seam-fill",
  },
  {
    id: 18,
    title: "Letterhead Printing",
    description:
      "Professional letterhead printing for your business correspondence, reinforcing your brand identity.",
    icon: "bi-file-earmark-ruled-fill",
  },
  {
    id: 19,
    title: "Engraved Signs",
    description:
      "Elegant and durable engraved signs for a sophisticated look, suitable for various professional settings.",
    icon: "bi-gem",
  },
  {
    id: 20,
    title: "Reception Signs",
    description:
      "Customized reception signs to create a strong first impression for your business entrance or lobby.",
    icon: "bi-door-open-fill",
  },
  {
    id: 21,
    title: "3D Lettering",
    description:
      "Eye-catching 3D lettering for prominent signage and branding, adding depth and visual appeal.",
    icon: "bi-vector-pen",
  },
  {
    id: 22,
    title: "Digital Displays (Interactive)",
    description:
      "Modern digital displays for dynamic content, allowing brands to engage deeper with users through interactive experiences.",
    icon: "bi-display-fill",
  },
  {
    id: 23,
    title: "Custom Store Signs",
    description:
      "Unique and eye-catching custom signs tailored specifically for retail stores to attract and guide customers.",
    icon: "bi-shop-fill",
  },
  {
    id: 24,
    title: "Branded Merchandise",
    description:
      "A wide range of merchandise custom-branded with your logo for promotional giveaways and corporate identity.",
    icon: "bi-tags-fill",
  },
  {
    id: 25,
    title: "Apparel & Wearables",
    description:
      "Custom-branded apparel and wearable items for corporate uniforms, promotional wear, or team building events.",
    icon: "bi-t-shirt-fill",
  },
  {
    id: 26,
    title: "Branded Drinkware",
    description:
      "Personalized drinkware, including bottles and tumblers, perfect for corporate gifts or promotional items.",
    icon: "bi-cup-straw",
  },
  {
    id: 27,
    title: "Custom Awards & Trophies",
    description:
      "Custom-designed awards and recognition items for corporate achievements, employee recognition, and special milestones.",
    icon: "bi-award-fill",
  },
  {
    id: 28,
    title: "Business Gift Sets",
    description:
      "Thoughtful and high-quality business gift sets for clients, partners, and employees to strengthen relationships.",
    icon: "bi-box-fill",
  },
  {
    id: 29,
    title: "Branded Clocks",
    description:
      "Branded clocks that serve as practical and elegant corporate gifts or office decor items.",
    icon: "bi-clock-fill",
  },
  {
    id: 30,
    title: "Electronic Gadgets (Branded)",
    description:
      "Custom-branded electronic gadgets such as power banks, USB drives, or headphones, ideal for modern corporate gifts.",
    icon: "bi-battery-charging",
  },
  {
    id: 31,
    title: "Wooden Gift Items (Custom)",
    description:
      "Unique and customizable wooden gift items for a sophisticated and memorable corporate present.",
    icon: "bi-tree-fill",
  },
  {
    id: 32,
    title: "Branded Pens & Pen Drives",
    description:
      "Branded pens and pen drives for practical and effective promotional giveaways and corporate utility.",
    icon: "bi-pencil-fill",
  },
  {
    id: 33,
    title: "Event Concept & Design",
    description:
      "Comprehensive event concept development and design services to bring your vision to life, ensuring a unique and memorable experience.",
    icon: "bi-lightbulb-fill",
  },
  {
    id: 34,
    title: "Event Coordination & Management",
    description:
      "Expert event coordination and project management to manage all aspects of your event seamlessly from planning to execution.",
    icon: "bi-calendar-check-fill",
  },
  {
    id: 35,
    title: "Audio Visual (AV) Equipment Rental",
    description:
      "Provision and setup of high-quality audio, video, and lighting equipment to enhance your event or exhibition stall.",
    icon: "bi-boombox-fill",
  },
  {
    id: 36,
    title: "Exhibition Stall Furniture Rental",
    description:
      "Stylish and functional furniture rental for exhibition stalls to create comfortable, inviting, and professional spaces.",
    icon: "bi-chair-fill",
  },
  {
    id: 37,
    title: "Exhibition Counters & Displays",
    description:
      "Custom-designed exhibition counters and various display types for engaging with visitors and showcasing products effectively.",
    icon: "bi-shop-window", 
  },
  {
    id: 38,
    title: "Full Event & Exhibition Production",
    description:
      "Comprehensive production and installation services for both events and exhibition stalls, ensuring a flawless setup and execution from start to finish.",
    icon: "bi-tools",
  },
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
    description:
      "Professionally designed and printed digital banners for various promotional needs.",
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
    description:
      "Portable and effective pull-up stands and 'X' pennants for events and promotions.",
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
    description:
      "Transform your vehicles into mobile advertising with custom branding.",
  },
  {
    id: 4,
    title: "Engraved Signs",
    category: "Indoor & Outdoor Signs & Displays",
    images: [
      "./assets/portfolio/Woodenlogo1.jpg",
      "./assets/portfolio/Woodensign2.jpg",
    ],
    description: "Elegant and durable engraved signs for a sophisticated look.",
  },
  {
    id: 5,
    title: "Reception Signs",
    category: "Indoor & Outdoor Signs & Displays",
    images: ["./assets/portfolio/ReceptionSigns.jpg"],
    description:
      "Customized reception signs to create a strong first impression.",
  },
  {
    id: 6,
    title: "3D Lettering",
    category: "Indoor & Outdoor Signs & Displays",
    images: [
      "./assets/portfolio/3dletter1.jpg",
      "./assets/portfolio/3dletter2.jpg",
    ],
    description:
      "Eye-catching 3D lettering for prominent signage and branding.",
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
    description: "Tailored signs to reflect your needs.",
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
    description:
      "Innovative exhibition stall design and high-quality display materials.",
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
    description:
      "Innovative exhibition stall design and high-quality display materials.",
  },
  {
    id: 9,
    title: "Dodster Baked Wrap Display",
    category: "Indoor & Outdoor Signs & Displays",
    images: [
      "./assets/portfolio/backdrop1.jpg",
      "./assets/portfolio/backdrop2.jpg",
    ],
    description: "Eye-catching display advertising for Dodster Baked Wrap.",
  },
  {
    id: 10,
    title: "Illuminated Light Boards",
    category: "Indoor & Outdoor Signs & Displays",
    images: [
      "./assets/portfolio/lightboard1.jpg",
      "./assets/portfolio/lightboard2.jpg",
    ],
    description:
      "Bright and impactful illuminated light boards designed to grab attention day and night.",
  },
  {
    id: 11,
    title: "Custom Name Plates",
    category: "Indoor & Outdoor Signs & Displays",
    images: ["./assets/portfolio/nameplate1.jpg"],
    description:
      "Elegant and professional custom name plates for offices, homes, and businesses.",
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
    description:
      "Versatile table tents and promotional displays perfect for restaurants, events, and retail promotions.",
  },
  {
    id: 13,
    title: "Custom Printed Mugs",
    category: "Corporate Gifts",
    images: ["./assets/portfolio/mugprint.jpg"],
    description:
      "High-quality custom mug printing for branded merchandise, gifts, and promotional items.",
  },
];

const customerLogos = [
  {
    name: "Industrial Asphalts (Ceylon) PLC",
    logo: "./assets/customers/IndustrialAsphalts.jpeg",
  },
  { name: "99X (Software Company)", logo: "./assets/customers/99x.png" },
  { name: "Lankem Ceylon PLC", logo: "./assets/customers/Lankem.avif" },
  // { name: "Chrrelisa Italy (Pvt) Ltd", logo: "https://via.placeholder.com/150x100?text=Chrrelisa+Italy" },
  {
    name: "Pon Pure Chemical Lanka (Pvt) Ltd",
    logo: "./assets/customers/ponpure.png",
  },
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
    quote:
      "Cham Advertising truly understands our vision and consistently delivers high-quality advertising solutions. Their team is professional and highly creative.",
    name: "A. Perera",
    title: "Marketing Manager, Industrial Asphalts (Ceylon) PLC",
  },
  {
    quote:
      "Their exhibition stall designs are exceptional! They transformed our ideas into a stunning and engaging space at the tech expo.",
    name: "S. Fernando",
    title: "Operations Director, 99 X (Software Company)",
  },
  {
    quote:
      "The corporate gifts they provided were a huge hit with our clients. Excellent quality and customized to perfection.",
    name: "L. Silva",
    title: "HR Manager, Lankem Ceylon PLC",
  },
  {
    quote:
      "Cham Advertising managed our event seamlessly, from concept to execution. We were impressed by their attention to detail and professionalism.",
    name: "K. Gunawardena",
    title: "Event Coordinator, Sada Sarana Motors (Pvt) Ltd",
  },
  {
    quote:
      "Their vehicle branding service gave our fleet a fresh, professional look. Highly recommend their digital printing capabilities.",
    name: "D. Mendis",
    title: "Logistics Head, Sun Cable (Pvt) Ltd",
  },
];

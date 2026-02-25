// ─── Site ────────────────────────────────────────────────────────────────────

export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "Ajanta Hardware - Fire Safety & Industrial Materials",
  description: "Your trusted supplier of high-quality industrial materials, G.I. pipes, cable trays, fire safety wires, and fire safety equipment since 1991. Best prices in Mumbai.",
  language: "en",
};

// ─── Navigation ──────────────────────────────────────────────────────────────

export interface MenuLink {
  label: string;
  href: string;
}

export interface SocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface NavigationConfig {
  brandName: string;
  menuLinks: MenuLink[];
  socialLinks: SocialLink[];
  searchPlaceholder: string;
  menuBackgroundImage: string;
}

export const navigationConfig: NavigationConfig = {
  brandName: "Ajanta Hardware",
  menuLinks: [
    { label: "Home", href: "#hero" },
    { label: "About Us", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
  socialLinks: [
    { icon: "Instagram", label: "Instagram", href: "#" },
    { icon: "Facebook", label: "Facebook", href: "#" },
    { icon: "Twitter", label: "Twitter", href: "#" },
  ],
  searchPlaceholder: "Search products...",
  menuBackgroundImage: "/images/menu-bg.jpg",
};

// ─── Hero ────────────────────────────────────────────────────────────────────

export interface HeroConfig {
  tagline: string;
  title: string;
  ctaPrimaryText: string;
  ctaPrimaryTarget: string;
  ctaSecondaryText: string;
  ctaSecondaryTarget: string;
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  tagline: "Since 1991",
  title: "Fire Safety &\nIndustrial Materials",
  ctaPrimaryText: "Explore Products",
  ctaPrimaryTarget: "#products",
  ctaSecondaryText: "",
  ctaSecondaryTarget: "",
  backgroundImage: "/images/hero-bg.jpg",
};

// ─── SubHero ─────────────────────────────────────────────────────────────────

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface SubHeroConfig {
  tag: string;
  heading: string;
  bodyParagraphs: string[];
  linkText: string;
  linkTarget: string;
  image1: string;
  image2: string;
  stats: Stat[];
}

export const subHeroConfig: SubHeroConfig = {
  tag: "Our Story",
  heading: "Three Decades of Trust & Excellence",
  bodyParagraphs: [
    "Welcome to Ajanta Hardware, your trusted supplier of high-quality industrial materials at the best market rates! We specialize in providing a wide range of construction and fabrication materials, ensuring durability, reliability, and affordability.",
    "Founded by Shankarlal Udaylal Ji Suthar in 1991, our business has been built on a foundation of trust, quality, and customer satisfaction. Now in its second generation, we continue to uphold these values while expanding into the fire safety materials sector.",
  ],
  linkText: "Learn More About Us",
  linkTarget: "#about",
  image1: "/images/subhero-1.jpg",
  image2: "/images/subhero-2.jpg",
  stats: [
    { value: 30, suffix: "+", label: "Years of Experience" },
    { value: 5000, suffix: "+", label: "Happy Customers" },
    { value: 100, suffix: "%", label: "Quality Assured" },
  ],
};

// ─── Video Section ───────────────────────────────────────────────────────────

export interface VideoSectionConfig {
  tag: string;
  heading: string;
  bodyParagraphs: string[];
  ctaText: string;
  ctaTarget: string;
  backgroundImage: string;
}

export const videoSectionConfig: VideoSectionConfig = {
  tag: "Our Services",
  heading: "Complete Industrial Solutions",
  bodyParagraphs: [
    "We serve industries, contractors, and developers with bulk supply solutions. From G.I. pipes to fire safety equipment, we are your one-stop destination for quality materials.",
    "Our direct partnerships with top manufacturers like Jindal, Surya, Schneider, ABB, Polycab, and Havells ensure you get genuine products at unbeatable prices. No hidden costs, no middlemen—just the best materials at competitive rates.",
  ],
  ctaText: "View All Services",
  ctaTarget: "#services",
  backgroundImage: "/images/subhero-2.jpg",
};

// ─── Products ────────────────────────────────────────────────────────────────

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  priceLabel?: string;
}

export interface ProductsConfig {
  tag: string;
  heading: string;
  description: string;
  viewAllText: string;
  addToCartText: string;
  addedToCartText: string;
  categories: string[];
  products: Product[];
}

export const productsConfig: ProductsConfig = {
  tag: "Our Products",
  heading: "Premium Quality Materials",
  description: "We source directly from top manufacturers to bring you the finest industrial and fire safety materials at competitive prices.",
  viewAllText: "View All Products",
  addToCartText: "Get Quote",
  addedToCartText: "Quote Requested",
  categories: ["All", "Pipes", "Cable Trays", "Wires & Cables", "Safety Equipment", "Electrical"],
  products: [
    { 
      id: 1, 
      name: "G.I. Pipes - Jindal/Surya", 
      price: 35, 
      category: "Pipes", 
      image: "/images/product-pipes.jpg",
      priceLabel: "Starting ₹35/feet",
    },
    { 
      id: 2, 
      name: "Perforated Cable Trays", 
      price: 50, 
      category: "Cable Trays", 
      image: "/images/product-cabletray.jpg",
      priceLabel: "Starting ₹50/meter",
    },
    { 
      id: 3, 
      name: "FR/LSZH Fire Safety Wires", 
      price: 15, 
      category: "Wires & Cables", 
      image: "/images/product-wires.jpg",
      priceLabel: "Starting ₹15/meter",
    },
    { 
      id: 4, 
      name: "Fire Safety Equipment", 
      price: 18, 
      category: "Safety Equipment", 
      image: "/images/product-safety.jpg",
      priceLabel: "Starting ₹18/gloves",
    },
    { 
      id: 5,
      name: "Electrical Conduits & Fittings",
      price: 80,
      category: "Electrical",
      image: "/images/product-conduit.jpg",
      priceLabel: "Starting ₹80/fitting",
    },
    { 
      id: 6,
      name: "Junction Boxes & Panels",
      price: 8,
      category: "Electrical",
      image: "/images/product-junction.jpg",
      priceLabel: "Starting ₹8/psc",
    },
  ],
};

// ─── Features ────────────────────────────────────────────────────────────────

export interface Feature {
  icon: "Truck" | "ShieldCheck" | "Leaf" | "Heart";
  title: string;
  description: string;
}

export interface FeaturesConfig {
  features: Feature[];
}

export const featuresConfig: FeaturesConfig = {
  features: [
    {
      icon: "ShieldCheck",
      title: "Certified Quality",
      description: "All products are ISI certified and sourced directly from top manufacturers like Jindal, Surya, Schneider, and Polycab.",
    },
    {
      icon: "Truck",
      title: "Fast Delivery",
      description: "We ensure quick and reliable delivery across Mumbai and surrounding areas for all your project needs.",
    },
    {
      icon: "Heart",
      title: "Customer First",
      description: "Personalized service and expert guidance to help you choose the right products for your specific requirements.",
    },
    {
      icon: "Leaf",
      title: "Best Prices",
      description: "Direct manufacturer partnerships mean no middlemen—just genuine products at unbeatable market rates.",
    },
  ],
};

// ─── Blog ────────────────────────────────────────────────────────────────────

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
  excerpt: string;
}

export interface BlogConfig {
  tag: string;
  heading: string;
  viewAllText: string;
  readMoreText: string;
  posts: BlogPost[];
}

export const blogConfig: BlogConfig = {
  tag: "Testimonials",
  heading: "What Our Clients Say",
  viewAllText: "View All Reviews",
  readMoreText: "Read Full Review",
  posts: [
    {
      id: 1,
      title: "Ravi Shah, Civil Contractor",
      date: "Verified Customer",
      image: "/images/about-team.jpg",
      excerpt: "We've been sourcing G.I. pipes and fire safety materials from them for over 5 years. The quality is always top-notch, and the prices are unbeatable. Truly a reliable partner in every project!",
    },
    {
      id: 2,
      title: "Priya Builders Pvt. Ltd.",
      date: "Verified Customer",
      image: "/images/about-legacy.jpg",
      excerpt: "What sets them apart is their honesty, timely delivery, and genuine materials. The team is knowledgeable and always helps us choose the right product for our needs.",
    },
    {
      id: 3,
      title: "S.K. Fire & Safety Solutions",
      date: "Verified Customer",
      image: "/images/hero-bg.jpg",
      excerpt: "One of the most trusted suppliers in Mumbai! Their wide range of materials and commitment to service make them our go-to choice for every site.",
    },
  ],
};

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface FaqConfig {
  tag: string;
  heading: string;
  ctaText: string;
  ctaTarget: string;
  faqs: FaqItem[];
}

export const faqConfig: FaqConfig = {
  tag: "FAQ",
  heading: "Frequently Asked Questions",
  ctaText: "Still have questions? Contact us",
  ctaTarget: "#contact",
  faqs: [
    {
      id: 1,
      question: "What brands of G.I. pipes do you supply?",
      answer: "We supply premium quality G.I. pipes from top brands like Jindal and Surya. Available sizes range from ½ inch (15mm) for residential plumbing to 4 inch (100mm) and above for large-scale infrastructure projects.",
    },
    {
      id: 2,
      question: "Do you provide bulk supply for large projects?",
      answer: "Yes, we specialize in bulk supply solutions for industries, contractors, and developers. Our direct manufacturer partnerships allow us to offer competitive pricing for large orders with guaranteed timely delivery.",
    },
    {
      id: 3,
      question: "What types of cable trays do you offer?",
      answer: "We offer a comprehensive range of cable trays including Perforated Cable Trays for ventilation, Ladder Cable Trays for heavy-duty power cables, Wire Mesh Cable Trays for flexibility, and Solid Bottom Cable Trays for complete protection. All from brands like Schneider, ABB, and BEC.",
    },
    {
      id: 4,
      question: "Are your fire safety wires certified?",
      answer: "Absolutely! Our fire safety wires include FR (Fire Retardant), LSZH (Low Smoke Zero Halogen), and HRFR (Heat Resistant Fire Retardant) variants from certified brands like Polycab, Havells, Finolex, RR Kabel, and KEI.",
    },
    {
      id: 5,
      question: "What is your delivery coverage area?",
      answer: "We provide delivery across Mumbai and surrounding areas including Thane, Navi Mumbai, and Mira-Bhayandar. For large bulk orders, we can arrange delivery to other locations in Maharashtra as well.",
    },
  ],
};

// ─── About ───────────────────────────────────────────────────────────────────

export interface AboutSection {
  tag: string;
  heading: string;
  paragraphs: string[];
  quote: string;
  attribution: string;
  image: string;
  backgroundColor: string;
  textColor: string;
}

export interface AboutConfig {
  sections: AboutSection[];
}

export const aboutConfig: AboutConfig = {
  sections: [
    {
      tag: "Our Legacy",
      heading: "Built on Trust Since 1991",
      paragraphs: [
        "Established in 1991 by Shankarlal Udaylal Ji Suthar, Ajanta Hardware has grown from a small hardware shop to a trusted name in industrial materials supply. Our journey spans over three decades of serving the construction and fabrication industry with unwavering commitment to quality.",
        "Located on Akurli Road, Kandivali East, Mumbai, we have been the go-to supplier for countless contractors, builders, and industries. Our second-generation leadership continues to uphold the values of honesty, quality, and customer satisfaction that our foundation was built upon.",
      ],
      quote: "",
      attribution: "",
      image: "/images/about-legacy.jpg",
      backgroundColor: "#2c2420",
      textColor: "#ffffff",
    },
    {
      tag: "Our Promise",
      heading: "Quality You Can Trust",
      paragraphs: [],
      quote: "We don't just sell materials—we build relationships. Every product that leaves our warehouse carries our promise of quality, authenticity, and reliability.",
      attribution: "-- The Ajanta Hardware Team",
      image: "/images/about-team.jpg",
      backgroundColor: "#8b6d4b",
      textColor: "#ffffff",
    },
  ],
};

// ─── Contact ─────────────────────────────────────────────────────────────────

export interface FormFields {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
}

export interface ContactConfig {
  heading: string;
  description: string;
  locationLabel: string;
  location: string;
  emailLabel: string;
  email: string;
  phoneLabel: string;
  phone: string;
  formFields: FormFields;
  submitText: string;
  submittingText: string;
  submittedText: string;
  successMessage: string;
  backgroundImage: string;
}

export const contactConfig: ContactConfig = {
  heading: "Get In Touch",
  description: "Ready to source quality materials for your next project? Contact us today for the best prices and expert guidance.",
  locationLabel: "Visit Us",
  location: "Ajanta Electric and Hardware Stores, Hanuman Nagar, Vadar Pada, Road No 2, Kandivali East, Mumbai - 400101",
  emailLabel: "Email",
  email: "Chetanss764@gmail.com",
  phoneLabel: "Call Us",
  phone: "+91 98191 10190\n+91 84250 50550",
  formFields: {
    nameLabel: "Your Name",
    namePlaceholder: "Enter your name",
    emailLabel: "Email Address",
    emailPlaceholder: "Enter your email",
    messageLabel: "Message",
    messagePlaceholder: "Tell us about your requirements...",
  },
  submitText: "Send Message",
  submittingText: "Sending...",
  submittedText: "Message Sent",
  successMessage: "Thank you for reaching out! We'll get back to you within 24 hours.",
  backgroundImage: "/images/contact-bg.jpg",
};

// ─── Footer ──────────────────────────────────────────────────────────────────

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface FooterSocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface FooterConfig {
  brandName: string;
  brandDescription: string;
  newsletterHeading: string;
  newsletterDescription: string;
  newsletterPlaceholder: string;
  newsletterButtonText: string;
  newsletterSuccessText: string;
  linkGroups: FooterLinkGroup[];
  legalLinks: FooterLink[];
  copyrightText: string;
  socialLinks: FooterSocialLink[];
}

export const footerConfig: FooterConfig = {
  brandName: "Ajanta Hardware",
  brandDescription: "Your trusted partner for fire safety and industrial materials since 1991. Quality products, competitive prices, and exceptional service.",
  newsletterHeading: "Stay Updated",
  newsletterDescription: "Subscribe to get updates on new products and special offers.",
  newsletterPlaceholder: "Enter your email",
  newsletterButtonText: "Subscribe",
  newsletterSuccessText: "Thank you for subscribing!",
  linkGroups: [
    {
      title: "Products",
      links: [
        { label: "G.I. Pipes", href: "#products" },
        { label: "Cable Trays", href: "#products" },
        { label: "Fire Safety Wires", href: "#products" },
        { label: "Safety Equipment", href: "#products" },
        { label: "Electrical Materials", href: "#products" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Our Services", href: "#services" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "Contact", href: "#contact" },
      ],
    },
  ],
  legalLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
  copyrightText: "© 2024 Ajanta Hardware. All rights reserved.",
  socialLinks: [
    { icon: "Instagram", label: "Instagram", href: "#" },
    { icon: "Facebook", label: "Facebook", href: "#" },
    { icon: "Twitter", label: "Twitter", href: "#" },
  ],
};

export interface NavLink {
  href: string;
  label: string;
}

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const FOOTER_COMPANY: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export const FOOTER_SERVICES: NavLink[] = [
  { href: "/services", label: "Digital Marketing" },
  { href: "/services", label: "Content Creation" },
  { href: "/services", label: "Software Development" },
  { href: "/services", label: "Pricing" },
];

// TODO: point these at real pages once they exist.
export const FOOTER_LEGAL: string[] = ["Privacy Policy", "Terms of Service", "Cookie Policy"];

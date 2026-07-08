export type NavLeaf = {
  label: string;
  href: string;
};

export type NavGroup = {
  label: string;
  children: (NavLeaf | NavGroup)[];
};

export type NavItem = NavLeaf | NavGroup;

export function isGroup(item: NavItem): item is NavGroup {
  return "children" in item;
}

export function isActivePath(item: NavItem, pathname: string): boolean {
  if (!isGroup(item)) return item.href === pathname;
  return item.children.some((child) => isActivePath(child, pathname));
}

// Categories ("Residential", "Ongoing Projects", etc.) only organize the
// dropdown — they have no page of their own. Every real page below gets a
// flat slug with no parent segment, e.g. "/motia-harmonygreens".
export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Residential",
    children: [
      {
        label: "Ongoing Projects",
        children: [{ label: "Motia'z Harmony Greens", href: "/motia-harmonygreens" }],
      },
      {
        label: "Delivered Projects",
        children: [
          { label: "Motiaz Royal Citi", href: "/motiaz-royal-citi" },
          { label: "Motia'z Gill Estate", href: "/motia-gill-estate" },
          { label: "Motia Heights", href: "/motia-heights" },
          { label: "Motia Citi", href: "/motia-citi" },
          { label: "Motia Huys", href: "/motia-huys" },
        ],
      },
    ],
  },
  {
    label: "Commercial",
    children: [
      {
        label: "Ongoing Projects",
        children: [{ label: "Haryana Industrial Plots", href: "/haryana-industrial-plots" }],
      },
      {
        label: "Delivered Projects",
        children: [
          { label: "Motiaz Royal Business Park", href: "/motiaz-royal-business-park" },
          { label: "Motia High Street", href: "/motia-high-street" },
        ],
      },
    ],
  },
  {
    label: "About Us",
    children: [{ label: "Founders", href: "/founders" }],
  },
  { label: "Blog", href: "/blog" },
  {
    label: "Career",
    children: [
      { label: "Life at Motia Group", href: "/life-at-motia-group" },
      { label: "Job Openings", href: "/job-openings" },
    ],
  },
  {
    label: "FAQ's",
    children: [
      { label: "NRIs", href: "/nris" },
      { label: "Indian Citizens", href: "/indian-citizens" },
    ],
  },
  { label: "Contact Us", href: "/contact-us" },
];

export const topBar = {
  phone: "+91 8860095959",
  address: "Corporate Office : Motia'z Royal Business Park, Corporate Office, 4th Floor, Chandigarh-Ambala Highway, Zirakpur",
  email: "info@motiagroup.com",
};

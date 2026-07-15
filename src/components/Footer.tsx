import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from "@/components/icons/SocialIcons";
import { isGroup, primaryNav, topBar, type NavGroup, type NavItem, type NavLeaf } from "@/data/navigation";

function getGroup(...labels: string[]): NavGroup | undefined {
  let items: NavItem[] = primaryNav;
  let found: NavItem | undefined;
  for (const label of labels) {
    found = items.find((item) => item.label === label);
    if (!found || !isGroup(found)) return undefined;
    items = found.children;
  }
  return found as NavGroup;
}

const residentialOngoing = getGroup("Residential", "Ongoing Projects");
const residentialDelivered = getGroup("Residential", "Delivered Projects");
const commercialOngoing = getGroup("Commercial", "Ongoing Projects");
const commercialDelivered = getGroup("Commercial", "Delivered Projects");

const quickLinks: NavLeaf[] = [
  { label: "Blog", href: "/blog" },
  { label: "Career", href: "/life-at-motia-group" },
  { label: "FAQs", href: "/nris" },
  { label: "Contact us", href: "/contact-us" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const socialLinks = [
  { icon: FacebookIcon, href: "https://www.facebook.com/motiagroupzirakpur", label: "Facebook" },
  { icon: InstagramIcon, href: "https://www.instagram.com/motiagroup/", label: "Instagram" },
  { icon: TwitterIcon, href: "https://twitter.com/motiagroup", label: "Twitter" },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/company/motia-developers-pvt-ltd/", label: "LinkedIn" },
  { icon: YoutubeIcon, href: "https://www.youtube.com/c/MotiaDevelopers", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#1c2230] text-white">
      <Image src="/footer.webp" alt="City skyline" fill sizes="100vw" className="object-cover" />

      <div className="relative mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <Link href="/" className="group shrink-0">
            <Image
              src="/footerlogo.png"
              alt="Motia Group"
              width={300}
              height={300}
              className="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-12">
            <FooterColumn title="Residential" subheading="Delivered" links={residentialDelivered?.children} />
            <FooterColumn title="Ongoing" links={residentialOngoing?.children} />
            <FooterColumn title="Commercial" subheading="Delivered" links={commercialDelivered?.children} />
            <FooterColumn title="Ongoing" links={commercialOngoing?.children} />
            <FooterColumn title="Quick Links" links={quickLinks} />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-white/20 pt-8 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <div className="flex flex-col gap-4 text-sm sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
            <a href={`tel:${topBar.phone.replace(/\s+/g, "")}`} className="flex items-center gap-2 transition-colors hover:text-gray-300">
              <Phone className="size-4 shrink-0" />
              {topBar.phone}
            </a>
            <p className="flex items-center gap-2 sm:border-l sm:border-white/20 sm:pl-6">
              <MapPin className="size-4 shrink-0" />
              <span>{topBar.address}</span>
            </p>
            <a
              href={`mailto:${topBar.email}`}
              className="flex items-center gap-2 transition-colors hover:text-gray-300 sm:border-l sm:border-white/20 sm:pl-6"
            >
              <Mail className="size-4 shrink-0" />
              Email: {topBar.email}
            </a>
          </div>

          <div className="flex items-center gap-3 sm:border-l sm:border-white/20 sm:pl-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex size-9 items-center justify-center rounded bg-white/10 transition-all hover:scale-110 hover:bg-white/20"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-white/80">
          &copy; Copyright {new Date().getFullYear()}, All Rights Reserved With Motia Group
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({ title, subheading, links }: { title?: string; subheading?: string; links?: NavItem[] }) {
  if (!title || !links) return null;

  return (
    <div>
      <p className="font-semibold text-white">{title}</p>
      {subheading && <p className="mt-4 font-semibold text-white">{subheading}</p>}
      <ul className="mt-3 space-y-2">
        {links.map((link) =>
          isGroup(link) ? null : (
            <li key={link.href}>
              <Link
                href={link.href}
                className="inline-block text-sm text-gray-300 transition-all duration-200 hover:translate-x-1 hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ),
        )}
      </ul>
    </div>
  );
}

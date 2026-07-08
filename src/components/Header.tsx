"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, ChevronRight, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { isActivePath, isGroup, primaryNav, topBar, type NavItem } from "@/data/navigation";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="bg-black text-white text-xs sm:text-sm">
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6">
          <a href={`tel:${topBar.phone.replace(/\s+/g, "")}`} className="flex items-center gap-2 hover:text-emerald-400">
            <Phone className="size-3.5 shrink-0" />
            {topBar.phone}
          </a>
          <p className="flex items-center gap-2 text-center">
            <MapPin className="size-3.5 shrink-0" />
            <span>{topBar.address}</span>
          </p>
          <a href={`mailto:${topBar.email}`} className="flex items-center gap-2 hover:text-emerald-400">
            <Mail className="size-3.5 shrink-0" />
            {topBar.email}
          </a>
        </div>
      </div>

      <div className="border-b border-gray-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex shrink-0 items-center py-2">
            <Image src="/logo-3.png" alt="Motia Group" width={600} height={483} priority className="h-16 w-auto sm:h-20" />
          </Link>

          <nav className="hidden lg:block">
            <ul className="flex items-center">
              {primaryNav.map((item) => (
                <li key={item.label}>
                  <NavEntry item={item} pathname={pathname} />
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded p-2 text-gray-700 hover:bg-gray-100 lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-b border-gray-200 lg:hidden">
          <ul className="mx-auto max-w-7xl divide-y divide-gray-100 px-4 sm:px-6">
            {primaryNav.map((item) => (
              <li key={item.label}>
                <MobileEntry item={item} pathname={pathname} onNavigate={() => setMobileOpen(false)} />
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

function NavEntry({ item, pathname }: { item: NavItem; pathname: string }) {
  const active = isActivePath(item, pathname);

  if (!isGroup(item)) {
    return (
      <Link
        href={item.href}
        className={`flex items-center px-5 py-4 text-sm font-medium transition-colors hover:bg-[#377f45] hover:text-white ${
          active ? "bg-gray-900 text-white" : "text-gray-800"
        }`}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="group/menu relative">
      <button
        type="button"
        className={`flex items-center gap-1.5 px-5 py-4 text-sm font-medium transition-colors group-hover/menu:bg-[#377f45] group-hover/menu:text-white ${
          active ? "bg-gray-900 text-white" : "text-gray-800"
        }`}
      >
        {item.label}
        <ChevronDown className="size-3.5" />
      </button>

      <ul className="invisible absolute left-0 top-full z-20 min-w-[240px] bg-black opacity-0 shadow-xl transition-all duration-150 group-hover/menu:visible group-hover/menu:opacity-100">
        {item.children.map((child) => (
          <DropdownRow key={child.label} item={child} pathname={pathname} />
        ))}
      </ul>
    </div>
  );
}

function DropdownRow({ item, pathname }: { item: NavItem; pathname: string }) {
  const active = isActivePath(item, pathname);

  if (!isGroup(item)) {
    return (
      <li>
        <Link
          href={item.href}
          className={`block whitespace-nowrap px-5 py-3 text-sm text-white transition-colors hover:bg-[#377f45] ${
            active ? "bg-gray-900" : ""
          }`}
        >
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li className="group/sub relative">
      <div
        className={`flex cursor-default items-center justify-between gap-6 whitespace-nowrap px-5 py-3 text-sm text-white transition-colors hover:bg-[#377f45] ${
          active ? "bg-gray-900" : ""
        }`}
      >
        {item.label}
        <ChevronRight className="size-3.5" />
      </div>

      <ul className="invisible absolute left-full top-0 z-30 min-w-[220px] bg-black opacity-0 shadow-xl transition-all duration-150 group-hover/sub:visible group-hover/sub:opacity-100">
        {item.children.map((leaf) => (
          <DropdownRow key={leaf.label} item={leaf} pathname={pathname} />
        ))}
      </ul>
    </li>
  );
}

function MobileEntry({ item, pathname, onNavigate }: { item: NavItem; pathname: string; onNavigate: () => void }) {
  const active = isActivePath(item, pathname);
  const [open, setOpen] = useState(active);

  if (!isGroup(item)) {
    return (
      <Link
        href={item.href}
        onClick={onNavigate}
        className={`block rounded px-2 py-3 text-sm font-medium ${active ? "bg-gray-900 text-white" : "text-gray-800"}`}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`flex w-full items-center justify-between rounded px-2 py-3 text-sm font-medium ${
          active ? "bg-gray-900 text-white" : "text-gray-800"
        }`}
      >
        {item.label}
        <ChevronDown className={`size-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="space-y-3 pb-3 pl-3">
          {item.children.map((child) =>
            isGroup(child) ? (
              <div key={child.label}>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#377f45]">{child.label}</p>
                <div className="space-y-1 pl-2">
                  {child.children.map((leaf) => (
                    <Link
                      key={leaf.label}
                      href={(leaf as { href: string }).href}
                      onClick={onNavigate}
                      className={`block rounded px-2 py-1 text-sm ${
                        isActivePath(leaf, pathname) ? "bg-gray-900 text-white" : "text-gray-700"
                      }`}
                    >
                      {leaf.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={child.label}
                href={child.href}
                onClick={onNavigate}
                className={`block rounded px-2 py-1 text-sm ${
                  isActivePath(child, pathname) ? "bg-gray-900 text-white" : "text-gray-700"
                }`}
              >
                {child.label}
              </Link>
            ),
          )}
        </div>
      )}
    </div>
  );
}

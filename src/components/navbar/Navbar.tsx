"use client";
import Link from "next/link";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { NavItem } from "../interface/NavbarConfig";

function Navbar() {
  const pathname = usePathname();
  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];
  return (
    <div>
      <div
        className="flex justify-center gap-8 px-0 py-4 
      flex-wrap items-center bg-teal-900 text-white font-serif font-semibold text-md tracking-normal "
      >
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <p
              className={` text-sm font-semibold border-b-[3px] 
              border-transparent hover:border-b-2 
              ${pathname === item.href ? "border-y-slate-50 text-white" : ""}`}
            >
              {item.label}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;

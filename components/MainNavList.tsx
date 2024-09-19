"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MainNavList = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Tickets", href: "/tickets" },
    { label: "Users", href: "/users" },
  ];
  const currentPath = usePathname();
  return (
    <div className="flex items-center gap-2">
      {links.map((link) => {
        return (
          <Link
            href={link.href}
            className={`navbar-link ${
              currentPath === link.href &&
              "cursor-default text-primary/70 hover:textprimary/60"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};

export default MainNavList;

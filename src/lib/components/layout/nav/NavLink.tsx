'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

const NavLink = ({ href, children }: { href: string; children: ReactNode }) => {
  const pathname = usePathname()
  const highlightedLink = "underline text-lime-500"
  const mereLink = "no-underline text-gray-100"
  return(
  <Link className={`text-lg font-light text-gray-100 ${pathname==href? highlightedLink :mereLink}`} href={href}>
    {children}
    {/* <span > */}
    {/* <span className="text-sm/6 font-semibold text-gray-900">{children}</span> */}
    {/* </span> */}
  </Link>
)};

export default NavLink;

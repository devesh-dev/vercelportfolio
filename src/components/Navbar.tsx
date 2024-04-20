"use client";

import React, { useState } from "react";
import { Menu } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>Home</Link>
        <Link href={""}>Projects</Link>
        <Link href={"/contact"}>Contact Us</Link>
      </Menu>
    </div>
  );
};

export default Navbar;

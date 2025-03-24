"use client";

import React from "react";
import { useStore } from "@/lib/store/useStore";

const Footer = () => {
  const color = useStore((s) => s.color);
  return (
    <footer className={`flex justify-center py-4 text-sm text-gray-100 bg-${color}`}>
      <div>fabagile &copy; {new Date().getFullYear()}</div>
    </footer>
  );
};

export default Footer;

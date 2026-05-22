"use client";

import { motion } from "framer-motion";
import { Scale } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        fixed top-0 left-0 right-0 z-50
        flex items-center justify-between
        px-6 md:px-12 lg:px-20 py-4
        bg-[var(--bg)]/80 backdrop-blur-md
        border-b border-white/30 dark:border-white/10
      "
    >
      {/* Logo */}
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 bg-[#3B5BDB] rounded-lg flex items-center justify-center">
          <Scale size={16} className="text-white" />
        </div>
        <span className="font-extrabold text-[17px] text-[var(--text-primary)] tracking-tight">
          Legal<span className="text-[#3B5BDB]">OS</span>
        </span>
      </div>

      {/* Nav links (desktop) */}
      <div className="hidden md:flex items-center gap-7 text-sm font-medium text-[var(--text-secondary)]">
        {["Product", "Pricing", "Customers", "Blog"].map((link) => (
          <a
            key={link}
            href="#"
            className="hover:text-[var(--text-primary)] transition-colors duration-150"
          >
            {link}
          </a>
        ))}
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <a
          href="#"
          className="hidden md:inline-block text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
        >
          Sign in
        </a>
        <a
          href="#"
          className="bg-[#3B5BDB] hover:bg-[#2f4dc7] text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors duration-200"
        >
          Get started
        </a>
      </div>
    </motion.nav>
  );
}

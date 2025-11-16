"use client";

import { useEffect, useRef, useState } from "react";
import { LuDownload } from "react-icons/lu";
import { FiX } from "react-icons/fi";
import { RiMenu3Fill } from "react-icons/ri";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [colors, setColors] = useState({ c1: "#ffffff", c2: "#ffffff" });

  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const pathname = usePathname();

  const menuItems = [
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
  ];

  const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setColors({
      c1: generateRandomColor(),
      c2: generateRandomColor(),
    });
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    function handleOutsideClick(e: MouseEvent | TouchEvent) {
      if (!open) return;

      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [open]);

  const isActiveLink = (href: string) => {
    if (href.startsWith("#")) return false; 
    return pathname === href;
  };

  return (
    <nav className="w-full sticky top-0 left-0 bg-[#0e0e0e] backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
        href={'/'}
          className="text-2xl font-bold tracking-wide bg-clip-text text-transparent select-none"
          style={{
            backgroundImage: `linear-gradient(to right, ${colors.c1}, ${colors.c2})`,
          }}>
          anish.
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-zinc-300 items-center">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`transition-colors text-lg ${
                  isActiveLink(item.href)
                    ? "text-white font-semibold"
                    : "hover:text-white"
                }`}>
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="./anish_joshi.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-zinc-600 rounded-md
             text-zinc-300 hover:text-white hover:border-white transition-all 
             cursor-pointer text-lg">
              <LuDownload className="text-xl" />
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          ref={buttonRef}
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}>
          {open ? <FiX /> : <RiMenu3Fill />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          ref={menuRef}
          className="absolute right-4 w-48 md:hidden bg-[#0b0b0b] border border-zinc-800 rounded-2xl shadow-xl">
          <ul className="flex flex-col text-zinc-300 py-4 space-y-4 px-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block hover:text-white transition-colors text-lg">
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-zinc-600 rounded-md
             text-zinc-300 hover:text-white hover:border-white transition-all 
             cursor-pointer text-lg">
                <LuDownload className="text-xl" />
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

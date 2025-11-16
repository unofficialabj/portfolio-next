"use client";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaBehance,
  FaYoutube,
} from "react-icons/fa";

const socialMediaList = [
  { name: "Facebook", href: "https://www.facebook.com", icon: <FaFacebook /> },
  {
    name: "Instagram",
    href: "https://www.instagram.com",
    icon: <FaInstagram />,
  },
  { name: "GitHub", href: "https://github.com", icon: <FaGithub /> },
  { name: "LinkedIn", href: "https://www.linkedin.com", icon: <FaLinkedin /> },
  { name: "Behance", href: "https://www.behance.net", icon: <FaBehance /> },
  { name: "YouTube", href: "https://www.youtube.com", icon: <FaYoutube /> },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="w-full py-6 text-zinc-300"
      aria-label="Website Footer">
      <div className="max-w-6xl mx-auto px-4">
        {/* Social Icons */}
        <div className="flex justify-center space-x-4 mb-4">
          {socialMediaList.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              title={item.name}
              aria-label={item.name}
              className="text-xl hover:text-white transition-all">
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-zinc-400">
          &copy; {year} |{" "}
          <span className="text-white font-medium">Anish Bhakta Joshi</span>.
          All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

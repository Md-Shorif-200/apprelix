import React from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

import Link from "next/link";
import Container from "@/components/common/Container";
import Logo from "../Navbar/Logo";

const platformLinks = [
  { label: "Explore RFQs", href: "/rfqs" },
  { label: "Find Suppliers", href: "/suppliers" },
  { label: "AI Insight", href: "/ai-insight" },

  // { label: "Supplier Directory", href: "/suppliers" }, // Fabric Showcase
  // { label: "Resource Center", href: "/resources" }, // Resources
  // { label: "Production Services", href: "/services" }, // Services
  { label: "Success Stories", href: "/success-story" },
];

const campanyLinks = [
  { label: "About Us", href: "/about" },
  { label: "How It Works", href: "/how-it-works" }, // Work Process
  // { label: "Sustainability", href: "/sustainability" },
  { label: "Compliance & Standards", href: "/compliance" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
];



const legalLinks = [

    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms-condition" },
    { label: "Cookie Policy", href: "/cookies" },
  
    { label: "Code of Conduct", href: "/code-of-conduct" },


];

const contactLinks = [
  { label: "+1 (555) 123-4567", Icon: Phone },
  { label: "hello@apparellink.com", Icon: Mail },
  { label: "New York, NY 10001", Icon: MapPin },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    hover: "hover:bg-[#0d9488]",
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-[18px] h-[18px]"
      >
        <path d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07C2 17.1 5.66 21.27 10.44 22v-7.03H7.9v-2.9h2.54V9.84c0-2.5 1.48-3.89 3.75-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.9h-2.34V22C18.34 21.27 22 17.1 22 12.07z" />
      </svg>
    ),
  },

  {
    label: "Twitter",
    href: "https://twitter.com",
    hover: "hover:bg-[#14b8a6]",
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-[18px] h-[18px]"
      >
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.153h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.04L6.486 3.24H4.298l13.311 17.404z" />
      </svg>
    ),
  },

  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    hover: "hover:bg-[#0f766e]",
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-[18px] h-[18px]"
      >
        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM.5 8h4V24h-4V8zm7.5 0h3.84v2.16h.05c.54-1.02 1.84-2.1 3.79-2.1 4.05 0 4.8 2.66 4.8 6.12V24h-4v-7.14c0-1.7-.03-3.89-2.37-3.89-2.37 0-2.73 1.85-2.73 3.76V24h-4V8z" />
      </svg>
    ),
  },

  {
    label: "Instagram",
    href: "https://instagram.com",
    hover: "hover:bg-[#115e59]",
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-[18px] h-[18px]"
      >
        <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5C18.33 4 20 5.67 20 7.75v8.5C20 18.33 18.33 20 16.25 20h-8.5C5.67 20 4 18.33 4 16.25v-8.5C4 5.67 5.67 4 7.75 4zm8.75 1a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-12 gap-8">

            <div className=" col-span-12 lg:col-span-3 space-y-6">
              {/* Logo */}
              <div>
                <Logo section="footer" />
              </div>

              {/* Short Description */}
              <p className="text-teal-100/70 text-sm leading-relaxed">
                Connecting global buyers with trusted apparel suppliers through
                AI-powered sourcing and seamless communication.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                {contactLinks.map(({ label, Icon }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="bg-[#0d9488]/20 p-2 rounded-lg border border-[#14b8a6]/20">
                      <Icon size={16} className="text-[#5eead4]" />
                    </div>
                    <span className="text-teal-100/80 text-sm">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6  col-span-12  lg:col-span-2">
              {/* Section Heading */}
              <div>
                <h3 className="text-white font-semibold text-base  ml-3">
                  Platform
                </h3>

                {/* Underline Accent */}
                <div className="mt-2 h-0.5 w-10 bg-[#14b8a6] rounded ml-3" />
              </div>

              {/* Links */}
              <ul className="space-y-3">
                {platformLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-teal-100/70 text-sm hover:text-[#5eead4] 
                               transition-colors duration-200 flex items-center gap-2 group"
                    >
                      {/* Small arrow that shows on hover */}
                      <span
                        className="text-[#2dd4bf] opacity-0 group-hover:opacity-100 
                                     transition-opacity duration-200"
                      >
                        ›
                      </span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6  col-span-12  lg:col-span-2">
              {/* Section Heading */}
              <div>
                <h3 className="text-white font-semibold text-base ml-3">
                  Company
                </h3>

                {/* Underline Accent */}
                <div className="mt-2 h-0.5 w-10 bg-[#14b8a6] rounded ml-3" />
              </div>

              {/* Links */}
              <ul className="space-y-3">
                {campanyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-teal-100/70 text-sm hover:text-[#5eead4] 
                               transition-colors duration-200 flex items-center gap-2 group"
                    >
                      {/* Small arrow that shows on hover */}
                      <span
                        className="text-[#2dd4bf] opacity-0 group-hover:opacity-100 
                                     transition-opacity duration-200"
                      >
                        ›
                      </span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6  col-span-12  lg:col-span-2">
              {/* Section Heading */}
              <div>
                <h3 className="text-white font-semibold text-base ml-3">
                  Legal
                </h3>

                {/* Underline Accent */}
                <div className="mt-2 h-0.5 w-10 bg-[#14b8a6] rounded ml-3" />
              </div>

              {/* Links */}
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-teal-100/70 text-sm hover:text-[#5eead4] 
                               transition-colors duration-200 flex items-center gap-2 group"
                    >
                      {/* Small arrow that shows on hover */}
                      <span
                        className="text-[#2dd4bf] opacity-0 group-hover:opacity-100 
                                     transition-opacity duration-200"
                      >
                        ›
                      </span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className=" col-span-12 lg:col-span-3 space-y-6">
              {/* Section Heading */}
              <div>
                <h3 className="text-white font-semibold text-base">
                  Stay Connected
                </h3>

                {/* Underline Accent */}
                <div className="mt-2 h-0.5 w-10 bg-[#14b8a6] rounded" />
              </div>

              {/* Social Media Icons */}
              <div>
                <p className="text-teal-100/70 text-sm mb-4">
                  Follow us on social media
                </p>

                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className={`bg-white/10 ${social.hover} p-2.5 rounded-lg 
                  transition-all duration-300 group border border-white/10`}
                    >
                      <div className="text-teal-100/70 group-hover:text-white transition-colors duration-300">
                        {social.Icon}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter Subscription */}
              <div>
                <p className="text-white text-sm font-medium mb-1">
                  Newsletter
                </p>

                <p className="text-teal-100/70 text-xs mb-4">
                  Get the latest updates, sourcing tips, and industry news.
                </p>

                {/* Input + Button Group */}
                <div
                  className="flex items-stretch rounded-lg border border-white/10 
                              bg-white/10 focus-within:border-[#14b8a6] 
                              transition-colors duration-200"
                >
                  {/* Email Input */}
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="min-w-0 flex-1 rounded-l-lg bg-transparent px-4 py-3 text-sm text-white 
                             placeholder-teal-100/40 outline-none"
                  />

                  {/* Subscribe Button */}
                  <button
                    type="button"
                    className="flex shrink-0 items-center justify-center rounded-r-lg bg-[#0d9488] 
                             px-3.5 py-3 transition-colors duration-200 hover:bg-[#0f766e]"
                    aria-label="Subscribe"
                  >
                    <Send size={16} className="shrink-0 text-white" />
                  </button>
                </div>
              </div>
            </div>


          </div>
        </div>
      </Container>

      {/* ────────────────── */}
      {/* Bottom Bar        */}
      {/* ────────────────── */}
      <div className="border-t border-white/10">
        <div
          className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row 
                        items-center justify-between gap-4"
        >
          {/* Copyright */}
          <p className="text-teal-100/50 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} ApparelLink. All rights reserved.
          </p>

          {/* Bottom Links */}
          <div className="flex items-center gap-6">
            <a
              href="/privacy"
              className="text-teal-100/50 text-xs hover:text-[#5eead4] transition-colors"
            >
              Privacy
            </a>

            <a
              href="/terms"
              className="text-teal-100/50 text-xs hover:text-[#5eead4] transition-colors"
            >
              Terms
            </a>

            <a
              href="/cookies"
              className="text-teal-100/50 text-xs hover:text-[#5eead4] transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

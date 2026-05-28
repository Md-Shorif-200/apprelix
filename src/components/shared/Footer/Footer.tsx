import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  // Facebook,
  // Twitter,
  // Linkedin,
  // Instagram,
  Send,
  Shirt,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0F1F35] via-[#172C45] to-[#1a3a5c] text-white ">
      {/* Top Divider Line */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* ─────────────────────────────────── */}
          {/* PART 1 : Logo + Contact Information */}
          {/* ─────────────────────────────────── */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="bg-blue-500 p-2 rounded-lg">
                <Shirt size={28} className="text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">ApparelLink</h2>
                <p className="text-xs text-blue-300">B2B Sourcing Platform</p>
              </div>
            </div>

            {/* Short Description */}
            <p className="text-gray-400 text-sm leading-relaxed">
              Connecting global buyers with trusted apparel suppliers through
              AI-powered sourcing and seamless communication.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="bg-blue-500/20 p-2 rounded-lg">
                  <Phone size={16} className="text-blue-400" />
                </div>
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="bg-blue-500/20 p-2 rounded-lg">
                  <Mail size={16} className="text-blue-400" />
                </div>
                <span className="text-gray-300 text-sm">
                  hello@apparellink.com
                </span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3">
                <div className="bg-blue-500/20 p-2 rounded-lg">
                  <MapPin size={16} className="text-blue-400" />
                </div>
                <span className="text-gray-300 text-sm">
                  New York, NY 10001
                </span>
              </div>
            </div>
          </div>

          {/* ─────────────────── */}
          {/* PART 2 : Platform   */}
          {/* ─────────────────── */}
          <div className="space-y-6">
            {/* Section Heading */}
            <div>
              <h3 className="text-white font-semibold text-base">Platform</h3>
              {/* Underline Accent */}
              <div className="mt-2 h-0.5 w-10 bg-blue-500 rounded" />
            </div>

            {/* Links */}
            <ul className="space-y-3">
              {[
                { label: "Explore RFQs", href: "/rfqs" },
                { label: "Find Suppliers", href: "/suppliers" },
                { label: "How It Works", href: "/#how-it-works" },
                { label: "Pricing", href: "/pricing" },
                { label: "AI Matching", href: "/features/ai" },
                { label: "Success Stories", href: "/testimonials" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-blue-400 
                               transition-colors duration-200 flex items-center gap-2 group"
                  >
                    {/* Small arrow that shows on hover */}
                    <span
                      className="text-blue-500 opacity-0 group-hover:opacity-100 
                                     transition-opacity duration-200"
                    >
                      ›
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ─────────────────── */}
          {/* PART 3 : Company   */}
          {/* ─────────────────── */}
          <div className="space-y-6">
            {/* Section Heading */}
            <div>
              <h3 className="text-white font-semibold text-base">Company</h3>
              {/* Underline Accent */}
              <div className="mt-2 h-0.5 w-10 bg-blue-500 rounded" />
            </div>

            {/* Links */}
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Careers", href: "/careers" },
                { label: "Blog", href: "/blog" },
                { label: "Press", href: "/press" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Use", href: "/terms" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-blue-400 
                               transition-colors duration-200 flex items-center gap-2 group"
                  >
                    {/* Small arrow that shows on hover */}
                    <span
                      className="text-blue-500 opacity-0 group-hover:opacity-100 
                                     transition-opacity duration-200"
                    >
                      ›
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ──────────────────────────────────── */}
          {/* PART 4 : Social Links + Newsletter   */}
          {/* ──────────────────────────────────── */}
          <div className="space-y-6">
            {/* Section Heading */}
            <div>
              <h3 className="text-white font-semibold text-base">
                Stay Connected
              </h3>
              {/* Underline Accent */}
              <div className="mt-2 h-0.5 w-10 bg-blue-500 rounded" />
            </div>

            {/* Social Media Icons */}
            <div>
              <p className="text-gray-400 text-sm mb-4">
                Follow us on social media
              </p>
              <div className="flex items-center gap-3">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white/10 hover:bg-blue-600 p-2.5 rounded-lg 
                             transition-colors duration-200 group"
                  aria-label="Facebook"
                >
                  {/* <Facebook size={18} className="text-gray-400 group-hover:text-white" /> */}
                </a>

                {/* Twitter / X */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white/10 hover:bg-sky-500 p-2.5 rounded-lg 
                             transition-colors duration-200 group"
                  aria-label="Twitter"
                >
                  {/* <Twitter size={18} className="text-gray-400 group-hover:text-white" /> */}
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white/10 hover:bg-blue-700 p-2.5 rounded-lg 
                             transition-colors duration-200 group"
                  aria-label="LinkedIn"
                >
                  {/* <Linkedin size={18} className="text-gray-400 group-hover:text-white" /> */}
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white/10 hover:bg-pink-600 p-2.5 rounded-lg 
                             transition-colors duration-200 group"
                  aria-label="Instagram"
                >
                  {/* <Instagram size={18} className="text-gray-400 group-hover:text-white" /> */}
                </a>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div>
              <p className="text-white text-sm font-medium mb-1">Newsletter</p>
              <p className="text-gray-400 text-xs mb-4">
                Get the latest updates, sourcing tips, and industry news.
              </p>

              {/* Input + Button Group */}
              <div
                className="flex items-center bg-white/10 rounded-lg overflow-hidden 
                              border border-white/10 focus-within:border-blue-500 
                              transition-colors duration-200"
              >
                {/* Email Input */}
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent px-4 py-3 text-sm text-white 
                             placeholder-gray-500 outline-none"
                />

                {/* Subscribe Button */}
                <button
                  className="bg-blue-500 hover:bg-blue-600 px-4 py-3 
                             transition-colors duration-200 flex items-center"
                  aria-label="Subscribe"
                >
                  <Send size={16} className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ────────────────── */}
      {/* Bottom Bar        */}
      {/* ────────────────── */}
      <div className="border-t border-white/10">
        <div
          className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row 
                        items-center justify-between gap-4"
        >
          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} ApparelLink. All rights reserved.
          </p>

          {/* Bottom Links */}
          <div className="flex items-center gap-6">
            <a
              href="/privacy"
              className="text-gray-500 text-xs hover:text-blue-400 transition-colors"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="text-gray-500 text-xs hover:text-blue-400 transition-colors"
            >
              Terms
            </a>
            <a
              href="/cookies"
              className="text-gray-500 text-xs hover:text-blue-400 transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

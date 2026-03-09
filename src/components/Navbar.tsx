import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Programs", path: "/programs" },
  { name: "Research", path: "/research" },
  { name: "Events", path: "/events" },
  { name: "Knowledge Hub", path: "/knowledge" },
  { name: "Community", path: "/community" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d1b3e]/95 backdrop-blur-md shadow-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #1a2f5e, #0d1b3e)" }}>
            <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
              <path d="M6 26 C6 24.5 7.5 24 9 24 L17 24 L17 11 C17 10 16 9 15 9 L9 9 C7.5 9 6 10.2 6 11.5 Z" fill="#c9a84c"/>
              <path d="M30 26 C30 24.5 28.5 24 27 24 L19 24 L19 11 C19 10 20 9 21 9 L27 9 C28.5 9 30 10.2 30 11.5 Z" fill="#e8c96a"/>
              <rect x="17" y="9" width="2" height="16" rx="0.5" fill="#f0d080"/>
              <path d="M5 26 L18 28 L31 26 L31 27.2 Q18 29.5 5 27.2 Z" fill="#c9a84c" opacity="0.85"/>
              <ellipse cx="18" cy="7" rx="6" ry="1.6" fill="#f0d080"/>
              <rect x="16.2" y="5" width="3.6" height="3.5" rx="0.6" fill="#e8c96a"/>
              <line x1="24" y1="7" x2="26" y2="10.5" stroke="#f0d080" strokeWidth="1" strokeLinecap="round"/>
              <circle cx="26.5" cy="11.3" r="1.2" fill="#c9a84c"/>
            </svg>
          </div>
          <span className="font-serif font-bold text-xl text-white tracking-tight">
            LIS <span style={{ color: "#c9a84c" }}>Academy</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                location.pathname === link.path
                  ? "text-[#c9a84c] bg-white/10"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button size="sm" className="rounded-lg font-semibold text-[#0d1b3e] hover:-translate-y-0.5 transition-all" style={{ background: "linear-gradient(135deg, #f0d080, #c9a84c)" }}>
            Apply Now
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0d1b3e]/97 border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                    location.pathname === link.path
                      ? "text-[#c9a84c] bg-white/10"
                      : "text-white/70 hover:text-white hover:bg-white/8"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-3">
                <Button className="w-full font-semibold text-[#0d1b3e]" style={{ background: "linear-gradient(135deg, #f0d080, #c9a84c)" }}>
                  Apply Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

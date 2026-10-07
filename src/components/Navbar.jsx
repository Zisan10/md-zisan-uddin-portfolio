import { useEffect, useState } from "react";
import {
  FiMenu,
  FiX,
  FiArrowUpRight,
  FiMaximize2,
} from "react-icons/fi";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Close popup when pressing Escape
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Prevent body scrolling when profile popup is open
  useEffect(() => {
    if (isProfileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isProfileOpen]);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0B0F14]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          
          {/* Logo */}
          <a
            href="#home"
            onClick={handleNavClick}
            className="group flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#22C55E]/20 bg-[#22C55E]/10 text-sm font-bold text-[#22C55E] transition-all duration-300 group-hover:border-[#22C55E]/40 group-hover:bg-[#22C55E]/15">
              MD.
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-bold tracking-wide text-white">
                ZISAN UDDIN
              </p>
              <p className="text-[11px] text-slate-500">
                MERN Stack Developer
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden items-center gap-4 sm:flex">
            
            {/* Profile Image */}
            <button
              type="button"
              onClick={() => setIsProfileOpen(true)}
              aria-label="Open profile photo"
              className="group relative rounded-full outline-none"
            >
              <span className="absolute -inset-1 rounded-full bg-linear-to-r from-[#22C55E] to-[#38BDF8] opacity-0 blur-sm transition duration-300 group-hover:opacity-70" />

              <span className="relative block h-11 w-11 overflow-hidden rounded-full border border-white/15 bg-[#111827] transition-all duration-300 group-hover:scale-105 group-hover:border-[#22C55E]/50">
                <img
                  src="./assets/zisan.jpg"
                  alt="Md Zisan Uddin"
                  className="h-full w-full object-cover cursor-pointer"
                />
              </span>
            </button>

            {/* Let's Talk */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:border-[#22C55E]/30 hover:bg-[#22C55E]/10"
            >
              Let's Talk
              <FiArrowUpRight size={16} />
            </a>
          </div>

          {/* Mobile Profile + Menu */}
          <div className="flex items-center gap-3 sm:hidden">
            
            {/* Mobile Profile */}
            <button
              type="button"
              onClick={() => setIsProfileOpen(true)}
              aria-label="Open profile photo"
              className="group relative rounded-full outline-none"
            >
              <span className="relative block h-10 w-10 overflow-hidden rounded-full border border-white/15 bg-[#111827] transition-all duration-300 group-active:scale-95">
                <img
                  src="./assets/zisan.jpg"
                  alt="Md Zisan Uddin"
                  className="h-full w-full object-cover"
                />
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/3 text-slate-300 transition-colors hover:border-white/20 hover:text-white"
            >
              {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t border-white/5 bg-[#0B0F14]/95 px-5 py-5 backdrop-blur-xl sm:hidden">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleNavClick}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-slate-400 transition-colors hover:bg-white/4 hover:text-white"
                >
                  {item.name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={handleNavClick}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#22C55E] px-4 py-3 text-sm font-semibold text-[#0B0F14] transition-colors hover:bg-[#4ADE80]"
              >
                Let's Talk
                <FiArrowUpRight size={16} />
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Profile Popup / Modal */}
      {isProfileOpen && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 px-5 py-8 backdrop-blur-md"
          onClick={() => setIsProfileOpen(false)}
        >
          {/* Popup Card */}
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Profile photo"
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-[#111827] p-4 shadow-2xl shadow-black/50 sm:p-5"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsProfileOpen(false)}
              aria-label="Close profile popup"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-slate-300 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-black/60 hover:text-white"
            >
              <FiX size={19} />
            </button>

            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0B0F14]">
              <img
                src="./assets/zisan.jpg"
                alt="Md Zisan Uddin"
                className="h-auto max-h-[65vh] w-full object-cover"
              />

              {/* Image Overlay */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 via-black/20 to-transparent p-5 pt-20">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <FiMaximize2 size={14} />
                  <span>Profile</span>
                </div>
              </div>
            </div>

            {/* Profile Information */}
            <div className="px-1 pb-1 pt-5">
              <h2 className="text-xl font-bold text-white">
                Md Zisan Uddin
              </h2>

              <p className="mt-1 text-sm text-[#22C55E]">
                MERN Stack Web Developer
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Building modern, responsive & functional web applications
                with modern JavaScript technologies.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
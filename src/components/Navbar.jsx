import { useState } from "react";
import {
  FiMenu,
  FiX,
  FiGithub,
  FiLinkedin,
  FiArrowUpRight,
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
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/5 bg-[#0B0F14]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        
        {/* Logo */}
        <a
          href="/"
          onClick={handleNavClick}
          className="group flex items-center gap-2"
        >
          <span className="text-xl font-extrabold tracking-tight text-white">
            MD<span className="text-[#22C55E]">.</span>
          </span>

          <span className="hidden text-sm font-medium text-slate-400 sm:block">
            Zisan Uddin
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop Right Side */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://github.com/Zisan10"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-white/10 p-2.5 text-slate-400 transition-all duration-300 hover:border-[#22C55E]/50 hover:text-[#22C55E]"
          >
            <FiGithub size={17} />
          </a>

          <a
            href="https://www.linkedin.com/in/md-zisan-uddin"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-white/10 p-2.5 text-slate-400 transition-all duration-300 hover:border-[#38BDF8]/50 hover:text-[#38BDF8]"
          >
            <FiLinkedin size={17} />
          </a>

          <a
            href="#contact"
            className="group ml-2 flex items-center gap-2 rounded-full bg-[#22C55E] px-5 py-2.5 text-sm font-semibold text-[#0B0F14] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4ADE80]"
          >
            Let's Talk
            <FiArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="rounded-lg border border-white/10 p-2.5 text-slate-300 transition-colors hover:text-white lg:hidden"
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-white/5 bg-[#0B0F14]/95 transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 py-5 sm:px-8">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={handleNavClick}
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="mt-4 flex gap-3 border-t border-white/5 pt-4">
            <a
              href="https://github.com/Zisan10"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm text-slate-300"
            >
              <FiGithub />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/mdzisanduddin"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm text-slate-300"
            >
              <FiLinkedin />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
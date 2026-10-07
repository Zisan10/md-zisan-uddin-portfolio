import {
  FiArrowUp,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#0B0F14]">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">

          {/* Logo */}
          <div>
            <div className="flex justify-start items-end gap-5">
              <img className="w-8 rounded-full" src="../src/assets/zisan.jpg" alt="Zisan" />
              <a
              href="/"
              className="text-xl font-extrabold tracking-tight text-white"
            >
              MD<span className="text-[#22C55E]">.</span>
            </a>
            </div>

            <p className="text-sm text-slate-600 mt-5">
              MERN Stack Web Developer
            </p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Zisan10"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-white/10 p-2.5 text-slate-500 transition-all duration-300 hover:border-[#22C55E]/30 hover:text-[#22C55E]"
            >
              <FiGithub size={17} />
            </a>

            <a
              href="https://linkedin.com/in/md-zisan-uddin"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-white/10 p-2.5 text-slate-500 transition-all duration-300 hover:border-[#38BDF8]/30 hover:text-[#38BDF8]"
            >
              <FiLinkedin size={17} />
            </a>

            <a
              href="#home"
              aria-label="Back to top"
              className="ml-2 rounded-full border border-white/10 p-2.5 text-slate-500 transition-all duration-300 hover:border-white/20 hover:text-white"
            >
              <FiArrowUp size={17} />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/5 pt-6 text-center sm:text-left">
          <p className="text-xs text-slate-600">
            © {currentYear} Md Zisan Uddin. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
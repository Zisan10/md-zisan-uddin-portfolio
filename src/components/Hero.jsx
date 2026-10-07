import {
  FiArrowDown,
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#94A3B8 1px, transparent 1px), linear-gradient(90deg, #94A3B8 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Green Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#22C55E]/10 blur-[120px]" />

      {/* Cyan Glow */}
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#38BDF8]/10 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-24">

        {/* Left Content */}
        <div>
          {/* Available Badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#22C55E]/20 bg-[#22C55E]/5 px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22C55E] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22C55E]" />
            </span>

            <span className="text-xs font-medium text-[#86EFAC] sm:text-sm">
              Available for opportunities
            </span>
          </div>

          {/* Small Heading */}
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#38BDF8]">
            Hello, I'm
          </p>

          {/* Main Heading */}
          <h1 className="max-w-4xl text-5xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[76px]">
            MD ZISAN
            <span className="block text-slate-500">UDDIN<span className="text-[#22C55E]">.</span></span>
          </h1>

          {/* Role */}
          <div className="mt-7">
            <h2 className="text-xl font-semibold text-slate-200 sm:text-2xl">
              MERN Stack Web Developer
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              I build modern, responsive and functional web applications
              using React.js, Next.js, Node.js, Express.js and MongoDB.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#22C55E] px-6 py-3.5 text-sm font-bold text-[#0B0F14] transition-all duration-300 hover:-translate-y-1 hover:bg-[#4ADE80] hover:shadow-lg hover:shadow-[#22C55E]/20"
            >
              View My Projects

              <FiArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/2 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/5"
            >
              <FiMail size={17} />
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-9 flex items-center gap-3">
            <span className="mr-2 text-xs uppercase tracking-widest text-slate-600">
              Find me
            </span>

            <a
              href="https://github.com/Zisan10"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-white/10 p-2.5 text-slate-400 transition-all duration-300 hover:border-[#22C55E]/40 hover:text-[#22C55E]"
            >
              <FiGithub size={18} />
            </a>

            <a
              href="https://linkedin.com/in/mdzisanduddin"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-white/10 p-2.5 text-slate-400 transition-all duration-300 hover:border-[#38BDF8]/40 hover:text-[#38BDF8]"
            >
              <FiLinkedin size={18} />
            </a>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative mx-auto w-full max-w-md lg:ml-auto">

          {/* Outer Glow */}
          <div className="absolute inset-10 rounded-full bg-[#22C55E]/10 blur-[80px]" />

          {/* Developer Card */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#111827]/70 p-4 shadow-2xl backdrop-blur-xl">

            {/* Window Header */}
            <div className="flex items-center justify-between border-b border-white/5 px-3 pb-4">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              </div>

              <span className="font-mono text-[11px] text-slate-600">
                developer.js
              </span>
            </div>

            {/* Code Visual */}
            <div className="min-h-90 px-5 py-7 font-mono text-sm leading-8 sm:min-h-102.5 sm:text-base">
              <p>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-sky-300">developer</span>{" "}
                <span className="text-slate-500">=</span>{" "}
                <span className="text-yellow-300">{"{"}</span>
              </p>

              <p className="pl-5">
                <span className="text-slate-500">name:</span>{" "}
                <span className="text-green-300">'Md Zisan Uddin'</span>
                <span className="text-slate-500">,</span>
              </p>

              <p className="pl-5">
                <span className="text-slate-500">role:</span>{" "}
                <span className="text-green-300">
                  'MERN Stack Developer'
                </span>
                <span className="text-slate-500">,</span>
              </p>

              <p className="pl-5">
                <span className="text-slate-500">location:</span>{" "}
                <span className="text-green-300">
                  'Kushtia, Bangladesh'
                </span>
                <span className="text-slate-500">,</span>
              </p>

              <p className="pl-5">
                <span className="text-slate-500">skills:</span>{" "}
                <span className="text-yellow-300">[</span>
              </p>

              <p className="pl-10 text-sky-300">
                'React',
                <br />
                <span className="pl-10">'JavaScript',</span>
                <br />
                <span className="pl-10">'Tailwind CSS',</span>
                <br />
                <span className="pl-10">'Node.js',</span>
                <br />
                <span className="pl-10">'MongoDB'</span>
              </p>

              <p className="pl-5">
                <span className="text-yellow-300">]</span>
              </p>

              <p>
                <span className="text-yellow-300">{"}"}</span>
              </p>

              <div className="mt-8 border-t border-white/5 pt-5">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <FiMapPin size={14} className="text-[#22C55E]" />
                  <span>Kushtia, Bangladesh</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Tech Badge */}
          <div className="absolute -right-3 -top-5 rounded-2xl border border-[#22C55E]/20 bg-[#111827] px-4 py-3 shadow-xl shadow-black/20 sm:-right-6">
            <p className="text-[10px] uppercase tracking-widest text-slate-500">
              Stack
            </p>
            <p className="mt-1 text-sm font-bold text-[#4ADE80]">
              MERN
            </p>
          </div>

          {/* Floating Experience Badge */}
          <div className="absolute -bottom-5 -left-3 rounded-2xl border border-white/10 bg-[#111827] px-4 py-3 shadow-xl shadow-black/20 sm:-left-6">
            <p className="text-[10px] uppercase tracking-widest text-slate-500">
              Focus
            </p>
            <p className="mt-1 text-sm font-bold text-white">
              Full-Stack Web
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-600 transition-colors hover:text-slate-300 sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>

        <FiArrowDown className="animate-bounce" size={17} />
      </a>
    </section>
  );
}

export default Hero;
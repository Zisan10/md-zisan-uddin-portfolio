import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/5 bg-[#0E131A] py-24 sm:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#22C55E]/5 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#22C55E]">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let's build something
            <span className="block text-slate-500">great together.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Have a project, opportunity or idea in mind? Feel free to reach
            out. I’d be happy to discuss how I can help.
          </p>
        </div>

        {/* Contact Card */}
        <div className="mx-auto mt-14 max-w-4xl rounded-3xl border border-white/10 bg-[#111827]/60 p-6 backdrop-blur-xl sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">

            {/* Email */}
            <a
              href="mailto:mdzisanduddin935@gmail.com"
              className="group rounded-2xl border border-white/10 bg-white/2 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#22C55E]/20 hover:bg-white/4"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#22C55E]/10 text-[#22C55E]">
                  <FiMail size={20} />
                </div>

                <FiArrowUpRight
                  className="text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#22C55E]"
                  size={18}
                />
              </div>

              <p className="mt-5 text-xs uppercase tracking-widest text-slate-600">
                Email
              </p>

              <p className="mt-2 break-all text-sm font-medium text-slate-300">
                mdzisanduddin935@gmail.com
              </p>
            </a>

            {/* Phone */}
            <a
              href="tel:+8801874151365"
              className="group rounded-2xl border border-white/10 bg-white/2 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8]/20 hover:bg-white/4"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#38BDF8]/10 text-[#38BDF8]">
                  <FiPhone size={20} />
                </div>

                <FiArrowUpRight
                  className="text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#38BDF8]"
                  size={18}
                />
              </div>

              <p className="mt-5 text-xs uppercase tracking-widest text-slate-600">
                Phone
              </p>

              <p className="mt-2 text-sm font-medium text-slate-300">
                +880 1874151365
              </p>
            </a>

            {/* Location */}
            <div className="rounded-2xl border border-white/10 bg-white/2 p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-400/10 text-purple-400">
                <FiMapPin size={20} />
              </div>

              <p className="mt-5 text-xs uppercase tracking-widest text-slate-600">
                Location
              </p>

              <p className="mt-2 text-sm font-medium text-slate-300">
                Kushtia, Bangladesh
              </p>
            </div>

            {/* Social */}
            <div className="rounded-2xl border border-white/10 bg-white/2 p-5">
              <p className="text-xs uppercase tracking-widest text-slate-600">
                Connect
              </p>

              <div className="mt-4 flex gap-3">
                <a
                  href="https://github.com/Zisan10"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-slate-400 transition-all duration-300 hover:border-[#22C55E]/30 hover:text-[#22C55E]"
                >
                  <FiGithub size={19} />
                </a>

                <a
                  href="https://linkedin.com/in/md-zisan-uddin"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-slate-400 transition-all duration-300 hover:border-[#38BDF8]/30 hover:text-[#38BDF8]"
                >
                  <FiLinkedin size={19} />
                </a>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 border-t border-white/5 pt-6 text-center">
            <a
              href="mailto:mdzisanduddin935@gmail.com"
              className="group inline-flex items-center gap-2 rounded-full bg-[#22C55E] px-7 py-3.5 text-sm font-bold text-[#0B0F14] transition-all duration-300 hover:-translate-y-1 hover:bg-[#4ADE80] hover:shadow-lg hover:shadow-[#22C55E]/20"
            >
              Send Me a Message

              <FiArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
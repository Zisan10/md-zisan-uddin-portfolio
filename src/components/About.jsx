import {
  FiCode,
  FiLayers,
  FiMessageCircle,
  FiMapPin,
} from "react-icons/fi";

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/5 bg-[#0B0F14] py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Heading */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#22C55E]">
            About Me
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Building practical web solutions with{" "}
            <span className="text-slate-500">modern technologies.</span>
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          {/* About Text */}
          <div>
            <p className="text-base leading-8 text-slate-400 sm:text-lg">
              I’m Md Zisan Uddin, a MERN Stack Web Developer focused on
              building responsive and functional web applications. I work
              with modern JavaScript technologies and enjoy turning ideas and
              UI designs into practical web experiences.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
              My development experience includes frontend development,
              REST API integration, CRUD operations, authentication,
              Git/GitHub and project deployment. I also have experience
              teaching programming fundamentals and solving technical
              problems.
            </p>

            {/* Small Stats */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/2 p-5">
                <FiCode className="mb-4 text-[#22C55E]" size={22} />

                <p className="text-lg font-bold text-white">
                  Full-Stack
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Web Development
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/2 p-5">
                <FiLayers className="mb-4 text-[#38BDF8]" size={22} />

                <p className="text-lg font-bold text-white">
                  Responsive
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Web Interfaces
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/2 p-5">
                <FiMessageCircle className="mb-4 text-purple-400" size={22} />

                <p className="text-lg font-bold text-white">
                  Communication
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Problem Solving
                </p>
              </div>
            </div>
          </div>

          {/* Personal Information Card */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-[#22C55E]/5 blur-2xl" />

            <div className="relative rounded-3xl border border-white/10 bg-[#111827]/70 p-7 backdrop-blur-xl sm:p-8">
              <div className="mb-8 flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">
                  Personal Info
                </h3>

                <div className="h-2 w-2 rounded-full bg-[#22C55E] shadow-lg shadow-[#22C55E]/50" />
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-600">
                    Name
                  </p>

                  <p className="mt-2 text-sm font-medium text-slate-200">
                    Md Zisan Uddin
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-600">
                    Role
                  </p>

                  <p className="mt-2 text-sm font-medium text-slate-200">
                    MERN Stack Web Developer
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-600">
                    Location
                  </p>

                  <div className="mt-2 flex items-center gap-2 text-sm font-medium text-slate-200">
                    <FiMapPin className="text-[#22C55E]" size={16} />
                    Kushtia, Bangladesh
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-600">
                    Education
                  </p>

                  <p className="mt-2 text-sm font-medium leading-6 text-slate-200">
                    Diploma in Computer Science & Technology
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Kushtia Govt. Polytechnic Institute
                  </p>
                </div>

                <div className="border-t border-white/5 pt-6">
                  <p className="text-xs uppercase tracking-widest text-slate-600">
                    Languages
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/10 bg-white/3 px-3 py-1.5 text-xs text-slate-300">
                      Bengali — Native
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/3 px-3 py-1.5 text-xs text-slate-300">
                      English — Intermediate
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
import {
  FiBookOpen,
  FiCalendar,
  FiMapPin,
} from "react-icons/fi";

function Education() {
  return (
    <section
      id="education"
      className="border-t border-white/5 bg-[#0B0F14] py-24 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#22C55E]">
            Education
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Academic background
          </h2>
        </div>

        {/* Education Card */}
        <div className="flex flex-col">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#111827]/60 p-7 sm:p-9">

          {/* Background Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#22C55E]/5 blur-3xl" />

          <div className="relative flex flex-col gap-7 sm:flex-row sm:items-start">

            {/* Icon */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#22C55E]/20 bg-[#22C55E]/5 text-[#22C55E]">
              <FiBookOpen size={25} />
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex flex-col justify-between gap-3 sm:flex-row">
                <div>
                  <h3 className="text-xl font-bold text-white sm:text-2xl">
                    Diploma in Computer Science & Technology
                  </h3>

                  <p className="mt-2 font-medium text-slate-400">
                    Kushtia Govt. Polytechnic Institute
                  </p>
                </div>

                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#22C55E]/20 bg-[#22C55E]/5 text-[#22C55E]">
                  2027
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/2.5 px-3 py-2 text-xs text-slate-400">
                  <FiCalendar size={14} />
                  CGPA : 3.71
                </span>

                <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/2.5 px-3 py-2 text-xs text-slate-400">
                  <FiMapPin size={14} />
                  Kushtia, Bangladesh
                </span>
              </div>
            </div>
          </div>
        </div>
          <div className="mt-5 relative overflow-hidden rounded-3xl border border-white/10 bg-[#111827]/60 p-7 sm:p-9">

          {/* Background Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#22C55E]/5 blur-3xl" />

          <div className="relative flex flex-col gap-7 sm:flex-row sm:items-start">

            {/* Icon */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#22C55E]/20 bg-[#22C55E]/5 text-[#22C55E]">
              <FiBookOpen size={25} />
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex flex-col justify-between gap-3 sm:flex-row">
                <div>
                  <h3 className="text-xl font-bold text-white sm:text-2xl">
                    Secondary School Certificate
                  </h3>

                  <p className="mt-2 font-medium text-slate-400">
                    Taragunia High School
                  </p>
                </div>

                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#22C55E]/20 bg-[#22C55E]/5 text-[#22C55E]">
                  2022
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/2.5 px-3 py-2 text-xs text-slate-400">
                  <FiCalendar size={14} />
                  CGPA : 5.00
                </span>

                <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/2.5 px-3 py-2 text-xs text-slate-400">
                  <FiMapPin size={14} />
                  Taragunia, Daulatpur, Kushtia, Bangladesh
                </span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
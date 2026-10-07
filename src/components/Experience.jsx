import {
  FiBriefcase,
  FiCode,
  FiTool,
  FiUsers,
} from "react-icons/fi";

const experiences = [
  {
    year: "2024 — Present",
    title: "Freelance Web Developer",
    company: "Freelance",
    icon: FiCode,
    description:
      "Developed responsive and dynamic websites and web applications using modern JavaScript technologies and the MERN stack.",
    points: [
      "Converted UI/UX designs into functional, responsive web interfaces.",
      "Integrated REST APIs and third-party services into web applications.",
      "Used Git and GitHub for version control and deployed projects using Netlify.",
    ],
  },

  {
    year: "Experience",
    title: "Programming Trainer",
    company: "Polytechnic Care",
    icon: FiUsers,
    description:
      "Taught programming fundamentals to polytechnic students through practical and easy-to-understand lessons.",
    points: [
      "Explained programming concepts, coding logic and problem-solving techniques.",
      "Conducted practical coding sessions and supported students with programming-related problems.",
      "Guided students in developing programming and logical thinking skills.",
    ],
  },

  {
    year: "Experience",
    title: "Mobile Servicing Technician",
    company: "Self-Employed",
    icon: FiTool,
    description:
      "Provided mobile phone repair and servicing services through a self-operated shop.",
    points: [
      "Diagnosed and resolved common smartphone hardware and software-related issues.",
      "Performed troubleshooting, software setup, component replacement and basic maintenance.",
      "Communicated with customers to understand technical problems and provide suitable solutions.",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-white/5 bg-[#0E131A] py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#22C55E]">
            Experience
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            My professional journey
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400">
            Experience across web development, programming instruction and
            technical troubleshooting.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-4.75 top-2 hidden h-[calc(100%-20px)] w-px bg-linear-to-b from-[#22C55E]/60 via-white/10 to-transparent sm:block" />

          <div className="space-y-10">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;

              return (
                <div
                  key={experience.title}
                  className="relative grid gap-6 sm:grid-cols-[40px_150px_1fr] sm:gap-8"
                >
                  {/* Icon */}
                  <div className="relative z-10 hidden h-10 w-10 items-center justify-center rounded-full border border-[#22C55E]/20 bg-[#0E131A] text-[#22C55E] sm:flex">
                    <Icon size={17} />
                  </div>

                  {/* Year */}
                  <div className="pt-2">
                    <p className="text-sm font-semibold text-[#22C55E]">
                      {experience.year}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="rounded-3xl border border-white/10 bg-[#111827]/50 p-6 transition-all duration-300 hover:border-white/15 hover:bg-[#111827]/80 sm:p-7">
                    <h3 className="text-xl font-bold text-white sm:text-2xl">
                      {experience.title}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-slate-500">
                      {experience.company}
                    </p>

                    <p className="mt-5 text-sm leading-7 text-slate-400">
                      {experience.description}
                    </p>

                    <ul className="mt-5 space-y-3">
                      {experience.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-sm leading-6 text-slate-400"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#22C55E]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Mobile Icon */}
                  <div className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full border border-[#22C55E]/20 bg-[#0E131A] text-[#22C55E] sm:hidden">
                    <Icon size={15} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;

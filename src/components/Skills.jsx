import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiNetlify,
  SiVscodium,
} from "react-icons/si";
import { TbBrandCss3 } from "react-icons/tb";

const skillGroups = [
  {
    title: "Frontend",
    description: "Building modern and responsive user interfaces.",
    skills: [
      {
        name: "HTML5",
        icon: SiHtml5,
        color: "text-orange-400",
      },
      {
        name: "CSS3",
        icon: TbBrandCss3,
        color: "text-blue-400",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "text-yellow-300",
      },
      {
        name: "React.js",
        icon: SiReact,
        color: "text-cyan-400",
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-white",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-cyan-300",
      },
      {
        name: "Bootstrap",
        icon: SiBootstrap,
        color: "text-purple-400",
      },
    ],
  },

  {
    title: "Backend",
    description: "Developing server-side applications and APIs.",
    skills: [
      {
        name: "Node.js",
        icon: SiNodedotjs,
        color: "text-green-400",
      },
      {
        name: "Express.js",
        icon: SiExpress,
        color: "text-slate-200",
      },
    ],
  },

  {
    title: "Database",
    description: "Working with application data and databases.",
    skills: [
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "text-green-400",
      },
    ],
  },

  {
    title: "Tools & Platforms",
    description: "Tools I use for development and deployment.",
    skills: [
      {
        name: "Git",
        icon: SiGit,
        color: "text-orange-500",
      },
      {
        name: "GitHub",
        icon: SiGithub,
        color: "text-white",
      },
      {
        name: "Netlify",
        icon: SiNetlify,
        color: "text-cyan-300",
      },
      {
        name: "VS Code",
        icon: SiVscodium,
        color: "text-blue-400",
      },
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-white/5 bg-[#0E131A] py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#22C55E]">
            My Skills
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Technologies I work with
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400">
            A collection of technologies, tools and platforms I use to build
            responsive and functional web applications.
          </p>
        </div>

        {/* Skill Groups */}
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="group rounded-3xl border border-white/10 bg-[#111827]/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-[#111827]/80 sm:p-7"
            >
              {/* Group Header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">
                  {group.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {group.description}
                </p>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/2.5 px-3.5 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/5"
                    >
                      <Icon
                        size={19}
                        className={`${skill.color} transition-transform duration-300 group-hover:scale-105`}
                      />

                      <span className="text-sm font-medium text-slate-300">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-12 rounded-3xl border border-[#22C55E]/10 bg-[#22C55E]/3 px-6 py-7 text-center sm:px-10">
          <p className="text-sm leading-7 text-slate-400 sm:text-base">
            I focus on combining clean interfaces, practical functionality
            and problem-solving to create useful web experiences.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
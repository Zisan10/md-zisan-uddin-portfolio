import {
  FiExternalLink,
  FiGithub,
  FiArrowUpRight,
} from "react-icons/fi";
import { TbBrandCss3 } from "react-icons/tb";
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    category: "Full-Stack Web Application",
    description:
      "A full-stack e-commerce platform with user authentication, product management, cart functionality and checkout workflows.",
    image: "/projects/ecommerce.png",
    featured: true,
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    liveUrl: "https://e-commerce-website-logic-build.netlify.app/",
    githubUrl: "https://github.com/zisan10",
  },

  {
    id: 2,
    title: "Grocery Website",
    category: "Frontend Web Application",
    description:
      "A multi-page grocery website with a responsive layout, structured navigation and a clean user interface.",
    image: "/projects/grocery.png",
    featured: false,
    technologies: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: TbBrandCss3 },
      { name: "JavaScript", icon: SiJavascript },
    ],
    liveUrl: "https://multipages-website.netlify.app/",
    githubUrl: "https://github.com/zisan10",
  },

  {
    id: 3,
    title: "Register Form",
    category: "React Project",
    description:
      "A responsive registration form built with React with structured user input fields and a form-focused interface.",
    image: "/projects/register.png",
    featured: false,
    technologies: [
      { name: "React.js", icon: SiReact },
    ],
    liveUrl: "https://register-form-create-by-mdzisan.netlify.app/",
    githubUrl: "https://github.com/zisan10",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-white/5 bg-[#0B0F14] py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#22C55E]">
              Featured Work
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Projects I've built
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400">
              A selection of projects that demonstrate my experience with
              frontend and full-stack web development.
            </p>
          </div>

          <div className="hidden text-sm text-slate-600 lg:block">
            Selected Projects
          </div>
        </div>

        {/* Projects */}
        <div className="grid gap-7 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className={`group overflow-hidden rounded-3xl border border-white/10 bg-[#111827]/50 transition-all duration-500 hover:-translate-y-2 hover:border-white/15 ${
                project.featured ? "lg:col-span-2" : ""
              }`}
            >
              {/* Project Image */}
              <div
                className={`relative overflow-hidden bg-[#111827] ${
                  project.featured
                    ? "aspect-16/7"
                    : "aspect-16/10"
                }`}
              >
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#0B0F14] via-transparent to-transparent opacity-80" />

                {/* Category */}
                <div className="absolute left-5 top-5">
                  <span className="rounded-full border border-white/10 bg-[#0B0F14]/70 px-3 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute right-5 top-5">
                    <span className="rounded-full border border-[#22C55E]/20 bg-[#22C55E]/10 px-3 py-1.5 text-xs font-semibold text-[#86EFAC] backdrop-blur-md">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7">
                <div className="flex flex-col justify-between gap-5 sm:flex-row">
                  <div className="max-w-2xl">
                    <h3 className="text-2xl font-bold text-white">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {project.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-slate-500 transition-all duration-300 group-hover:border-[#22C55E]/30 group-hover:text-[#22C55E] sm:flex">
                    <FiArrowUpRight size={20} />
                  </div>
                </div>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => {
                    const Icon = technology.icon;

                    return (
                      <span
                        key={technology.name}
                        className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/2.5 px-3 py-2 text-xs text-slate-300"
                      >
                        <Icon size={15} />
                        {technology.name}
                      </span>
                    );
                  })}
                </div>

                {/* Buttons */}
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#22C55E] px-5 py-2.5 text-sm font-semibold text-[#0B0F14] transition-all duration-300 hover:bg-[#4ADE80]"
                  >
                    Live Demo
                    <FiExternalLink size={15} />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-semibold text-slate-300 transition-all duration-300 hover:border-white/20 hover:bg-white/5 hover:text-white"
                  >
                    <FiGithub size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
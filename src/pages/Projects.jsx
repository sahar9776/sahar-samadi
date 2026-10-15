import { ArrowUpRight, ExternalLink, LockKeyhole } from "lucide-react";

function Projects() {
  const projectsList = [
    {
      title: "Halal system (phase one)",
      libraries: ["React", "Tailwind", "TanStack", "Redux"],
      content:
        "A nationwide management system developed for slaughterhouses across the country, built with React, Redux, and TanStack Query. The platform supports multiple user roles with role-based access and functionality. Due to confidentiality, further project details and source code cannot be shared publicly.",
      private: true,
    },
    {
      title: "Sports and leisure system",
      libraries: ["React", "Tailwind", "TanStack", "Redux"],
      content:
        "A real-world platform developed for managing sports, educational courses, and recreational services at scale. Built in a professional environment, the system supports a range of user needs and operational workflows. Due to confidentiality, further technical and business details cannot be disclosed.",
      private: true,
    },
    {
      title: "The Last of Us",
      image: "/images/the-last-of-us.png",
      vercel: "https://the-last-of-us-psi.vercel.app/",
      github: "https://github.com/sahar9776/the-last-of-us",
      libraries: ["React", "GSAP"],
      content:
        "A personal project inspired by my interest in animation, interactive interfaces, and cinematic experiences.",
    },
  ];

  return (
    <section
      className="
        Container
        min-h-screen
        overflow-hidden
        px-8
        pt-10
        pb-16

        lg:px-0

        max-md:px-4
        max-md:pt-6
        max-md:pb-12
      "
    >
      {/*  HEADER  */}

      <div
        className="
          flex
          items-end
          justify-between
          gap-6
          mb-10

          max-md:mb-7
        "
      >
        <div>
          {/* Label */}
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#3b82f6]" />

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[#3b82f6]
              "
            >
              My Work
            </span>
          </div>

          {/* Title */}
          <h1
            className="
              text-4xl
              font-bold
              tracking-tight
              text-[#f1f5f9]

              max-md:text-3xl
            "
          >
            Selected Projects
          </h1>

          <p
            className="
              mt-3
              max-w-xl
              text-sm
              leading-6
              text-[#64748b]

              max-md:text-xs
              max-md:leading-5
            "
          >
            A selection of personal and professional projects I've worked on
            throughout my development journey.
          </p>
        </div>

        {/* Project Count */}
        <div
          className="
            hidden
            shrink-0
            text-right

            sm:block
          "
        >
          <p
            className="
              text-3xl
              font-bold
              text-[#3b82f6]
            "
          >
            03
          </p>

          <p
            className="
              text-[10px]
              uppercase
              tracking-widest
              text-[#475569]
            "
          >
            Projects
          </p>
        </div>
      </div>

      {/*  PROJECT GRID  */}

      <div
        className="
          grid
          grid-cols-3
          gap-6

          max-lg:grid-cols-2

          max-md:grid-cols-1
          max-md:gap-5
        "
      >
        {projectsList.map((item, index) => (
          <article
            key={index}
            className="
              group
              relative
              flex
              min-w-0
              flex-col
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-[#111827]/40

              transition-all
              duration-500

              hover:-translate-y-1
              hover:border-[#3b82f6]/30
              hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]
            "
          >
            {/*  IMAGE  */}

            <div
              className="
                relative
                flex
                h-52
                w-full
                items-center
                justify-center
                overflow-hidden
                border-b
                border-white/10
                bg-[#0d131c]

                max-md:h-48
              "
            >
              {item.image ? (
                <>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700

                      group-hover:scale-105
                    "
                  />

                  {/* Image Overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#0b0f14]/80
                      via-transparent
                      to-transparent
                      opacity-70
                    "
                  />
                </>
              ) : (
                <>
                  {/* Private Project */}
                  <div
                    className="
                      flex
                      flex-col
                      items-center
                      justify-center
                      text-center
                    "
                  >
                    <div
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.03]
                        text-[#3b82f6]
                      "
                    >
                      <LockKeyhole size={24} />
                    </div>

                    <span
                      className="
                        mt-3
                        text-[10px]
                        font-medium
                        uppercase
                        tracking-[0.2em]
                        text-[#475569]
                      "
                    >
                      Private Project
                    </span>
                  </div>
                </>
              )}

              {/* Project Number */}
              <span
                className="
                  absolute
                  left-5
                  top-5
                  text-xs
                  font-semibold
                  text-white/50
                "
              >
                0{index + 1}
              </span>
            </div>

            {/*  CONTENT  */}

            <div
              className="
                flex
                flex-1
                flex-col
                p-6

                max-md:p-5
              "
            >
              {/* Title */}
              <div className="flex items-start justify-between gap-3">
                <h2
                  className="
                    text-xl
                    font-bold
                    capitalize
                    text-[#f1f5f9]

                    max-md:text-lg
                  "
                >
                  {item.title}
                </h2>

                {item.vercel && (
                  <ArrowUpRight
                    size={19}
                    className="
                      shrink-0
                      text-[#475569]
                      transition-all
                      duration-300

                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      group-hover:text-[#3b82f6]
                    "
                  />
                )}
              </div>

              {/* Description */}
              <p
                className="
                  mt-3
                  text-sm
                  leading-6
                  text-[#94a3b8]

                  max-md:text-xs
                  max-md:leading-6
                "
              >
                {item.content}
              </p>

              {/* Libraries */}
              <div className="mb-0 flex flex-wrap gap-2">
                {item.libraries.map((library) => (
                  <span
                    key={library}
                    className="
                      rounded-full
                      border
                      border-[#3b82f6]/15
                      bg-[#3b82f6]/5
                      px-2.5
                      py-1
                      text-[10px]
                      font-medium
                      text-[#60a5fa]
                    "
                  >
                    {library}
                  </span>
                ))}
              </div>

              {/* Spacer */}
              <div className="flex-1" />

              {/*  ACTIONS  */}

              <div
                className="
                  mt-6
                  flex
                  items-center
                  gap-2
                  border-t
                  border-white/10
                  pt-5
                "
              >
                {item.vercel && (
                  <a
                    href={item.vercel}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      flex-1
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-[#3b82f6]
                      px-3
                      py-2.5
                      text-xs
                      font-semibold
                      text-white

                      transition-all
                      duration-300

                      hover:bg-[#2563eb]
                      hover:shadow-[0_5px_20px_rgba(59,130,246,0.25)]
                    "
                  >
                    <ExternalLink size={15} />

                    <span>Live Demo</span>
                  </a>
                )}

                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      flex-1
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      px-3
                      py-2.5
                      text-xs
                      font-semibold
                      text-[#cbd5e1]

                      transition-all
                      duration-300

                      hover:border-[#3b82f6]/30
                      hover:bg-[#3b82f6]/5
                      hover:text-[#60a5fa]
                    "
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.15c-3.2.7-3.87-1.35-3.87-1.35-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                    </svg>

                    <span>GitHub</span>
                  </a>
                )}

                {item.private && (
                  <div
                    className="
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.02]
                      px-3
                      py-2.5
                      text-xs
                      font-medium
                      text-[#64748b]
                    "
                  >
                    <LockKeyhole size={14} />

                    <span>Confidential Project</span>
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;

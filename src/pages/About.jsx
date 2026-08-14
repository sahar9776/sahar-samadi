import {
  BriefcaseBusiness,
  Code2,
  Layers3,
} from "lucide-react";

import Skills from "../components/Skills";

function About() {
  return (
    <section
      className="
        Container
        min-h-screen
        overflow-hidden
        pt-10
        pb-16

        max-md:overflow-visible
        max-md:pt-6
        max-md:pb-12
      "
    >
      {/* Header */}
      <div className="mb-12 max-md:mb-8">
        <div className="flex items-center gap-3">
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
            About Me
          </span>
        </div>

        <h1
          className="
            mt-4
            max-w-3xl
            text-4xl
            font-bold
            leading-tight
            text-[#f1f5f9]

            max-md:text-3xl
          "
        >
          I build digital experiences
          <span className="text-[#3b82f6]">
            {" "}
            that feel simple.
          </span>
        </h1>
      </div>

      {/* Main Content */}
      <div
        className="
          grid
          grid-cols-7
          gap-12

          max-lg:gap-8

          max-md:grid-cols-1
          max-md:gap-10
        "
      >
        {/* ================= LEFT ================= */}
        <div
          className="
            col-span-3

            max-md:col-span-1
            max-md:px-4
          "
        >
          {/* Introduction */}
          <div className="max-w-xl">
            <p
              className="
                text-[15px]
                leading-8
                text-[#cbd5e1]

                max-md:text-sm
                max-md:leading-7
              "
            >
              I’m a Front-End Developer passionate about
              building modern, responsive, and high-quality
              web experiences. I specialize in React,
              TypeScript, Tailwind CSS, and modern front-end
              technologies.
            </p>

            <p
              className="
                mt-5
                text-[15px]
                leading-8
                text-[#94a3b8]

                max-md:text-sm
                max-md:leading-7
              "
            >
              I’ve worked professionally on two real-world
              enterprise projects, gaining hands-on
              experience in developing scalable applications,
              solving technical challenges, and collaborating
              within professional development environments.
            </p>

            <p
              className="
                mt-5
                text-[15px]
                leading-8
                text-[#94a3b8]

                max-md:text-sm
                max-md:leading-7
              "
            >
              I’m constantly learning, improving my skills,
              and turning ideas into clean, functional, and
              engaging digital experiences.
            </p>
          </div>

          {/* Stats */}
          <div
            className="
              mt-10
              grid
              grid-cols-3
              max-w-lg
              border-y
              border-white/10
              py-5
            "
          >
            <div className="border-r border-white/10">
              <p
                className="
                  text-2xl
                  font-bold
                  text-[#3b82f6]
                "
              >
                02+
              </p>

              <p
                className="
                  mt-1
                  text-xs
                  text-[#64748b]
                "
              >
                Real Projects
              </p>
            </div>

            <div className="px-5 border-r border-white/10">
              <p
                className="
                  text-2xl
                  font-bold
                  text-[#f1f5f9]
                "
              >
                React
              </p>

              <p
                className="
                  mt-1
                  text-xs
                  text-[#64748b]
                "
              >
                Primary Stack
              </p>
            </div>

            <div className="pl-5">
              <p
                className="
                  text-2xl
                  font-bold
                  text-[#f1f5f9]
                "
              >
                100%
              </p>

              <p
                className="
                  mt-1
                  text-xs
                  text-[#64748b]
                "
              >
                Passion
              </p>
            </div>
          </div>

          {/* What I Do */}
          <div className="mt-10">
            <div className="mb-5 flex items-center gap-3">
              <span className="text-xs font-semibold text-[#3b82f6]">
                WHAT I DO
              </span>

              <span className="h-px flex-1 bg-white/10" />
            </div>

            <div className="space-y-3">
              {/* Item */}
              <div
                className="
                  group
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.02]
                  p-4
                  transition-all
                  duration-300

                  hover:border-[#3b82f6]/30
                  hover:bg-[#3b82f6]/5
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#3b82f6]/10
                    text-[#3b82f6]
                    transition-all
                    duration-300

                    group-hover:bg-[#3b82f6]
                    group-hover:text-white
                  "
                >
                  <Code2 size={19} />
                </div>

                <div>
                  <h3
                    className="
                      text-sm
                      font-semibold
                      text-[#f1f5f9]
                    "
                  >
                    Clean Development
                  </h3>

                  <p
                    className="
                      mt-1
                      text-xs
                      text-[#64748b]
                    "
                  >
                    Maintainable and scalable code.
                  </p>
                </div>
              </div>

              {/* Item */}
              <div
                className="
                  group
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.02]
                  p-4
                  transition-all
                  duration-300

                  hover:border-[#3b82f6]/30
                  hover:bg-[#3b82f6]/5
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#3b82f6]/10
                    text-[#3b82f6]
                    transition-all
                    duration-300

                    group-hover:bg-[#3b82f6]
                    group-hover:text-white
                  "
                >
                  <Layers3 size={19} />
                </div>

                <div>
                  <h3
                    className="
                      text-sm
                      font-semibold
                      text-[#f1f5f9]
                    "
                  >
                    Modern UI
                  </h3>

                  <p
                    className="
                      mt-1
                      text-xs
                      text-[#64748b]
                    "
                  >
                    Responsive and polished interfaces.
                  </p>
                </div>
              </div>

              {/* Item */}
              <div
                className="
                  group
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.02]
                  p-4
                  transition-all
                  duration-300

                  hover:border-[#3b82f6]/30
                  hover:bg-[#3b82f6]/5
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#3b82f6]/10
                    text-[#3b82f6]
                    transition-all
                    duration-300

                    group-hover:bg-[#3b82f6]
                    group-hover:text-white
                  "
                >
                  <BriefcaseBusiness size={19} />
                </div>

                <div>
                  <h3
                    className="
                      text-sm
                      font-semibold
                      text-[#f1f5f9]
                    "
                  >
                    Real Experience
                  </h3>

                  <p
                    className="
                      mt-1
                      text-xs
                      text-[#64748b]
                    "
                  >
                    Experience with real-world products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div
          className="
            col-span-4

            max-md:col-span-1
            max-md:px-4
          "
        >
          {/* Skills */}
          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.02]
              p-6

              md:p-7
            "
          >
            <Skills />
          </div>

          {/* Bottom Quote */}
          <div
            className="
              relative
              mt-5
              overflow-hidden
              rounded-3xl
              border
              border-[#3b82f6]/10
              bg-[#3b82f6]/5
              p-6
            "
          >
            {/* Glow */}
            <div
              className="
                pointer-events-none
                absolute
                -right-16
                -top-16
                h-36
                w-36
                rounded-full
                bg-[#3b82f6]/10
                blur-3xl
              "
            />

            <div className="relative">
              <span
                className="
                  text-3xl
                  font-serif
                  leading-none
                  text-[#3b82f6]
                "
              >
                “
              </span>

              <p
                className="
                  mt-1
                  max-w-xl
                  text-sm
                  leading-7
                  text-[#cbd5e1]
                "
              >
                Good interfaces are not just beautiful.
                They should feel effortless to use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
function Skills() {
  const skillsList = [
    {
      title: "JavaScript",
      level: 90,
      category: "Frontend",
    },
    {
      title: "React",
      level: 90,
      category: "Frontend",
    },
    {
      title: "TypeScript",
      level: 80,
      category: "Language",
    },
    {
      title: "Tailwind CSS",
      level: 90,
      category: "Styling",
    },
  ];

  return (
    <div className="mt-10 max-md:mt-8">
      {/* Header */}
      <div className="mb-5 flex items-end justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <span className="h-px w-6 bg-[#3b82f6]" />

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#3b82f6]
              "
            >
              Expertise
            </span>
          </div>

          <h2
            className="
              text-3xl
              font-bold
              text-white/80
              dark:text-white
              max-md:text-2xl
            "
          >
            Skills
          </h2>
        </div>

        <span
          className="
            hidden
            text-xs
            text-gray-400

            sm:block
          "
        >
          Technologies I work with
        </span>
      </div>

      {/* Skills Grid */}
      <div
        className="
          grid
          grid-cols-2
          gap-3

          max-sm:grid-cols-1
        "
      >
        {skillsList.map((skill) => (
          <div
            key={skill.title}
            className="
              group
              rounded-2xl
              border
              border-gray-200
              bg-white
              p-4
              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:border-[#3b82f6]/30
              hover:shadow-[0_8px_30px_rgba(59,130,246,0.08)]

              dark:border-gray-800
              dark:bg-white/[0.03]
              dark:hover:border-[#3b82f6]/30
              dark:hover:bg-[#3b82f6]/5
            "
          >
            {/* Top */}
            <div className="flex items-center justify-between">
              <div className="flex min-w-0 items-center gap-3">
                {/* Icon / Number */}
                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#3b82f6]/10
                    text-sm
                    font-bold
                    text-[#3b82f6]
                    transition-all
                    duration-300

                    group-hover:bg-[#3b82f6]
                    group-hover:text-white
                  "
                >
                  {skill.title.charAt(0)}
                </div>

                <div className="min-w-0">
                  <h3
                    className="
                      truncate
                      text-sm
                      font-semibold
                      text-gray-900
                      dark:text-gray-100
                    "
                  >
                    {skill.title}
                  </h3>

                  <p
                    className="
                      mt-0.5
                      text-[10px]
                      uppercase
                      tracking-wider
                      text-gray-400
                    "
                  >
                    {skill.category}
                  </p>
                </div>
              </div>

              <span
                className="
                  shrink-0
                  text-xs
                  font-semibold
                  text-[#3b82f6]
                "
              >
                {skill.level}%
              </span>
            </div>

            {/* Progress */}
            <div
              className="
                mt-4
                h-1.5
                w-full
                overflow-hidden
                rounded-full
                bg-gray-100

                dark:bg-gray-800
              "
            >
              <div
                className="
                  h-full
                  rounded-full
                  bg-[#3b82f6]
                  transition-all
                  duration-700
                  group-hover:bg-[#2563eb]
                "
                style={{
                  width: `${skill.level}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
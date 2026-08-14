import Hero from "../components/Hero";
import { useContactModal } from "../context/useContactModal";
import { useHireModal } from "../context/useHireModal";

function Home() {
  const { openModal } = useContactModal();
  const { openHireModal } = useHireModal();

  return (
    <section
      className="
        Container
        h-screen
        flex
        gap-1
        overflow-hidden
        -mt-5

        max-md:h-auto
        max-md:min-h-[calc(100vh-4rem)]
        max-md:overflow-visible
        max-md:flex-col
        max-md:gap-0
        max-md:mt-0
        max-md:pt-4
        max-md:pb-10
      "
    >
      {/* Hero */}
      <div
        className="
          w-2/5

          max-md:w-full
          max-md:h-[330px]
          sm:max-md:h-[380px]
          max-md:shrink-0
        "
      >
        <Hero />
      </div>

      {/* Content */}
      <div
        className="
          w-3/5
          flex
          flex-col
          justify-center
          text-start
          -mt-14

          max-md:w-full
          max-md:items-center
          max-md:text-center
          max-md:mt-0
          max-md:px-4
        "
      >
        {/* Availability */}
        <div
          className="
            mb-5
            flex
            items-center
            gap-2
            text-xs
            font-medium
            uppercase
            tracking-[0.18em]
            text-[#64748b]
          "
        >
          <span className="h-2 w-2 rounded-full bg-[#3b82f6]" />

          <span>Available for opportunities</span>
        </div>

        {/* Intro */}
        <span
          className="
            text-base
            font-medium
            text-[#94a3b8]

            max-md:text-sm
          "
        >
          Hello, I'm
        </span>

        {/* Name */}
        <h1
          className="
            mt-1
            text-6xl
            font-bold
            tracking-tight
            text-[#f1f5f9]

            max-lg:text-5xl
            max-md:text-4xl
            sm:max-md:text-5xl
          "
        >
          Sahar Samadi
        </h1>

        {/* Role */}
        <h2
          className="
            mt-3
            text-2xl
            font-semibold
            text-[#3b82f6]

            max-md:text-xl
            sm:max-md:text-2xl
          "
        >
          Frontend Developer.
        </h2>

        {/* Description */}
        <p
          className="
            mt-6
            max-w-xl
            text-[15px]
            leading-7
            text-[#94a3b8]

            max-md:mt-5
            max-md:text-sm
            max-md:leading-6
          "
        >
          I build modern, responsive, and high-performance
          web experiences with a strong focus on clean
          architecture, thoughtful UI, and exceptional user
          experience.
        </p>

        {/* Tech Stack */}
        <div
          className="
            mt-5
            flex
            items-center
            gap-3
            text-xs
            text-[#64748b]

            max-md:justify-center
          "
        >
          <span>React</span>

          <span className="h-1 w-1 rounded-full bg-[#3b82f6]" />

          <span>TypeScript</span>

          <span className="h-1 w-1 rounded-full bg-[#3b82f6]" />

          <span>Tailwind CSS</span>
        </div>

        {/* Buttons */}
        <div
          className="
            mt-7
            flex
            items-center
            gap-3

            max-md:justify-center
            max-md:flex-wrap
          "
        >
          <button
            onClick={openHireModal}
            className="
              rounded-xl
              bg-[#3b82f6]
              px-5
              py-2.5
              text-sm
              font-semibold
              text-[#0b0f14]

              shadow-[0_8px_25px_rgba(59,130,246,0.15)]

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:bg-[#60a5fa]
              hover:shadow-[0_10px_30px_rgba(59,130,246,0.25)]

              active:translate-y-0
            "
          >
            Hire Me
          </button>

          <button
            onClick={openModal}
            className="
              rounded-xl
              border
              border-white/10
              bg-white/[0.03]
              px-5
              py-2.5
              text-sm
              font-semibold
              text-[#cbd5e1]

              transition-all
              duration-300

              hover:border-[#3b82f6]/30
              hover:bg-[#3b82f6]/5
              hover:text-[#60a5fa]

              active:scale-[0.98]
            "
          >
            Contact Me
          </button>
        </div>

        {/* Bottom text */}
        <div
          className="
            mt-6
            text-xs
            text-[#475569]

            max-md:text-center
          "
        >
          Focused on quality, performance & clean code
        </div>
      </div>
    </section>
  );
}

export default Home;
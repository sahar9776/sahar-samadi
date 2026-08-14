function Hero() {
  return (
    <section className="w-full h-full relative">
      <div
        className="
          w-80 h-80 rounded-full absolute top-1/2 -translate-y-1/2
          left-1/2 -translate-x-1/2
          bg-linear-60 from-white/75 to-[#3b82f6]/25
          shadow shadow-[#3b82f6]/25 z-10

          max-md:w-60
          max-md:h-60
          sm:max-md:w-72
          sm:max-md:h-72
        "
      />

      <img
        src="/images/hero.png"
        alt=""
        className="
          max-w-full absolute top-1/2 -translate-y-1/2
          left-1/2 -translate-x-1/2 z-999

          max-md:w-[320px]
          sm:max-md:w-[320px]
          max-md:max-w-[90%]
        "
      />
    </section>
  );
}

export default Hero;
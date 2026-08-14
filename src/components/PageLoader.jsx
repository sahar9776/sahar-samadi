import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

function PageLoader({ onComplete }) {
  const loaderRef = useRef(null);
  const contentRef = useRef(null);
  const lineLeftRef = useRef(null);
  const lineRightRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete,
      });

      // ورود ظریف لوگو
      tl.fromTo(
        contentRef.current,
        {
          opacity: 0,
          scale: 0.97,
          filter: "blur(6px)",
        },
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power3.out",
        }
      )

        // باز شدن خطوط از مرکز
        .fromTo(
          [lineLeftRef.current, lineRightRef.current],
          {
            scaleX: 0,
          },
          {
            scaleX: 1,
            duration: 0.9,
            ease: "power3.inOut",
          },
          "-=0.45"
        )

        // مکث کوتاه
        .to({}, { duration: 0.45 })

        // محو شدن محتوای لودر
        .to(contentRef.current, {
          opacity: 0,
          scale: 0.985,
          filter: "blur(4px)",
          duration: 0.45,
          ease: "power2.inOut",
        })

        // خود بک‌گراند به آرامی محو می‌شود
        .to(
          loaderRef.current,
          {
            opacity: 0,
            duration: 0.7,
            ease: "power2.inOut",
          },
          "-=0.2"
        );
    }, loaderRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-9999 flex items-center
       justify-center bg-[#0b0f14]"
    >
      <div
        ref={contentRef}
        className="flex items-center"
      >
        {/* Left line */}
        <div
          ref={lineLeftRef}
          className="h-px w-12 origin-right bg-white/15"
        />

        {/* Logo */}
        <div className="mx-5 text-center">
          <div
            className="text-[13px] font-medium tracking-[0.5em] text-white"
          >
            SAHAR
          </div>

          <div
            className="mt-2 text-[8px] font-medium tracking-[0.32em] text-white/35"
          >
            FRONTEND DEVELOPER
          </div>
        </div>

        {/* Right line */}
        <div
          ref={lineRightRef}
          className="h-px w-12 origin-left bg-white/15"
        />
      </div>
    </div>
  );
}

export default PageLoader;
import { ArrowDownToLine } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useContactModal } from "../context/useContactModal";

function DesktopHeader() {
  const navList = [
    {
      title: "home",
      url: "/",
    },
    {
      title: "about",
      url: "/about",
    },
    {
      title: "projects",
      url: "/projects",
    },
    
  ];

  const { pathname } = useLocation();

    const { openModal } = useContactModal();
  
  return (
    <section className="Container h-16 flex items-center justify-between">
      <h3 className="font-bold text-2xl">
        <span className="capitalize">Port</span>
        <span className="text-[#3b82f6]">folio</span>
      </h3>
      <nav className="flex gap-4">
        {navList.map((item, index) => (
          <Link
            to={item.url}
            key={index}
            className={`
          capitalize text-lg
         ${
           pathname === item.url
             ? "border-b borer-[#3b82f6] text-[#3b82f6]"
             : "border-b border-transparent"
         } `}
          >
            {item.title}
          </Link>
        ))}

        {/* Contact Me */}
<button
  onClick={openModal}
  className="
    group
    relative
    overflow-hidden
    rounded-lg
    bg-[#3b82f6]
    px-4
    py-1.5
    text-md
    font-medium
    text-white
    shadow-[0_4px_20px_rgba(59,130,246,0.18)]
    transition-all
    duration-300
    hover:-translate-y-0.5
    hover:bg-[#2563eb]
    hover:shadow-[0_6px_25px_rgba(59,130,246,0.3)]
    active:translate-y-0
  "
>
  <span className="relative z-10 capitalize">
    contact me
  </span>

  <span
    className="
      absolute
      inset-0
      -translate-x-full
      bg-white/10
      transition-transform
      duration-500
      group-hover:translate-x-0
    "
  />
</button>

{/* Download CV */}
<button
href="/Sahar-Samadi-CV.pdf"
  className="
    group
    flex
    items-center
    gap-1.5
    rounded-lg
    border
    border-[#3b82f6]/30
    bg-[#3b82f6]/5
    px-4
    py-1.5
    text-md
    font-medium
    text-[#3b82f6]
    transition-all
    duration-300
    hover:border-[#3b82f6]
    hover:bg-[#3b82f6]/10
    hover:shadow-[0_4px_20px_rgba(59,130,246,0.12)]
    active:scale-[0.98]
  "
>
  <ArrowDownToLine
    strokeWidth={2}
    size={19}
    className="
      transition-transform
      duration-300
      group-hover:translate-y-0.5
    "
  />

  <span>download CV</span>
</button>
      </nav>
    </section>
  );
}

export default DesktopHeader;

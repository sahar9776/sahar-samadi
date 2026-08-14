import { useState } from "react";
import { ArrowDownToLine, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useContactModal } from "../context/useContactModal";

function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openModal } = useContactModal();

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

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="relative">
      <section className="Container h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={closeMenu}>
          <h3 className="font-bold text-2xl">
            <span className="capitalize">Port</span>
            <span className="text-[#3b82f6]">folio</span>
          </h3>
        </Link>

        

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={28} strokeWidth={2} />
          ) : (
            <Menu size={28} strokeWidth={2} />
          )}
        </button>
      </section>

      {/* Mobile Navigation */}
      <div
        className={`
    md:hidden fixed top-16 right-0 w-[82%] max-w-sm h-[calc(100vh-4rem)]
    z-50 dark:bg-[#0d0d0d]/95 backdrop-blur-xl
    border-l border-gray-200/70 dark:border-gray-800/70
    shadow-[-10px_0_40px_rgba(0,0,0,0.08)]
    transition-all duration-300 ease-out
    ${
      isMenuOpen
        ? "translate-x-0 opacity-100"
        : "translate-x-full opacity-0 pointer-events-none"
    }
  `}
      >
        <nav className="h-full flex flex-col p-6">
          {/* Navigation */}
          <div className="flex flex-col gap-2">
            {navList.map((item) => {
              const isActive = pathname === item.url;

              return (
                <Link
                  to={item.url}
                  key={item.url}
                  onClick={closeMenu}
                  className={`
    relative flex items-center justify-between
    px-4 py-3.5
    rounded-xl text-white
    capitalize text-lg
    transition-all duration-200
    ${
      isActive
        ? "bg-[#3b82f6]/10"
        : " dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-[#3b82f6]"
    }
  `}
                >
                  <span>{item.title}</span>

                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Divider */}
          <div className="my-6 h-px bg-gray-200 dark:bg-gray-800" />

          {/* Actions */}
          <div className="flex flex-col gap-3">
            <button
              onClick={() => {
                openModal();
                closeMenu();
              }}
              className="
          w-full
          flex items-center justify-center
          rounded-xl
          py-3
          px-4
          text-base font-medium
          bg-[#3b82f6]
          text-white
          transition-all duration-200
          hover:bg-[#2563eb]
          active:scale-[0.98]
        "
            >
              Contact Me
            </button>

            <button
            href="/Sahar-Samadi-CV.pdf"
              className="
          w-full
          flex items-center justify-center gap-2
          rounded-xl
          py-3
          px-4
          text-base font-medium
          border border-gray-200
          dark:border-gray-700
          bg-gray-50
          dark:bg-white/5
          text-gray-800
          dark:text-gray-200
          transition-all duration-200
          hover:bg-gray-100
          dark:hover:bg-white/10
          active:scale-[0.98]
        "
            >
              <ArrowDownToLine size={19} strokeWidth={2} />
              <span>Download CV</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default MobileHeader;

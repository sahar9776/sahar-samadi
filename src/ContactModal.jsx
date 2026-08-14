import { Mail, Phone, X, Globe } from "lucide-react";
import { useContactModal } from "./context/useContactModal";

function ContactModal() {
  const { isOpen, closeModal } = useContactModal();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
      onClick={closeModal}
    >
      <div
        className="
          relative w-full max-w-md
          overflow-hidden
          rounded-3xl
          border border-white/10
          bg-[#0d1117]
          p-7
          shadow-2xl
          shadow-black/40
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow */}
        <div
          className="
            pointer-events-none
            absolute -right-20 -top-20
            h-40 w-40
            rounded-full
            bg-[#3b82f6]/20
            blur-3xl
          "
        />

        {/* Close */}
        <button
          onClick={closeModal}
          className="
            absolute right-5 top-5
            flex h-9 w-9 items-center justify-center
            rounded-full
            border border-white/10
            bg-white/5
            text-gray-400
            transition-all duration-200
            hover:border-[#3b82f6]/40
            hover:bg-[#3b82f6]/10
            hover:text-[#3b82f6]
          "
          aria-label="Close"
        >
          <X size={19} />
        </button>

        {/* Header */}
        <div className="relative mb-8">
          <span className="mb-2 block text-sm font-medium uppercase tracking-[0.2em] text-[#3b82f6]">
            Get in touch
          </span>

          <h2 className="text-3xl font-bold text-white">
            Contact Me
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-400">
            Have a project in mind or want to work together?
            Feel free to reach out.
          </p>
        </div>

        {/* Contact Items */}
        <div className="relative space-y-3">
          {/* Phone */}
          <a
            href="tel:+989910733897"
            className="
              group flex items-center gap-4
              rounded-2xl
              border border-white/10
              bg-white/3
              p-4
              transition-all duration-200
              hover:border-[#3b82f6]/40
              hover:bg-[#3b82f6]/5
            "
          >
            <div
              className="
                flex h-11 w-11 shrink-0 items-center justify-center
                rounded-xl
                bg-[#3b82f6]/10
                text-[#3b82f6]
                transition-colors
                group-hover:bg-[#3b82f6]
                group-hover:text-white
              "
            >
              <Phone size={20} />
            </div>

            <div>
              <span className="block text-xs text-gray-500">
                Phone
              </span>

              <span className="text-sm text-gray-200">
                +98 991 073 3897
              </span>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:sahar.samadi1376@gmail.com"
            className="
              group flex items-center gap-4
              rounded-2xl
              border border-white/10
              bg-white/3
              p-4
              transition-all duration-200
              hover:border-[#3b82f6]/40
              hover:bg-[#3b82f6]/5
            "
          >
            <div
              className="
                flex h-11 w-11 shrink-0 items-center justify-center
                rounded-xl
                bg-[#3b82f6]/10
                text-[#3b82f6]
                transition-colors
                group-hover:bg-[#3b82f6]
                group-hover:text-white
              "
            >
              <Mail size={20} />
            </div>

            <div className="min-w-0">
              <span className="block text-xs text-gray-500">
                Email
              </span>

              <span className="block truncate text-sm text-gray-200">
                sahar.samadi1376@gmail.com
              </span>
            </div>
          </a>

          {/* Portfolio */}
          <a
            href="/"
            className="
              group flex items-center gap-4
              rounded-2xl
              border border-white/10
              bg-white/3
              p-4
              transition-all duration-200
              hover:border-[#3b82f6]/40
              hover:bg-[#3b82f6]/5
            "
          >
            <div
              className="
                flex h-11 w-11 shrink-0 items-center justify-center
                rounded-xl
                bg-[#3b82f6]/10
                text-[#3b82f6]
                transition-colors
                group-hover:bg-[#3b82f6]
                group-hover:text-white
              "
            >
              <Globe size={20} />
            </div>

            <div>
              <span className="block text-xs text-gray-500">
                Portfolio
              </span>

              <span className="text-sm text-gray-200">
                sahar-portfolio
              </span>
            </div>
          </a>
        </div>

        {/* Bottom accent */}
        <div className="mt-7 h-px w-full bg-gradient-to-r from-transparent via-[#3b82f6]/50 to-transparent" />

        <p className="mt-4 text-center text-xs text-gray-500">
          Let's build something great together.
        </p>
      </div>
    </div>
  );
}

export default ContactModal;
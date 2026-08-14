import { useState } from "react";
import {
  X,
  ArrowRight,
  Globe,
  Layout,
  Code2,
  Sparkles,
  Mail,
} from "lucide-react";

import { useHireModal } from "../context/useHireModal";

function HireModal() {
  const { isOpen, closeHireModal } = useHireModal();

  const [selectedService, setSelectedService] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [email, setEmail] = useState("");

  if (!isOpen) return null;

  const services = [
    {
      id: "web",
      title: "Web Development",
      icon: Globe,
    },
    {
      id: "landing",
      title: "Landing Page",
      icon: Layout,
    },
    {
      id: "frontend",
      title: "Frontend Development",
      icon: Code2,
    },
    {
      id: "other",
      title: "Other",
      icon: Sparkles,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !selectedService ||
      !projectDescription.trim() ||
      !email.trim()
    ) {
      return;
    }

    const subject = encodeURIComponent(
      `Project Inquiry - ${selectedService}`
    );

    const body = encodeURIComponent(
      `Hello Sahar,

I would like to work with you.

Project Type:
${selectedService}

Project Description:
${projectDescription}

My Email:
${email}

Best regards`
    );

    window.location.href =
      `mailto:sahar.samadi1376@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div
      className="
        fixed inset-0 z-[60]
        flex items-center justify-center
        overflow-x-hidden
        bg-black/75
        px-4 py-6
        backdrop-blur-md
      "
      onClick={closeHireModal}
    >
      <div
        className="
          relative
          mx-auto
          max-h-[90vh]
          w-full
          max-w-xl
          overflow-hidden
          rounded-3xl
          border border-white/10
          bg-[#0d1117]
          shadow-2xl
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow */}
        <div
          className="
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-52
            w-52
            rounded-full
            bg-[#3b82f6]/20
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-24
            -left-24
            h-52
            w-52
            rounded-full
            bg-[#3b82f6]/10
            blur-3xl
          "
        />

        {/* Scrollable Content */}
        <div
          className="
            relative
            max-h-[90vh]
            overflow-y-auto
            overflow-x-hidden
            p-6
            md:p-8
          "
        >
          {/* Close */}
          <button
            type="button"
            onClick={closeHireModal}
            className="
              absolute
              right-5
              top-5
              z-10
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              text-gray-400
              transition-all
              duration-200
              hover:border-[#3b82f6]/40
              hover:bg-[#3b82f6]/10
              hover:text-[#3b82f6]
            "
            aria-label="Close"
          >
            <X size={18} />
          </button>

          {/* Header */}
          <div className="relative mb-7 pr-12">
            <span
              className="
                mb-2
                block
                text-xs
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[#3b82f6]
              "
            >
              Let's work together
            </span>

            <h2 className="text-3xl font-bold text-white">
              Have a project in mind?
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              Tell me a little about your project and let's
              create something great together.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="relative space-y-7"
          >
            {/* Step 01 */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="text-xs font-semibold text-[#3b82f6]">
                  01
                </span>

                <span className="text-sm font-medium text-gray-300">
                  What can I help you with?
                </span>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {services.map((service) => {
                  const Icon = service.icon;

                  const isSelected =
                    selectedService === service.title;

                  return (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() =>
                        setSelectedService(service.title)
                      }
                      className={`
                        group
                        flex
                        min-w-0
                        items-center
                        gap-3
                        rounded-2xl
                        border
                        p-4
                        text-left
                        transition-all
                        duration-200
                        ${
                          isSelected
                            ? "border-[#3b82f6] bg-[#3b82f6]/10"
                            : "border-white/10 bg-white/[0.03] hover:border-[#3b82f6]/40 hover:bg-[#3b82f6]/5"
                        }
                      `}
                    >
                      <div
                        className={`
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          transition-all
                          duration-200
                          ${
                            isSelected
                              ? "bg-[#3b82f6] text-white"
                              : "bg-[#3b82f6]/10 text-[#3b82f6] group-hover:bg-[#3b82f6] group-hover:text-white"
                          }
                        `}
                      >
                        <Icon size={19} />
                      </div>

                      <span
                        className={`
                          min-w-0
                          text-sm
                          font-medium
                          ${
                            isSelected
                              ? "text-white"
                              : "text-gray-300"
                          }
                        `}
                      >
                        {service.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 02 */}
            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="text-xs font-semibold text-[#3b82f6]">
                  02
                </span>

                <span className="text-sm font-medium text-gray-300">
                  Tell me about your project
                </span>
              </div>

              <textarea
                value={projectDescription}
                onChange={(e) =>
                  setProjectDescription(e.target.value)
                }
                placeholder="Briefly describe your idea, project or what you'd like to build..."
                rows={4}
                className="
                  block
                  w-full
                  max-w-full
                  resize-none
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-4
                  text-sm
                  text-white
                  outline-none
                  placeholder:text-gray-600
                  transition-all
                  duration-200
                  focus:border-[#3b82f6]/60
                  focus:bg-[#3b82f6]/5
                "
              />
            </div>

            {/* Step 03 */}
            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="text-xs font-semibold text-[#3b82f6]">
                  03
                </span>

                <span className="text-sm font-medium text-gray-300">
                  How can I reach you?
                </span>
              </div>

              <div className="relative">
                <Mail
                  size={18}
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-gray-600
                  "
                />

                <input
                  type="email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  placeholder="your@email.com"
                  className="
                    block
                    w-full
                    max-w-full
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    py-3.5
                    pl-11
                    pr-4
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-gray-600
                    transition-all
                    duration-200
                    focus:border-[#3b82f6]/60
                    focus:bg-[#3b82f6]/5
                  "
                />
              </div>
            </div>

            {/* Submit */}
            <div className="pt-1">
              <button
                type="submit"
                disabled={
                  !selectedService ||
                  !projectDescription.trim() ||
                  !email.trim()
                }
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  bg-[#3b82f6]
                  px-5
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-200
                  hover:bg-[#2563eb]
                  active:scale-[0.98]
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                "
              >
                <span>Send Project Inquiry</span>

                <ArrowRight
                  size={18}
                  className="
                    transition-transform
                    duration-200
                    group-hover:translate-x-1
                  "
                />
              </button>

              <p className="mt-3 text-center text-xs text-gray-600">
                Your email client will open with the project
                details.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HireModal;
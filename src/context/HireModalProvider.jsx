import { useState } from "react";
import { HireModalContext } from "./HireModalContext";

export function HireModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openHireModal = () => {
    setIsOpen(true);
  };

  const closeHireModal = () => {
    setIsOpen(false);
  };

  return (
    <HireModalContext.Provider
      value={{
        isOpen,
        openHireModal,
        closeHireModal,
      }}
    >
      {children}
    </HireModalContext.Provider>
  );
}
import { useContext } from "react";
import { HireModalContext } from "./HireModalContext";

export function useHireModal() {
  const context = useContext(HireModalContext);

  if (!context) {
    throw new Error(
      "useHireModal must be used inside HireModalProvider"
    );
  }

  return context;
}
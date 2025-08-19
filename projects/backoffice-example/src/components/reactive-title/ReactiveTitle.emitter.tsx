import React from "react";
import ReactDOM from "react-dom";

type ReactiveTitleEmitterProps = {
  children: React.ReactNode;
};

export function ReactiveTitleEmitter({ children }: ReactiveTitleEmitterProps) {
  const destination = document.getElementById("testing-heading-portal");

  if (!destination) {
    throw new Error(
      "Destination element not found: testing-heading-portal. Please use the ReactiveTitle.Listener component to create it."
    );
  }

  return ReactDOM.createPortal(children, destination);
}

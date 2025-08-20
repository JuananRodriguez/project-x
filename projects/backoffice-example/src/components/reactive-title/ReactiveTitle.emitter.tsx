import React from "react";
import ReactDOM from "react-dom";

type ReactiveTitleEmitterProps = {
  children: React.ReactNode;
};

export function ReactiveTitleEmitter({ children }: ReactiveTitleEmitterProps) {
  const [destination, setDestination] = React.useState<HTMLElement | null>(
    null
  );

  React.useEffect(() => {
    const destinationElement = document.getElementById(
      "testing-heading-portal"
    );

    if (!destinationElement) {
      throw new Error(
        "No element with id 'testing-heading-portal' found in the document."
      );
    }

    setDestination(destinationElement);
  }, []);

  return destination ? ReactDOM.createPortal(children, destination) : null;
}

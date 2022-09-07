import { createPortal } from "react-dom";

import CrossIcon from "../assets/cross.svg";

import { useEffect } from "react";

interface IModal {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}

export default function Modal({ children, isOpen, handleClose }: IModal) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    if (!isOpen) {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <ReactPortal>
      <div
        className="fixed top-0 left-0 z-[100] h-screen w-screen backdrop-blur-sm"
        onClick={handleClose}
      >
        <div className="max-w-[600px] px-0 py-0 h-full  sm:py-4 mx-auto">
          <div
            className="h-full overflow-y-auto rounded-lg border-bg-light bg-bg-dark px-5 py-2 pb-6 shadow sm:border"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              onClick={handleClose}
              className="ml-auto -mr-2 w-fit cursor-pointer p-2"
            >
              <CrossIcon width={25} height={25} />
            </div>
            <div className="flex flex-col gap-4">{children}</div>
          </div>
        </div>
      </div>
    </ReactPortal>
  );
}

interface IReactPortal {
  children: React.ReactNode;
}

export function ReactPortal({ children }: IReactPortal) {
  if (document) {
    const element = document.getElementById("portal-root");
    if (!element) return null;
    return createPortal(children, element);
  }
  return null;
}

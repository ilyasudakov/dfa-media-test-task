import { useEffect } from "react";
import SidemenuList from "./SidemenuList";

export default function SidemenuMobile() {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, []);
  return (
    <nav className="text-[1rem] z-3">
      <SidemenuList />
    </nav>
  );
}

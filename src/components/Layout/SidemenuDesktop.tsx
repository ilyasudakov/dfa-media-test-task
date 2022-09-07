import SidemenuList from "./SidemenuList";

export default function SidemenuDesktop() {
  return (
    <nav className="hidden md:block w-[200px] fixed top-[100px] left-0 text-[0.6rem]">
      <SidemenuList />
    </nav>
  );
}

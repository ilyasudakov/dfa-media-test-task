import { useState } from "react";

import useWindowDimensions from "../../hooks/useWindowDimensions";

import Button from "../Button";
import SidemenuMobile from "./SidemenuMobile";

import CrossIcon from "../../assets/cross.svg";

export default function Header() {
  const { width } = useWindowDimensions();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="h-[60px] md:h-[100px] w-full flex items-center fixed top-0 bg-bg-dark px-4 lg:px-10 z-50">
      {showMenu && width && width < 1024 && (
        <MobileMenu hideMenu={() => setShowMenu(false)} />
      )}
      {width && width < 1024 && (
        <div
          onClick={() => setShowMenu(true)}
          className="flex flex-col gap-[6px] cursor-pointer p-1"
        >
          <span className="block w-[30px] h-[2px] bg-secondary-light-grey"></span>
          <span className="block w-[30px] h-[2px] bg-secondary-light-grey"></span>
          <span className="block w-[30px] h-[2px] bg-secondary-light-grey"></span>
        </div>
      )}
      <ul className="flex gap-4 text-[0.6rem] items-center px-6 lg:pl-[200px]">
        <li className="cursor-pointer">Мероприятия</li>
        <li>
          <Button>Войти</Button>
        </li>
      </ul>
    </header>
  );
}

const MobileMenu = ({ hideMenu }: { hideMenu: () => void }) => {
  return (
    <div className="flex flex-col p-4 fixed top-0 left-0 bg-bg-dark w-screen h-screen z-50">
      <div className="cursor-pointer p-2 ml-auto" onClick={hideMenu}>
        <CrossIcon />
      </div>
      <div className="flex mt-4">
        <SidemenuMobile />
      </div>
    </div>
  );
};

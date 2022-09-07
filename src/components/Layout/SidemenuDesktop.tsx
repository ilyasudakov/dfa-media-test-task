import Link from "next/link";

import HomeIcon from "../../assets/home.svg";
import ActivityIcon from "../../assets/activity.svg";
import BloggersIcon from "../../assets/bloggers.svg";
import HeartIcon from "../../assets/heart.svg";
import StructureIcon from "../../assets/structure.svg";
import StoreIcon from "../../assets/store.svg";
import MaraphonIcon from "../../assets/maraphon.svg";
import LandingsIcon from "../../assets/landings.svg";

const NAV = [
  { text: "Дашборд", icon: <HomeIcon /> },
  { text: "Биржа активности", icon: <ActivityIcon /> },
  { text: "Биржа блогеров", icon: <BloggersIcon /> },
  { text: "Взаимопиар", icon: <HeartIcon /> },
  { text: "Моя структура", icon: <StructureIcon /> },
  { text: "Магазин", icon: <StoreIcon /> },
  { text: "Марафон", icon: <MaraphonIcon /> },
  { text: "Лендинги", icon: <LandingsIcon /> },
];

export default function SidemenuDesktop() {
  return (
    <nav
      className="hidden md:block w-[200px] fixed top-[100px] left-0 
  text-[0.6rem] text-secondary-light-grey"
    >
      <ul className="flex flex-col gap-4">
        {NAV.map(({ text, icon }) => (
          <li key={text}>
            <Link href={`/${text}`}>
              <div className="flex gap-4 pl-6 items-center">
                <div className="flex items-center justify-center w-[1.5rem]">
                  {icon}
                </div>
                <span className="">{text}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

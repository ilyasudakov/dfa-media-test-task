import Link from "next/link";

import HomeIcon from "../../assets/home.svg";
import ActivityIcon from "../../assets/activity.svg";
import BloggersIcon from "../../assets/bloggers.svg";
import HeartIcon from "../../assets/heart.svg";
import StructureIcon from "../../assets/structure.svg";
import StoreIcon from "../../assets/store.svg";
import MaraphonIcon from "../../assets/maraphon.svg";
import LandingsIcon from "../../assets/landings.svg";

type NavType = {
  text: string;
  icon: (props: { className: string }) => React.ReactNode;
  isActive?: boolean;
};

const NAV: NavType[] = [
  { text: "Дашборд", icon: (props) => <HomeIcon {...props} /> },
  { text: "Биржа активности", icon: (props) => <ActivityIcon {...props} /> },
  { text: "Биржа блогеров", icon: (props) => <BloggersIcon {...props} /> },
  { text: "Взаимопиар", icon: (props) => <HeartIcon {...props} /> },
  {
    text: "Моя структура",
    icon: (props) => <StructureIcon {...props} />,
    isActive: true,
  },
  { text: "Магазин", icon: (props) => <StoreIcon {...props} /> },
  { text: "Марафон", icon: (props) => <MaraphonIcon {...props} /> },
  { text: "Лендинги", icon: (props) => <LandingsIcon {...props} /> },
];

export default function SidemenuList() {
  return (
    <ul className="flex flex-col gap-4 text-secondary-light-grey">
      {NAV.map(({ text, icon, isActive }) => (
        <li key={text}>
          <Link href={`/`}>
            <div
              className={
                "relative flex gap-4 pl-6 items-center cursor-pointer " +
                (isActive
                  ? "before:w-1 before:h-full before:bg-secondary before:absolute before:left-2"
                  : " ")
              }
            >
              <div className="flex items-center justify-center w-[1.5rem]">
                {icon({ className: isActive ? "fill-secondary" : "" })}
              </div>
              <span className={isActive ? "text-white" : ""}>{text}</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

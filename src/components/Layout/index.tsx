import useWindowDimensions from "../../hooks/useWindowDimensions";
import Header from "./Header";
import SidemenuDesktop from "./SidemenuDesktop";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { width } = useWindowDimensions();
  return (
    <div className="h-full">
      <Header />
      <div className="flex h-full">
        {width && width >= 1024 && <SidemenuDesktop />}
        <div
          className="lg:ml-[200px] mt-[60px] md:mt-[100px] lg:mr-4 rounded-tl-[50px] rounded-tr-[50px] 
        bg-bg-light h-full min-h-[calc(100%-100px)] w-full p-6 lg:px-[6rem]"
        >
          {children}
        </div>
      </div>
    </div>
  );
}

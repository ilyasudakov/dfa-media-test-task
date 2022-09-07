import Header from "./Header";
import SidemenuDesktop from "./SidemenuDesktop";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full">
      <Header />
      <div className="flex h-full">
        <SidemenuDesktop />
        <div
          className="md:ml-[200px] md:mr-4 rounded-tl-[50px] rounded-tr-[50px] 
        bg-bg-light min-h-full w-full p-4"
        >
          {children}
        </div>
      </div>
    </div>
  );
}

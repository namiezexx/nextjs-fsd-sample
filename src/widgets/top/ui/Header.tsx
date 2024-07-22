import LoginButton from "@/app/faeture/login/LoginButton";
import { Icon } from "@/shared/ui/Icon";

export function Header() {
  return (
    <header className="top-0 left-0 right-0 h-20 z-10 bg-green-50">
      <div className="pt-8 px-8 flex justify-between items-center">
        <h1 className="font-['Sandoll_Nemony2'] font-normal text-xl text-black">
          세모클래스
        </h1>
        <LoginButton />
      </div>
    </header>
  );
}

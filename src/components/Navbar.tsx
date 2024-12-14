import { useScrollVar } from "@/hooks/useScrollVar";
import Link from "next/link";

export const Navbar = () => {
  const scroll = useScrollVar();
  return (
    <nav
      className={
        "top-0 w-full transition font-orbitron ease-in-out " +
        (scroll < 10 ? "absolute top-0 h-10" : "sticky top-0 bg-white/5 h-14")
      }
    >
      <div className="flex justify-between max-w-6xl mx-auto items-center h-full">
        <div className="flex-1">GracjanPW</div>
        <div className="space-x-4">
          <Link href={"#"}>Home</Link>
          <Link href={"#"}>Projects</Link>
          <Link href={"#"}>Experience</Link>
        </div>
        
      </div>
    </nav>
  );
};

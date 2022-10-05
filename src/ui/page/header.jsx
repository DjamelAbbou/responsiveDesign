import { useRouter } from "next/router";
import Link from "next/link";

export default function Header() {
  const { pathname } = useRouter();
  return (
    <div className="flex items-center">
      <div className="text-[42px] font-bold ">
        devmentor<span className="text-red-500">live</span>
      </div>

      <div className="flex gap-10 text-[28px] w-full justify-center">
        <div className="cursor-pointer">
          <Link href="/">
            <a className={`${pathname === "/" ? "bg-red-500" : ""}`}>
              live mentorship
            </a>
          </Link>
        </div>
        <div className="cursor-pointer">
          <Link href="/livestreaming">
            <a
              className={`${pathname === "/livestreaming" ? "bg-red-500" : ""}`}
            >
              live streaming
            </a>
          </Link>
        </div>
        <div className="cursor-pointer">
          <Link href="/videotutorials">
            <a
              className={`${
                pathname === "/videotutorials" ? "bg-red-500" : ""
              }`}
            >
              video tutorials
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

import { useRouter } from "next/router";
import Link from "next/link";

export default function Header() {
  const { pathname } = useRouter();
  return (
    <header className="sm:flex items-center">
      <div className="text-[42px] font-bold ">
        devmentor<span className="text-red-500">live</span>
      </div>

      <div className="flex sm:gap-10 sm:text-[28px] w-full justify-center">
        {[
          {
            href: "/",
            label: "live mentorship",
          },
          {
            href: "/livestreaming",
            label: "live mentorship",
          },
          {
            href: "/videotutorials",
            label: "video tutorials",
          },
        ].map(({ href, label }, index) => {
          return (
            <div className="cursor-pointer" key={index}>
              <Link {...{ href }}>
                <a
                  className={`block whitespace-nowrap -mr-4 px-6 py-1 ${
                    pathname === href ? "bg-red-500 rounded-sm" : ""
                  }`}
                >
                  {label}
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </header>
  );
}

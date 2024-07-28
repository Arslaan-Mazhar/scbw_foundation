"use client";
import Link from "next/link";
import { NAV_LINKS } from "../../constants";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
      <ul className="md:flex-between flex w-full flex-col items-start gap-3 md:flex-row  ">
        {NAV_LINKS.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              href={link.href}
              key={link.key}
              className={`${
                isActive && "text-primary-500"
              } flexCenter regular-16 p-medium-16 whitespace-nowrap transition-all hover:font-bold`}
            >
              {link.label}
            </Link>
          );
        })}
      </ul>
  );
};

export default Navbar;

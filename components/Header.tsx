"use client";

import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="flex w-full gap-5 mx-auto justify-between items-center pt-7 font-ibm-plex-sans">
      <div className="text-white font-bold text-xl flex items-center gap-2">
        <Image src="/icons/logo.svg" alt="Logo" width={24} height={24} />
        <p className="font-ibm-plex-sans">BookWise</p>
      </div>

      <div>
        <ul className="flex gap-5 items-center text-white">
          <li>
            <Link
              href="/"
              className={cn(
                "",
                pathname === "/" ? "text-[#EED1AC]" : "text-[##D6E0FF]"
              )}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/search"
              className={cn(
                "",
                pathname === "/search" ? "text-[#EED1AC]" : "text-[##D6E0FF]"
              )}>
              Search
            </Link>
          </li>
          <li>
            <Link href="/account">
              <div className="flex items-center gap-1">
                <Avatar>
                  {/* <AvatarImage
                    src="/icons/user.svg"
                    alt="av"
                    height={16}
                    width={16}
                  /> */}
                  <AvatarFallback color="#ff0000">AH</AvatarFallback>
                </Avatar>
                <h2 className="text-white font-semibold">Adrian</h2>
              </div>
            </Link>
          </li>
          <li>
            <Image
              src="/icons/logout.svg"
              alt="logout"
              height={20}
              width={20}
            />{" "}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

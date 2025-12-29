"use client";
import { adminSideBarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

const Sidebar = () => {
  const pathname = usePathname(); // Placeholder for actual pathname logic
  return (
    <main className="flex flex-col h-full w-80 bg-white p-4 justify-between">
      <section className="flex flex-col px-4">
        <div className="flex w-full h-full items-center py-4 gap-1">
          <Image
            src="/icons/admin/logo.svg"
            alt="logo"
            width={40}
            height={40}
            className="object-fill"
          />
          <p className="font-bold font-ibm-plex-sans text-3xl text-[#25388C]">
            BookWise
          </p>
        </div>

        <div className="border-t border-dashed border-gray-300 w-full" />

        <div className="flex flex-col w-full mt-4">
          <ul className="flex flex-col w-full">
            {adminSideBarLinks.map((link) => (
              <li key={link.route} className="w-full">
                <Link href={link.route}>
                  <div
                    className={cn(
                      "w-full flex items-center gap-2 py-4 px-2 cursor-pointer",
                      pathname === link.route
                        ? "bg-[#25388C] text-white rounded-lg"
                        : "text-[#3A354E]"
                    )}>
                    <Image
                      src={link.img}
                      alt={link.text}
                      height={24}
                      width={24}
                      className={cn(
                        pathname === link.route
                          ? "text-white"
                          : "text-[#8C8E98]"
                      )}
                    />
                    <p className="font-medium font-ibm-plex-sans">
                      {link.text}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <div className="w-full flex border-2 border-[#EDF1F1] rounded-full p-2 bg-[#ffffff] justify-between items-center gap-1">
        <div className="w-12 h-12 rounded-full bg-[#FAD2BC] ">
          <Image
            src="/icons/admin/avatar.jpg"
            alt="user"
            width={36}
            height={36}
            className="object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col ">
          <p className="font-semibold font-ibm-plex-sans">Adrian Hajdin</p>
          <p className="font-ibm-plex-sans font-medium text-[#8D8D8D]">
            adrian@jsmastery.pro
          </p>
        </div>
        <Button className="bg-transparent">
          <Image
            src="/icons/admin/logout.svg"
            alt="logout"
            width={24}
            height={24}
          />
        </Button>
      </div>
    </main>
  );
};

export default Sidebar;

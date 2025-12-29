import { RoleMenu } from "@/components/RoleMenu";
import { Button } from "@/components/ui/button";

import { UserBarProps } from "@/types";
import { ArrowDownUp } from "lucide-react";
import Image from "next/image";

export const UserBar = ({
  name,
  email,
  joiningDate,
  role,
  booksBorrowed,
  universityIdNo,
  universityIdCard,
}: UserBarProps) => {
  return (
    <div className="flex justify-between border-b border-b-[#f8f8f8]">
      <div className="flex-3 text-sm font-medium text-nowrap py-3 px-2">
        <div className="flex flex-col">
          <p className="font-ibm-plex-sans font-medium">{name}</p>
          <p className="font-ibm-plex-sans text-slate-500 text-sm">{email}</p>
        </div>
      </div>
      <div className="flex-1 text-sm font-medium text-nowrap py-3 px-2">
        {joiningDate}
      </div>
      <div className="flex-1 text-sm font-medium text-nowrap py-3 px-2">
        <RoleMenu isUser={role === "USER"} />
      </div>
      <div className="flex-1 text-sm font-medium text-nowrap py-3 px-2">
        {booksBorrowed}
      </div>
      <div className="flex-1 text-sm font-medium text-nowrap py-3 px-2">
        {universityIdNo}
      </div>
      <div className="flex-1 text-sm font-medium text-nowrap py-3 px-2 0089F1 cursor-pointer">
        <a href={universityIdCard} className="text-[#0089F1]">
          View ID Card
        </a>
      </div>
      <div className="flex-1 text-sm font-medium text-nowrap py-3 px-2 w-full flex justify-center">
        <Button className="bg-transparent hover:bg-[#fae7e7]  cursor-pointer p-1">
          <Image
            src="/icons/admin/trash.svg"
            alt="Action"
            width={20}
            height={20}
          />
        </Button>
      </div>
    </div>
  );
};

const page = () => {
  return (
    <section className="flex flex-col gap-3 m-4 p-4 bg-white rounded-lg">
      <div className="flex justify-between">
        <h2 className="font-ibm-plex-sans text-2xl font-semibold text-[#1E293B]">
          All Users
        </h2>
        <Button className="bg-transparent text-slate-500">
          A-Z
          <ArrowDownUp />
        </Button>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between ">
          <div className="flex-3 text-xs text-nowrap bg-[#F8F8FF] py-2 px-2">
            Name
          </div>
          <div className="flex-1 text-xs text-nowrap bg-[#F8F8FF] py-2 px-2">
            Date Joined
          </div>
          <div className="flex-1 text-xs text-nowrap bg-[#F8F8FF] py-2 px-2">
            Role
          </div>
          <div className="flex-1 text-xs text-nowrap bg-[#F8F8FF] py-2 px-2">
            Books Borrowed
          </div>
          <div className="flex-1 text-xs text-nowrap bg-[#F8F8FF] py-2 px-2">
            University Id No
          </div>
          <div className="flex-1 text-xs text-nowrap bg-[#F8F8FF] py-2 px-2">
            University ID Card
          </div>
          <div className="flex-1 text-xs text-nowrap bg-[#F8F8FF] py-2 px-2 w-full flex justify-center">
            Action
          </div>
        </div>
        <UserBar
          name="John Doe"
          email="john@example.com"
          joiningDate="2023-01-01"
          role="USER"
          booksBorrowed="3"
          universityIdNo="U123456"
          universityIdCard="Card123"
        />
        <UserBar
          name="Jason Mamoa"
          email="jason@example.com"
          joiningDate="2023-01-01"
          role="ADMIN"
          booksBorrowed="9"
          universityIdNo="U12783456"
          universityIdCard="Card123"
        />
      </div>
    </section>
  );
};

export default page;

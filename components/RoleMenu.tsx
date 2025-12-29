"use client";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

type Checked = DropdownMenuCheckboxItemProps["checked"];
export const RoleMenu = ({ isUser }: { isUser: boolean }) => {
  const [isSelectedUser, setSelectedIsUser] = React.useState<Checked>(isUser);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className={cn(
            "py-0 h-7 px-2 rounded-full text-sm font-medium",
            isSelectedUser
              ? "bg-[#FDF2FA] text-[#C11574]"
              : "bg-[#ECFDF3] text-[#027A48]"
          )}>
          {isSelectedUser ? "USER" : "ADMIN"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuCheckboxItem
          checked={isSelectedUser}
          onCheckedChange={() => {
            let change = confirm("Do you want to change the role?");
            if (!change) return;
            setSelectedIsUser(true);
          }}>
          USER
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={!isSelectedUser}
          onCheckedChange={() => {
            let change = confirm("Do you want to change the role?");
            if (!change) return;
            setSelectedIsUser(false);
          }}>
          ADMIN
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

import { Input } from "@/components/ui/input";
import Sidebar from "@/components/Sidebar";
import { redirect } from "next/navigation";
import Image from "next/image";

const layout = ({ children }: { children: React.ReactNode }) => {
  const isAdmin = true; // Replace with actual admin check logic
  if (!isAdmin) {
    redirect("/");
  }
  return (
    <main className="flex w-screen h-screen">
      <Sidebar />
      <section className="gap-3 flex flex-col h-screen w-full rounded-lg bg-[#F8F8FF] border-2 border-[#EDF1F1] px-4 py-2">
        <div className="flex justify-between px-4 py-2">
          <div className="flex flex-col">
            <h1 className="font-semibold text-xl font-ibm-plex-sans text-[#1E293B]">
              Welcome, Admin
            </h1>
            <p className="font-ibm-plex-sans text-[#64748B] font-medium">
              Monitor all of your projects and tasks here
            </p>
          </div>
          <Input
            className="w-1/3 h-full"
            placeholder="Search users, books by title, author, or genre...."
          />
        </div>
        {children}
      </section>
    </main>
  );
};

export default layout;

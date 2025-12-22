"use client";

import AuthForm from "@/components/AuthForm";
import { redirect, useRouter } from "next/navigation";
import { toast } from "sonner";
import z from "zod";
type Props = { success: boolean; error?: string | undefined };

const signUpSchema = z.object({
  fullName: z.string().nonempty(),
  email: z.string().email().nonempty(),
  universityId: z.coerce.number(),
  universityCard: z.string().nonempty("University Id card is required"),
  password: z.string().min(8),
});

const page = () => {
  const router = useRouter();
  const signUpWithCredentials = async (data: {
    fullName: string;
    email: string;
    universityId: number;
    universityCard: string;
    password: string;
  }) => {
    try {
      const response = await fetch("/api/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: data.fullName,
          email: data.email,
          universityId: data.universityId,
          universityCard: data.universityCard,
          password: data.password,
        }),
      });

      // console.log(response);
      const resData = await response.json();

      if (!response.ok) {
        toast.error(resData.message || "Something went wrong");
        return { success: false, error: resData.message };
      }

      toast.success(resData.message || "Account created successfully");

      router.push(resData.redirectUrl || "#");
      return { success: true };
    } catch (error) {
      console.log(error);
    } finally {
      return new Promise<Props>((resolve, reject) =>
        resolve({ success: true, error: "string" })
      );
    }
    // const resData = await response.json();
    // toast(resData.message);
    // console.log(data);
    // redirect(resData.redirectUrl);
  };
  return (
    <AuthForm
      schema={signUpSchema}
      defaultValues={{
        fullName: "",
        email: "",
        password: "",
        universityId: 0,
        universityCard: "",
      }}
      type="SIGN_UP"
      onSubmit={signUpWithCredentials}
    />
  );
};

export default page;

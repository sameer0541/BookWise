"use client";

import AuthForm from "@/components/AuthForm";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import z from "zod";

type Props = { success: boolean; error?: string | undefined };

const signInSchema = z.object({
  email: z.email().nonempty(),
  password: z.string().min(8),
});

const page = () => {
  const router = useRouter();
  const signInWithCredentials = async (data: {
    email: string;
    password: string;
  }) => {
    try {
      const response = await fetch("/api/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      const resData = await response.json();
      if (!response.ok) {
        toast.error(resData.message || "Something went wrong");
        return { success: false, error: resData.message };
      }

      toast.success(resData.message || "Sign-in successful");

      router.push(resData.redirectUrl || "#");
      return { success: true };
    } catch (error) {
      console.error("Sign-in Error:", error);
    } finally {
      return new Promise<Props>((resolve, reject) =>
        resolve({ success: true, error: "string" })
      );
    }
  };
  return (
    <AuthForm
      schema={signInSchema}
      defaultValues={{ email: "", password: "" }}
      type="SIGN_IN"
      onSubmit={signInWithCredentials}
    />
  );
};

export default page;

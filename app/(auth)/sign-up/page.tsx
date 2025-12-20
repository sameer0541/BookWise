"use client";

import AuthForm from "@/components/AuthForm";
import { University } from "lucide-react";
import z from "zod";

const signUpSchema = z.object({
  fullname: z.string().nonempty(),
  email: z.email(),
  universityId: z.coerce.number(),
  universityCard: z.string().nonempty("University Id card is required"),
  password: z.string().min(8),
});

const signInWithCredentials = async (data: any) => Promise.resolve(data);

const page = () => {
  return (
    <AuthForm
      schema={signUpSchema}
      defaultValues={{
        fullname: "",
        email: "",
        password: "",
        universityId: 0,
        universityCard: "",
      }}
      type="SIGN_UP"
      onSubmit={signInWithCredentials}
    />
  );
};

export default page;

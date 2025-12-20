"use client";

import AuthForm from "@/components/AuthForm";
import React from "react";
import z from "zod";

const signInSchema = z.object({
  email: z.email().nonempty(),
  password: z.string().min(8),
});

const signInWithCredentials = async (data: any) => Promise.resolve(data);

const page = () => {
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

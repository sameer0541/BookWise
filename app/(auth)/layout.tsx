import Image from "next/image";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="auth-container">
      <div className="auth-form">
        <div className="auth-box bg-[#12141D] px-15 ">
          <div className="flex gap-1">
            <Image src="/icons/logo.svg" alt="logo" height={36} width={36} />
            <p className="text-light-100 font-ibm-plex-sans font-semibold text-3xl">
              BookWise
            </p>
          </div>
          {children}
        </div>
      </div>
      <div className="auth-illustration">
        <Image
          src="/images/auth-illustration.png"
          alt="Auth Illustration"
          fill
          className="object-fill"
        />
      </div>
    </section>
  );
};

export default layout;

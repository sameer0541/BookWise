import { db } from "@/database/db";
import { Users } from "@/database/schema/users";
import { createToken } from "@/lib/actions/token.action";
import { config } from "@/lib/config";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password }: { email: string; password: string } = body;

    // console.log("BODY:", `email:${email}`, `password:${password}`);
    // Fetch user from database

    const users = await db
      .select()
      .from(Users)
      .where(eq(Users.email, email))
      .limit(1);

    if (users.length === 0) {
      return NextResponse.json({
        success: false,
        message: "This email does not exist. Please create an account.",
        redirectUrl: "/sign-up",
      });
    }

    const existingUser = users[0];

    // Compare password
    const isValidPassword = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isValidPassword) {
      return NextResponse.json({
        success: false,
        message: "Invalid password. Please try again.",
        redirectUrl: "/sign-in",
      });
    }

    // Create response with HttpOnly cookie
    const response = NextResponse.json(
      {
        success: true,
        message: "Sign-in successful.",
        redirectUrl: "/",
      },
      { status: 200 }
    );

    // const userToken = createToken(email, config.jwt.secret);

    // response.cookies.set("userToken", userToken, {
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === "production",
    //   sameSite: "strict",
    //   path: "/",
    //   maxAge: 60 * 60 * 24 * 7, // 7 days
    // });

    const userToken = await createToken(existingUser.id);
    response.cookies.set("userToken", userToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  } catch (error) {
    console.error("Sign-in Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}

import { db } from "@/database/db";
import { Users } from "@/database/schema/users";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { createToken } from "@/lib/actions/token.action";
import { config } from "@/lib/config";

export async function GET() {
  console.log("Hello from sign-up GET");
  return NextResponse.json({ success: true, error: "none" });
}

export async function POST(req: NextRequest) {
  try {
    console.log("Content-Type:", req.headers.get("content-type"));
    console.log("Raw URL:", req.url);

    // const body = await req.json();
    const body = await req.json();
    console.log("BODY:", body);

    const { fullName, email, universityId, universityCard, password } = body;

    // 1. Check if user already exists
    const existingUser = await db
      .select()
      .from(Users)
      .where(eq(Users.email, email))
      .limit(1);

    if (existingUser.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: `User with email: ${email} already exists. Please Login`,
          redirectUrl: "/sign-in",
        },
        { status: 409 }
      ); // Good practice to return 409 Conflict
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // 2. Insert the user
    const result = await db.insert(Users).values({
      fullName,
      email,
      universityId,
      universityCard,
      password: hashedPassword,
      userRole: "USER",
      status: "PENDING",
    });

    // 3. FIX: safely check if result exists and access the first item
    if (!result || result.rowCount === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Error occurred while creating User.",
          redirectUrl: "#",
        },
        { status: 500 }
      );
    }

    // const userId = result[0].id;

    // 4. Create response and token
    const response = NextResponse.json(
      {
        success: true,
        message: "User created successfully",
        redirectUrl: "/",
      },
      { status: 201 }
    );

    const userToken = createToken(email, config.jwt.secret);

    response.cookies.set("userToken", userToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch (error) {
    // 5. Catch block to see the actual error in your console
    console.error("Signup Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}

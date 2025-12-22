export const runtime = "nodejs";

import jwt from "jsonwebtoken";

export function createToken(userId: string, secret: string) {
  return jwt.sign({ userId }, secret, { expiresIn: "7d" });
}

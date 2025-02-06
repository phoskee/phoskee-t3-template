import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";
import { admin, username } from "better-auth/plugins"
import { nextCookies } from "better-auth/next-js";
const betterAuthUrl = process.env.BETTER_AUTH_URL;
if (!betterAuthUrl) {
  throw new Error("BETTER_AUTH_URL is not set");
}
const prisma = new PrismaClient();
export const auth = betterAuth({
  trustedOrigins: ["http://localhost:3000", betterAuthUrl],
  database: prismaAdapter(prisma, {
    provider: "sqlite",
  }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [
    username(),
    admin({
      adminRole: ["admin", "superAdmin"],
    }),
    nextCookies(),
  ],
  user: {
    additionalFields: {
      surname: {
        type: "string",
      },
      role: {
        type: "string",
      },
    },
  },
});
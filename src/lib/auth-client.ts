import { createAuthClient } from "better-auth/react"
import { adminClient, inferAdditionalFields, usernameClient } from "better-auth/client/plugins"
const betterAuthUrl = process.env.BETTER_AUTH_URL
export const authClient = createAuthClient({
  baseURL: betterAuthUrl,

  plugins: [
    usernameClient(),
    adminClient(),
    inferAdditionalFields({
      user: {
        surname: {
          type: "string",
        },
        role: {
          type: "string",
        },
      },
    }),
  ],
});

export const {
    signUp,
    signIn,
    signOut,
    useSession,
  } = authClient;
  export type Session = typeof authClient.$Infer.Session;
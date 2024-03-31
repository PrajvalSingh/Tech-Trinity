import Google from "@auth/core/providers/google";
import GitHub from "@auth/core/providers/github";
import Discord from "@auth/core/providers/discord";
import { SvelteKitAuth } from "@auth/sveltekit";
import {
  AUTH_SECRET,
  VITE_DISCORD_ID,
  VITE_DISCORD_SECRET,
  VITE_GITHUB_ID,
  VITE_GITHUB_SECRET,
  VITE_GOOGLE_ID,
  VITE_GOOGLE_SECRET,
} from "$env/static/private";

export const { handle } = SvelteKitAuth({
  providers: [
    GitHub({
      clientId: VITE_GITHUB_ID,
      clientSecret: VITE_GITHUB_SECRET,
    }),
    Google({
      clientId: VITE_GOOGLE_ID,
      clientSecret: VITE_GOOGLE_SECRET,
    }),
    Discord({
      clientId: VITE_DISCORD_ID,
      clientSecret: VITE_DISCORD_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }

      return token;
    },
    async session({ session, token, user }) {
      //@ts-ignore
      session.access_token = token.accessToken;
      return session;
    },
  },
  secret: AUTH_SECRET,
});

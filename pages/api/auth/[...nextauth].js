import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import GoogleProvider from 'next-auth/providers/google';
import { FirebaseAdapter } from '@next-auth/firebase-adapter';
import { db } from '../../../db';
import * as firestoreFunctions from 'firebase/firestore';

export default NextAuth({
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASS,
        },
        from: process.env.EMAIL_FROM,
        maxAge: 24 * 60 * 60,
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,

      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  adapter: FirebaseAdapter({
    db: db,
    ...firestoreFunctions,
  }),
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.uid;
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  debug: true,
});

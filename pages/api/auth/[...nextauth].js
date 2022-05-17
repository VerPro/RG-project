import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { FirebaseAdapter } from '@next-auth/firebase-adapter';
import { db } from '../../../db';
import * as firestoreFunctions from 'firebase/firestore';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId:
        '557058472327-kqb5r1bmnj8oemviud6gqpk6uncg67fh.apps.googleusercontent.com',
      clientSecret: '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',
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

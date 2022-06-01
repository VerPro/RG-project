import '../styles/globals.css';
import { getSession, SessionProvider } from 'next-auth/react';
import { dividerClasses } from '@mui/material';
import Login from './login';
import App, { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../styles/theme';

// Use the <SessionProvider> to improve performance and allow components that call
// `useSession()` anywhere in your application to access the `session` object.

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  console.log(session, 'session');
  // if (!session) {
  //   return <Login />;
  // }

  return (
    <ThemeProvider theme={theme}>
      <SessionProvider
        // Provider options are not required but can be useful in situations where
        // you have a short session maxAge time. Shown here with default values.
        session={session}
      >
        <Component {...pageProps} />
      </SessionProvider>
    </ThemeProvider>
  );
}

MyApp.getInitialProps = async (context: any) => {
  const appProps = await App.getInitialProps(context);
  const session = await getSession(context);

  return {
    ...appProps,

    session,
  };
};

export default MyApp;

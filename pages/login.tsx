import Link from 'next/link';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import { getProviders, signIn, signOut, useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';

export default function Login() {
  const [providers, setProviders] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      return await getProviders();
    };

    fetchData().then((p) => {
      const providers = p ? Object.values(p) : [];

      setProviders(providers);
    });
  }, []);

  if (!providers) {
    return null;
  }

  return (
    <>
      <h1>Přihlásit se</h1>
      <Stack spacing={2}>
        <Link href="/home" passHref>
          <Button variant="outlined">
            <a>Přihlásit se</a>
          </Button>
        </Link>

        <Link href="/" passHref>
          <Button variant="outlined">
            <a>Domů</a>
          </Button>
        </Link>
      </Stack>

      <div>
        {providers.map((provider) => (
          <div key={provider.name}>
            <Button
              variant="outlined"
              type="submit"
              startIcon={<GoogleIcon />}
              onClick={async () =>
                signIn(await signIn('google'), { callbackUrl: '/' })
              }
            >
              Sign in with {provider.name}
            </Button>
          </div>
        ))}
      </div>
    </>
  );
}

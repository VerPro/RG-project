import Link from 'next/link';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import { getProviders, signIn, signOut, useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

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
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        <h1>Přihlášení</h1>
        <Stack spacing={2}>
          <Link href="/home" passHref>
            <Button variant="contained">
              <a>Přihlásit se</a>
            </Button>
          </Link>

          <Link href="/" passHref>
            <Button variant="contained">
              <a>Zpět</a>
            </Button>
          </Link>

          <div>
            {providers.map((provider) => (
              <div key={provider.name}>
                <Button
                  sx={{ fontWeight: 'bold' }}
                  variant="contained"
                  type="submit"
                  startIcon={<FontAwesomeIcon icon={faGoogle} />}
                  onClick={async () =>
                    signIn(await signIn('google'), { callbackUrl: '/home' })
                  }
                >
                  Přihlásit pomocí {provider.name}
                </Button>
              </div>
            ))}
          </div>
        </Stack>
      </Stack>
    </>
  );
}

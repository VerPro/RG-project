import Link from 'next/link';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import { getProviders, signIn, signOut, useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';

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
          {/* <Link href="/home" passHref>
            <Button variant="contained">
              <a>Přihlásit se</a>
            </Button>
  </Link>*/}

          <Link href="/" passHref>
            <Button variant="contained">
              <a>Zpět</a>
            </Button>
          </Link>

          <Button
            sx={{ fontWeight: 'bold' }}
            variant="contained"
            type="submit"
            startIcon={<FontAwesomeIcon icon={faAt} />}
            onClick={async () =>
              signIn(await signIn('email'), { callbackUrl: '/home' })
            }
          >
            Přihlásit pomocí emailu
          </Button>

          <Button
            sx={{ fontWeight: 'bold' }}
            variant="contained"
            type="submit"
            startIcon={<FontAwesomeIcon icon={faGoogle} />}
            onClick={async () =>
              signIn(await signIn('google'), { callbackUrl: '/home' })
            }
          >
            Přihlásit pomocí Google
          </Button>
        </Stack>
      </Stack>
    </>
  );
}

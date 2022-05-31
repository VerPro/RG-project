import Link from 'next/link';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import { getProviders, signIn, signOut, useSession } from 'next-auth/react';
import LogoutIcon from '@mui/icons-material/Logout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faDice, faUser } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <h1>Čajový deník</h1>
      <Stack spacing={4}>
        <Link href="/my-teas" passHref>
          <Button
            variant="contained"
            color="primary"
            startIcon={<FontAwesomeIcon icon={faLeaf} />}
          >
            <a>Moje čajová polička</a>
          </Button>
        </Link>

        <Link href="/tea-drawer" passHref>
          <Button
            variant="contained"
            color="primary"
            startIcon={<FontAwesomeIcon icon={faDice} />}
          >
            <a>Vylosuj mi čaj</a>
          </Button>
        </Link>

        <Link href="/profile" passHref>
          <Button
            variant="contained"
            color="primary"
            startIcon={<FontAwesomeIcon icon={faUser} />}
          >
            <a>Profil</a>
          </Button>
        </Link>
      </Stack>
      {/*      
      <Link href="/my-entries" passHref>
        <Button variant="outlined">
          <a>Můj deník</a>
        </Button>
      </Link>      
      
      <Link href="/blog" passHref>
        <Button variant="outlined">
          <a>Blog</a>
        </Button>
      </Link>
 */}
    </Stack>
  );
}

import { Stack, Button } from '@mui/material';
import Link from 'next/link';

export const TeaShelf = () => {
  return (
    <Stack spacing={2}>
      <h1>Moje čajová polička</h1>

      <Link href="/home" passHref>
        <Button variant="outlined">
          <a> Domů</a>
        </Button>
      </Link>

      <Stack className="teas">
        <h2>Čaje</h2>

        <Link href="/my-teas" passHref>
          <Button variant="outlined">Tie Guan Yin</Button>
        </Link>

        <Link href="/my-teas" passHref>
          <Button variant="outlined">Darjeeling</Button>
        </Link>
        <Link href="/my-teas" passHref>
          <Button variant="outlined">Sencha</Button>
        </Link>
      </Stack>
      <Link href="/add-tea" passHref>
        <Button variant="outlined">
          <a>Přidat čaj</a>
        </Button>
      </Link>
    </Stack>
  );
};

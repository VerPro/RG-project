import { Stack, Button } from '@mui/material';
import Link from 'next/link';

export const TeaDiary = () => {
  return (
    <Stack spacing={2}>
      <h1>Můj deník</h1>

      <Link href="/home" passHref>
        <Button variant="outlined">
          <a> Domů</a>
        </Button>
      </Link>

      <Stack className="teas">
        <h2>Záznamy</h2>

        <Link href="/my-entries" passHref>
          <Button variant="outlined">Dobrá čajovna</Button>
        </Link>

        <Link href="/my-entries" passHref>
          <Button variant="outlined">Čajování na Vršku</Button>
        </Link>
        <Link href="/my-entries" passHref>
          <Button variant="outlined">Vycházka do údolí</Button>
        </Link>
      </Stack>
      <Link href="/add-entry" passHref>
        <Button variant="outlined">
          <a>Přidat záznam</a>
        </Button>
      </Link>
    </Stack>
  );
};

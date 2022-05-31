import { Stack, Button } from '@mui/material';
import Link from 'next/link';

export const NoEntriesScreen = () => {
  return (
    <>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        <h1>Můj deník</h1>
        <Stack spacing={2}>
          <Link href="/home" passHref>
            <Button variant="outlined">
              <a> Domů</a>
            </Button>
          </Link>

          <p>Zatím zde nemáš přidaný žádný deníkový zápis :-(</p>
          <p>Můžeš začít tím, že si přidáš nějaký deníkový zápis</p>

          <Link href="/add-entry" passHref>
            <Button variant="outlined">
              <a>Přidat zápis</a>
            </Button>
          </Link>
        </Stack>
      </Stack>
    </>
  );
};

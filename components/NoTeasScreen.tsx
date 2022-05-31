import { Stack, Button } from '@mui/material';
import Link from 'next/link';

export const NoTeasScreen = () => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={4}
    >
      <h1>Moje čajová polička</h1>

      <Stack spacing={2}>
        <p>Zatím zde nemáš přidaný žádný čaj</p>
        <p>Můžeš začít tím, že si přidáš nějaký čaj</p>

        <Link href="/add-tea" passHref>
          <Button variant="contained">
            <a>Přidat čaj</a>
          </Button>
        </Link>
      </Stack>
    </Stack>
  );
};

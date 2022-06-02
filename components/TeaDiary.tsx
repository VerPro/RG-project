import { Stack, Button } from '@mui/material';
import Link from 'next/link';

export const TeaDiary = ({ entries }: any) => {
  console.log('entries', entries);
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <h1>Můj deník</h1>

      <Stack
        className="teas"
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <h2>Záznamy</h2>

        {entries?.map((entry: any, index: number) => (
          <Link key={index} href="/[tea-id]" passHref>
            <Button key={index} variant="outlined">
              {entry.name}
            </Button>
          </Link>
        ))}
      </Stack>
      <Link href="/add-entry" passHref>
        <Button variant="outlined">
          <a>Přidat záznam</a>
        </Button>
      </Link>
    </Stack>
  );
};

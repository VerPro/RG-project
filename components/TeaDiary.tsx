import { Stack, Button } from '@mui/material';
import Link from 'next/link';

export const TeaDiary = ({ entries }: any) => {
  console.log('entries', entries);
  return (
    <Stack spacing={2}>
      <h1>Můj deník</h1>

      <Stack className="teas">
        <h2>Záznamy</h2>

        {entries?.map((entry: any) => (
          <Link href="/[tea-id]" passHref>
            <Button variant="outlined">{entry.name}</Button>
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

import { Stack, Button } from '@mui/material';

import Link from 'next/link';

export const TeaShelf = ({ teas }: any) => {
  console.log('teas', teas);
  return (
    <Stack spacing={2}>
      <h1>Moje čajová polička</h1>

      <Stack className="teas">
        <h2>Čaje</h2>

        {teas?.map((tea: any) => {
          console.log('teaId', tea.id.id);

          return (
            <Link href={`/my-teas/${tea.id.id}`} passHref>
              <Button variant="outlined">{tea.name}</Button>
            </Link>
          );
        })}
      </Stack>
      <Link href="/add-tea" passHref>
        <Button variant="outlined">
          <a>Přidat čaj</a>
        </Button>
      </Link>
    </Stack>
  );
};

import { Stack, Button } from '@mui/material';

import Link from 'next/link';

export const TeaShelf = ({ teas }: any) => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={4}
    >
      <h1>Moje čajová polička</h1>
      <h2>Čaje</h2>
      <Stack spacing={2}>
        {teas?.map((tea: any) => {
          return (
            <Link href={`/my-teas/${tea.id.id}`} passHref>
              <Button variant="contained" color="secondary">
                {tea.name}
              </Button>
            </Link>
          );
        })}
      </Stack>
      <Link href="/add-tea" passHref>
        <Button variant="contained">
          <a>Přidat čaj</a>
        </Button>
      </Link>
    </Stack>
  );
};

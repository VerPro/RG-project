import { Button, Link, Stack } from '@mui/material';

export const Tea = () => {
  return (
    <Stack>
      <h1>Moje čajová polička</h1>
      <Link href="/my-teas">
        <Button variant="outlined">
          <a>Zpět</a>
        </Button>
      </Link>
      <h2>Název čaje</h2>
      <p>Tie guan Yin</p> {/* Tahat z databáze */}
      <h2>Typ čaje</h2>
      <p>oolong </p> {/* Tahat z databáze */}
      <h2>Dodavatel</h2>
      <p>Teastarter</p> {/* Tahat z databáze */}
      <h2>Datum zakoupení</h2>
      <p>20.12.2019</p> {/* Tahat z databáze */}
      <h2>Chuťový profil</h2>
      <p>Bylinný</p> {/* Tahat z databáze */}
      <h2>Země původu</h2>
      <p>Čína</p> {/* Tahat z databáze */}
      <h2>Deníkové zápisy</h2>
      <Link>
        {' '}
        <a href=""></a>{' '}
      </Link>{' '}
      {/* Tahat z databáze */}
      <Button variant="outlined">Editovat čaj na poličce </Button>
    </Stack>
  );
};

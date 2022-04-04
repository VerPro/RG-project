import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { useState } from 'react';
import { db } from '../db';

export default function MyTeas() {
  console.log(`databáze: ${db}`);

  const [numberOfTeas, setNumberOfTeas] = useState(0);

  //setNumberOfTeas(db.lenght) - tak nějak

  const NoTeasScreen = () => {
    return (
      <Stack spacing={2}>
        <h1>Moje čajová polička</h1>

        <Link href="/home">
          <Button variant="outlined">
            <a> Domů</a>
          </Button>
        </Link>

        <p>Zatím zde nemáš přidaný žádný čaj :-(</p>
        <p>Můžeš začít tím, že si přidáš nějaký čaj</p>

        <Link href="/add-tea">
          <Button variant="outlined">
            <a>Přidat čaj</a>
          </Button>
        </Link>
      </Stack>
    );
  };

  const TeaShelf = () => {
    return (
      <Stack spacing={2}>
        <h1>Moje čajová polička</h1>

        <Link href="/home">
          <Button variant="outlined">
            <a> Domů</a>
          </Button>
        </Link>

        <Stack className="teas">
          <h2>Čaje</h2>

          <Link href="/my-teas">
            <Button variant="outlined">Tie Guan Yin</Button>
          </Link>

          <Link href="/my-teas">
            <Button variant="outlined">Darjeeling</Button>
          </Link>
          <Link href="/my-teas">
            <Button variant="outlined">Sencha</Button>
          </Link>
        </Stack>
        <Link href="/add-tea">
          <Button variant="outlined">
            <a>Přidat čaj</a>
          </Button>
        </Link>
      </Stack>
    );
  };

  if (numberOfTeas === 0) {
    return NoTeasScreen();
  } else {
    return TeaShelf();
  }
}

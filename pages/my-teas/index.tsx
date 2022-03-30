import { Button } from '@mui/material';
import Link from 'next/link';

export default function MyTeas() {
  return (
    <>
      <h1>Moje čajová polička</h1>

      <Button variant="outlined">
        <Link href="/home">
          <a> Domů</a>
        </Link>
      </Button>

      <p>Zatím zde nemáš přidaný žádný čaj :-(</p>
      <p>Můžeš začít tím, že si přidáš nějaký čaj</p>
      <Button variant="outlined">
        <Link href="/add-tea">
          <a>Přidat čaj</a>
        </Link>
      </Button>
    </>
  );
}

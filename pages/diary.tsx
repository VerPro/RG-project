import Link from 'next/link';
import Button from '@mui/material/Button';

export default function Diary() {
  return (
    <>
      <h1>Můj deník</h1>

      <Button variant="outlined">
        <Link href="/home">
          <a> Domů</a>
        </Link>
      </Button>

      <p>Zatím zde nemáš přidaný žádný deníkový zápis :-(</p>
      <p>Můžeš začít tím, že si přidáš nějaký deníkový zápis</p>
      <Button variant="outlined">
        <Link href="/add-entry">
          <a>Přidat zápis</a>
        </Link>
      </Button>
    </>
  );
}

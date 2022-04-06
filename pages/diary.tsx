import Link from 'next/link';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';

export default function Diary() {
  return (
    <>
      <Stack>
        <h1>Můj deník</h1>

        <Link href="/home">
          <Button variant="outlined">
            <a> Domů</a>
          </Button>
        </Link>

        <p>Zatím zde nemáš přidaný žádný deníkový zápis :-(</p>
        <p>Můžeš začít tím, že si přidáš nějaký deníkový zápis</p>

        <Link href="/add-entry">
          <Button variant="outlined">
            <a>Přidat zápis</a>
          </Button>
        </Link>
      </Stack>
    </>
  );
}

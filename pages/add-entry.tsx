import Button from '@mui/material/Button';
import Link from 'next/link';

export default function AddEntry() {
  return (
    <>
      <h1>Přidat zápis</h1>

      <Button variant="outlined">
        <Link href="/diary">
          <a>Zpět</a>
        </Link>
      </Button>
    </>
  );
}

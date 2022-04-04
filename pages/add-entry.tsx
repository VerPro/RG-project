import Button from '@mui/material/Button';
import Link from 'next/link';

export default function AddEntry() {
  return (
    <>
      <h1>Přidat zápis</h1>

      <Link href="/diary">
        <Button variant="outlined">
          <a>Zpět</a>
        </Button>
      </Link>
    </>
  );
}

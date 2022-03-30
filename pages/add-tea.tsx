import Link from 'next/link';
import Button from '@mui/material/Button';

export default function AddTea() {
  return (
    <>
      <h1>Přidat čaj</h1>

      <Button variant="outlined">
        <Link href="/myTeas">
          <a>Zpět</a>
        </Link>
      </Button>
    </>
  );
}

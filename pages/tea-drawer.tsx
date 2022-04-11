import Link from 'next/link';
import Button from '@mui/material/Button';

export default function Diary() {
  return (
    <>
      <h1>Vylosuj mi čaj</h1>

      <Link href="/home" passHref>
        <Button variant="outlined">
          <a>Domů</a>
        </Button>
      </Link>
    </>
  );
}

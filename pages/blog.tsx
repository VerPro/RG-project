import Link from 'next/link';
import Button from '@mui/material/Button';

export default function Diary() {
  return (
    <>
      <h1>Blog</h1>

      <Link href="/home">
        <Button variant="outlined">
          <a>Domů</a>
        </Button>
      </Link>
    </>
  );
}

import Link from 'next/link';
import Button from '@mui/material/Button';

export default function Diary() {
  return (
    <>
      <h1>Blog</h1>

      <Button variant="outlined">
        <Link href="/home">
          <a> Domů</a>
        </Link>
      </Button>
    </>
  );
}

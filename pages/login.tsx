import Link from 'next/link';
import Button from '@mui/material/Button';

export default function Login() {
  return (
    <>
      <h1>Přihlásit se</h1>
      <Button variant="outlined">
        <Link href="/">
          <a>Domů</a>
        </Link>
      </Button>

      <Button variant="outlined">
        <Link href="/home">
          <a>Přihlásit se</a>
        </Link>
      </Button>
    </>
  );
}

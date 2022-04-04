import Link from 'next/link';
import Button from '@mui/material/Button';

export default function Login() {
  return (
    <>
      <h1>Přihlásit se</h1>

      <Link href="/">
        <Button variant="outlined">
          <a>Domů</a>
        </Button>
      </Link>

      <Link href="/home">
        <Button variant="outlined">
          <a>Přihlásit se</a>
        </Button>
      </Link>
    </>
  );
}

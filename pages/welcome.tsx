import Link from 'next/link';
import Button from '@mui/material/Button';

export default function Welcome() {
  return (
    <>
      <h1>Čajový deník</h1>
      <p>Vítejte ve svém čajovém deníku</p>

      <Link href="/login">
        <Button variant="outlined">
          <a>Přihlásit se</a>
        </Button>
      </Link>

      <Link href="/signin">
        <Button variant="outlined">
          <a>Zaregistrovat se</a>
        </Button>
      </Link>
    </>
  );
}

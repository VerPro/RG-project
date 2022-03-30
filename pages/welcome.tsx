import Link from 'next/link';
import Button from '@mui/material/Button';

export default function Welcome() {
  return (
    <>
      <h1>Čajový deník</h1>
      <p>Vítejte ve svém čajovém deníku</p>

      <Button variant="outlined">
        <Link href="/login">
          <a>Přihlásit se</a>
        </Link>
      </Button>
      <Button variant="outlined">
        <Link href="/signin">
          <a>Zaregistrovat se</a>
        </Link>
      </Button>
    </>
  );
}

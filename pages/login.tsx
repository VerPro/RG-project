import Link from 'next/link';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';

export default function Login() {
  return (
    <>
      <h1>Přihlásit se</h1>
      <Stack spacing={2}>
        <Link href="/home">
          <Button variant="outlined">
            <a>Přihlásit se</a>
          </Button>
        </Link>

        <Link href="/">
          <Button variant="outlined">
            <a>Domů</a>
          </Button>
        </Link>
      </Stack>
    </>
  );
}

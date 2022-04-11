import Button from '@mui/material/Button';
import Link from 'next/link';
export default function SignIn() {
  return (
    <>
      <h1>Založit účet</h1>

      <Link href="/" passHref>
        <Button variant="outlined">
          <a>Domů</a>
        </Button>
      </Link>
    </>
  );
}

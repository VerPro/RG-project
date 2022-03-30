import Button from '@mui/material/Button';
import Link from 'next/link';
export default function SignIn() {
  return (
    <>
      <h1>Založit účet</h1>
      <Button variant="outlined">
        <Link href="/">
          <a>Domů</a>
        </Link>
      </Button>
    </>
  );
}

import Link from 'next/link';
import Button from '@mui/material/Button';
import Navigation from '../components/Navigation';

export default function TeaDrawer() {
  return (
    <>
      <h1>Vylosuj mi čaj</h1>

      <Link href="/home" passHref>
        <Button variant="outlined">
          <a>Domů</a>
        </Button>
      </Link>
      <Navigation />
    </>
  );
}

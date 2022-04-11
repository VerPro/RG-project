import Link from 'next/link';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';

export default function Home() {
  return (
    <Stack spacing={2}>
      <h1>Čajový deník</h1>

      <Link href="/my-teas" passHref>
        <Button variant="outlined">
          <a>Moje čajová polička</a>
        </Button>
      </Link>

      <Link href="/my-entries" passHref>
        <Button variant="outlined">
          <a>Můj deník</a>
        </Button>
      </Link>

      <Link href="/tea-drawer" passHref>
        <Button variant="outlined">
          <a>Vylosuj mi čaj</a>
        </Button>
      </Link>

      <Link href="/blog" passHref>
        <Button variant="outlined">
          <a>Blog</a>
        </Button>
      </Link>

      <Link href="/" passHref>
        <Button variant="outlined">
          <a>Odhlásit</a>
        </Button>
      </Link>
    </Stack>
  );
}

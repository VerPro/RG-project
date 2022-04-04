import Link from 'next/link';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function Home() {
  return (
    <Box className="main">
      <h1>Čajový deník</h1>

      <Link href="/my-teas">
        <Button variant="outlined">
          <a>Moje čajová polička</a>
        </Button>
      </Link>

      <Link href="/diary">
        <Button variant="outlined">
          <a>Můj deník</a>
        </Button>
      </Link>

      <Link href="/tea-drawer">
        <Button variant="outlined">
          <a>Vylosuj mi čaj</a>
        </Button>
      </Link>

      <Link href="/blog">
        <Button variant="outlined">
          <a>Blog</a>
        </Button>
      </Link>

      <Link href="/welcome">
        <Button variant="outlined">
          <a>Odhlásit</a>
        </Button>
      </Link>
    </Box>
  );
}

import Link from 'next/link';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function Home() {
  return (
    <Box className="main">
      <h1>Čajový deník</h1>
      <Button variant="outlined">
        <Link href="/my-teas">
          <a>Moje čajová polička</a>
        </Link>
      </Button>
      <Button variant="outlined">
        <Link href="/diary">
          <a>Můj deník</a>
        </Link>
      </Button>
      <Button variant="outlined">
        <Link href="/tea-drawer">
          <a>Vylosuj mi čaj</a>
        </Link>
      </Button>
      <Button variant="outlined">
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </Button>
      <Button variant="outlined">
        <Link href="/welcome">
          <a>Odhlásit</a>
        </Link>
      </Button>
    </Box>
  );
}

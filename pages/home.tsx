import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Čajový deník</h1>
      <ul>
        <li>
          <Link href="/authorized/my-teas">
            <a>Moje čajová polička</a>
          </Link>
        </li>
        <li>
          <Link href="/authorized/diary">
            <a>Můj deník</a>
          </Link>
        </li>
        <li>
          <Link href="/authorized/teaDrawer">
            <a>Vylosuj mi čaj</a>
          </Link>
        </li>
        <li>
          <Link href="/authorized/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/public/welcome">
            <a>Odhlásit</a>
          </Link>
        </li>
      </ul>
    </>
  );
}

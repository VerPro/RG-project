import Link from 'next/link';

export default function Diary() {
  return (
    <>
      <h1>Vylosuj mi čaj</h1>

      <ul>
        <li>
          <Link href="/authorized/home">
            <a> Domů</a>
          </Link>
        </li>
        <li></li>
      </ul>
    </>
  );
}

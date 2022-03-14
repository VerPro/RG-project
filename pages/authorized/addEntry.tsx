import Link from 'next/link';

export default function AddEntry() {
  return (
    <>
      <h1>Přidat zápis</h1>

      <ul>
        <li>
          <Link href="/authorized/diary">
            <a>Zpět</a>
          </Link>
        </li>
        <li></li>
      </ul>
    </>
  );
}

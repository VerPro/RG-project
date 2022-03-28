import Link from 'next/link';

export default function AddTea() {
  return (
    <>
      <h1>Přidat čaj</h1>

      <ul>
        <li>
          <Link href="/authorized/myTeas">
            <a>Zpět</a>
          </Link>
        </li>
        <li></li>
      </ul>
    </>
  );
}

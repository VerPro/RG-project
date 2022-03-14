import Link from 'next/link';

export default function MyTeas() {
  return (
    <>
      <h1>Moje čajová polička</h1>

      <ul>
        <li>
          <Link href="/authorized/home">
            <a> Domů</a>
          </Link>
        </li>
      </ul>

      <p>Zatím zde nemáš přidaný žádný čaj :-(</p>
      <p>Můžeš začít tím, že si přidáš nějaký čaj</p>
      <ul>
        <li>
          <Link href="/authorized/addTea">
            <a>Přidat čaj</a>
          </Link>
        </li>
      </ul>
    </>
  );
}

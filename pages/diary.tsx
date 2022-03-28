import Link from 'next/link';

export default function Diary() {
  return (
    <>
      <h1>Můj deník</h1>

      <ul>
        <li>
          <Link href="/authorized/home">
            <a> Domů</a>
          </Link>
        </li>
      </ul>

      <p>Zatím zde nemáš přidaný žádný deníkový zápis :-(</p>
      <p>Můžeš začít tím, že si přidáš nějaký deníkový zápis</p>
      <ul>
        <li>
          <Link href="/authorized/addEntry">
            <a>Přidat zápis</a>
          </Link>
        </li>
      </ul>
    </>
  );
}

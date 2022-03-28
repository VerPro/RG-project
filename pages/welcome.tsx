import Link from 'next/link';

export default function Welcome() {
  return (
    <>
      <h1>Čajový deník</h1>
      <p>Vítejte</p>

      <ul>
        <li>
          <Link href="/public/login">
            <a>Přihlásit se</a>
          </Link>
        </li>
        <li>
          <Link href="/public/signin">
            <a>Zaregistrovat se</a>
          </Link>
        </li>
      </ul>
    </>
  );
}

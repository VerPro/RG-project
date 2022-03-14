import Link from 'next/link';

export default function Login() {
  return (
    <>
      <h1>Přihlásit se</h1>
      <ul>
        <li>
          <Link href="/">
            <a>Domů</a>
          </Link>
        </li>

        <li>
          <Link href="/authorized/home">
            <a>Přihlásit se</a>
          </Link>
        </li>
      </ul>
    </>
  );
}

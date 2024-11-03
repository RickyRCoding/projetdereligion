import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href={"/savoir-plus"}>Savoir plus</Link>
          </li>
          <li>
            <Link href={"/lien"}>Le lien avec ma vie</Link>
          </li>
        </ul>
      </nav>
      <div className="center">
        <h1>L&apos;arche de Noé</h1>
      </div>
      <div>
        <p>Projet de religion - Ricardo Rizk</p>
      </div>
    </>
  );
}

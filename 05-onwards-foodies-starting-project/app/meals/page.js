import Link from "next/link";

export default function MealsPage() {
  return (
    <main>
      <h1>Meals Page</h1>
      <ul>
        <li>
          <Link href="meals/share">Share</Link>
        </li>
        <li>
          <Link href="meals/donate">Donate</Link>
        </li>
      </ul>
    </main>
  );
}

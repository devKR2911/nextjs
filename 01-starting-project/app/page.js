import Link from "next/link";
import Header from "@/components/header";

export default function Home() {
  console.log("Home page is running on the server!");
  return (
    <main>
      <Header></Header>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        <Link href="/about">About Us</Link>
      </p>
    </main>
  );
}

import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <header>
        <nav>
          <img src="" alt="" />
          <a href="/">Home</a>
          <a href="/about-us">About Us</a>
          <a href="/events">Events</a>
        </nav>
      </header>
    </div>
  );
}

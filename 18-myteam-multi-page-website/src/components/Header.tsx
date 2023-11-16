import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="bg-green-600 py-16">
      <Container>
        {/* <div className="flex gap-20 align-middle">
          <Link href="/" className="grid place-content-center">
            <Image src="logo.svg" alt="" width="160" height="40" />
          </Link>
          <Navbar />
        </div> */}
        <Navbar />
      </Container>
    </header>
  );
}

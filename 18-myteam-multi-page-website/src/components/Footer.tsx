import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import IconFacebook from "./icons/IconFacebook";
import IconTwitter from "./icons/IconTwitter";
import IconPinterest from "./icons/IconPinterest";

export default function Footer() {
  return (
    <footer className="mt-auto bg-green-900 py-20 text-center">
      <Container className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1fr_1fr_2fr]">
        <div className="mx-auto grid w-fit md:mx-0">
          <p className="text-2xl leading-none">myteam</p>
          <div className="mt-8 flex justify-around gap-8 lg:text-lg">
            <Link href="/" className="hover:text-coral">
              home
            </Link>
            <Link href="/about" className="hover:text-coral">
              about
            </Link>
          </div>
        </div>

        <div className="font-normal opacity-80">
          <p className="md:text-right lg:text-left">987 Hillcrest Lane</p>
          <p className="md:text-right lg:text-left">Irvine, CA</p>
          <p className="md:text-right lg:text-left">California 92714</p>
          <p className="md:text-right lg:text-left">Call Us : 949-833-7432</p>
        </div>

        <div className="md:col-span-2 md:flex md:justify-between lg:col-span-1 lg:flex-col">
          <div className="mx-auto flex w-fit items-center gap-8 md:mx-0 lg:mx-0 lg:w-auto lg:justify-end">
            <Link href="#">
              <IconFacebook className="fill-white hover:fill-coral" />
            </Link>
            <Link href="#">
              <IconPinterest className="fill-white hover:fill-coral" />
            </Link>
            <Link href="#">
              <IconTwitter className="fill-white hover:fill-coral" />
            </Link>
          </div>
          <p className="mt-4 font-normal opacity-80 md:mt-0 lg:text-right">
            Copyright 2020. All Rights Reserved
          </p>
        </div>
      </Container>
    </footer>
  );
}

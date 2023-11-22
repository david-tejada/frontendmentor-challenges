import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import IconFacebook from "./icons/IconFacebook";
import IconTwitter from "./icons/IconTwitter";
import IconPinterest from "./icons/IconPinterest";

export default function Footer() {
  return (
    <footer className="mt-auto bg-green-900 py-20 text-center">
      <Container className="grid gap-8 md:grid-cols-2 xl:grid-cols-[1fr_1fr_2fr]">
        <div className="mx-auto grid w-fit md:mx-0">
          <p className="text-4xl leading-none">myteam</p>
          <div className="mt-8 flex justify-around gap-16">
            <Link href="/" className="hover:text-coral">
              home
            </Link>
            <Link href="/about" className="hover:text-coral">
              about
            </Link>
          </div>
        </div>

        <div className="font-normal opacity-80">
          <p className="md:text-right xl:text-left">987 Hillcrest Lane</p>
          <p className="md:text-right xl:text-left">Irvine, CA</p>
          <p className="md:text-right xl:text-left">California 92714</p>
          <p className="md:text-right xl:text-left">Call Us : 949-833-7432</p>
        </div>

        <div className="md:col-span-2 md:flex md:justify-between xl:col-span-1 xl:flex-col">
          <div className="mx-auto flex w-fit items-center gap-4 md:mx-0 xl:mx-0 xl:w-auto xl:justify-end">
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
          <p className="mt-4 font-normal opacity-80 md:mt-0 xl:text-right">
            Copyright 2020. All Rights Reserved
          </p>
        </div>
      </Container>
    </footer>
  );
}

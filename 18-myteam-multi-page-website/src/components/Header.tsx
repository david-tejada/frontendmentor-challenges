"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import HamburgerButton from "./HamburgerButton";
import Container from "./Container";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean | undefined>(false);
  const [navReady, setNavReady] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mediaQueryList = window.matchMedia("(min-width: 640px)");
    if (mediaQueryList.matches) setIsOpen(undefined);
    setNavReady(true);

    mediaQueryList.addEventListener("change", (mediaQueryList) => {
      if (mediaQueryList.matches) {
        setIsOpen(undefined);
      } else {
        setIsOpen(false);
      }
    });
  }, []);

  useEffect(() => {
    document.body.style.overflowY = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  return (
    <header className="bg-green-600 py-12">
      <Container className="relative z-50 flex justify-between gap-20 sm:justify-normal">
        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={(event) => setIsOpen(false)}
          ></div>
        )}

        <Link href="/">
          <Image src="logo.svg" alt="" width="160" height="40" />
        </Link>

        {navReady && (
          <nav
            className="flex grow justify-end"
            ref={navRef}
            onBlur={(event) => {
              if (
                isOpen &&
                event.relatedTarget &&
                !navRef.current?.contains(event.relatedTarget)
              ) {
                setIsOpen(false);
              }
            }}
          >
            {isOpen !== undefined && (
              <HamburgerButton
                expanded={isOpen}
                aria-controls="menu-list"
                onClick={() => {
                  setIsOpen((previous) => !previous);
                }}
              />
            )}

            <ul
              id="menu-list"
              className={`${
                isOpen
                  ? "translate-x-0 bg-pattern-about-1 bg-[bottom_right_-100px] bg-no-repeat"
                  : ""
              } ${
                isOpen === false ? "translate-x-full" : ""
              } fixed bottom-0 right-0 top-0 bg-green-600 p-16 pt-40 transition-transform motion-reduce:transition-none sm:static sm:flex sm:grow sm:items-center sm:gap-8 sm:p-0`}
            >
              <li>
                <Link
                  href="/"
                  className="hover:text-coral"
                  onClick={() => setIsOpen(isOpen && false)}
                >
                  home
                </Link>
              </li>
              <li className="mt-8 sm:mt-0">
                <Link
                  href="/about"
                  className="hover:text-coral"
                  onClick={() => setIsOpen(isOpen && false)}
                >
                  about
                </Link>
              </li>
              <li className="mt-10 sm:ml-auto sm:mt-0">
                <Link
                  href="/contact"
                  className="rounded-full border px-6 py-2 hover:bg-white hover:text-green-600"
                  onClick={() => setIsOpen(isOpen && false)}
                >
                  contact us
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </Container>
    </header>
  );
}

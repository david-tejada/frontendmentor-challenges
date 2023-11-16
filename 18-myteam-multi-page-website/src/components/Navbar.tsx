"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import HamburgerButton from "./HamburgerButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean | undefined>(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia("(min-width: 640px)");
    if (mediaQueryList.matches) setIsOpen(undefined);

    mediaQueryList.addEventListener("change", (mediaQueryList) => {
      if (mediaQueryList.matches) {
        setIsOpen(undefined);
      } else {
        setIsOpen(false);
      }
    });
  }, []);

  return (
    <div className="relative z-50">
      {isOpen && (
        <div className="navbar-backdrop bg-black fixed inset-0 opacity-50"></div>
      )}

      <nav className="flex justify-between gap-20 sm:justify-normal">
        <Link href="/">
          <Image src="logo.svg" alt="" width="160" height="40" />
        </Link>

        {isOpen !== undefined && (
          <HamburgerButton
            expanded={isOpen}
            onClick={() => {
              setIsOpen((previous) => !previous);
            }}
          />
        )}

        <ul
          className={`${isOpen === false ? "hidden" : ""} ${
            isOpen
              ? "bg-pattern-about-1 bg-[bottom_right_-100px] bg-no-repeat"
              : ""
          } fixed bottom-0 right-0 top-0 bg-green-600 p-16 pt-40 sm:static sm:flex sm:grow sm:items-center sm:gap-8 sm:p-0`}
        >
          <li>
            <Link
              href="/"
              onClick={() => {
                if (isOpen) setIsOpen(false);
              }}
            >
              home
            </Link>
          </li>
          <li className="mt-8 sm:mt-0">
            <Link
              href="/about"
              onClick={() => {
                if (isOpen) setIsOpen(false);
              }}
            >
              about
            </Link>
          </li>
          <li className="mt-10 sm:ml-auto sm:mt-0">
            <Link
              href="/contact"
              className="rounded-full border px-6 py-2"
              onClick={() => {
                if (isOpen) setIsOpen(false);
              }}
            >
              contact us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import useDarkMode from "../lib/hooks/useDarkMode";
import { IconBoard } from "./icons";
import ThemeSwitcher from "./themeSwitcher";
import { useLocalStorage } from "../lib/hooks/useLocalStorage";
import { placeholderBoards } from "../lib/placeholderBoards";
import useActiveBoard from "../lib/hooks/useActiveBoard";
import { redirect } from "next/navigation";
import useMobileLayout from "../lib/hooks/useMobileLayout";
import Logo from "./logo";
import { useMenu } from "../lib/hooks/useMenu";

type HeaderProps = {
  boardId: string;
};

export function Header({ boardId }: HeaderProps) {
  const [boards, setBoards] = useLocalStorage("boards", placeholderBoards);
  const board = useActiveBoard(boardId);
  const { isMobile, isMobileOpen, toggleMobileMenu, closeMobileMenu } =
    useMenu();
  useDarkMode();

  return (
    <header className="relative">
      <div className="relative z-20 flex bg-white dark:bg-neutral-700">
        <div className="flex place-items-center p-4 md:border-b md:border-r md:border-blue-200 md:px-6 md:py-7 dark:md:border-neutral-600">
          <Logo />
        </div>

        <div className="flex grow items-center gap-4 p-4 md:border-b md:border-blue-200 md:px-6 dark:md:border-neutral-600">
          {(isMobile && (
            <button
              type="button"
              className="flex items-center text-heading-lg dark:text-white"
              onClick={() => {
                toggleMobileMenu();
              }}
            >
              {board?.name}
              <Image
                src={
                  isMobileOpen
                    ? "/icon-chevron-up.svg"
                    : "/icon-chevron-down.svg"
                }
                width={10}
                height={7}
                alt=""
                className="ml-2"
              />
            </button>
          )) || (
            <h1 className="text-heading-lg dark:text-white">{board?.name}</h1>
          )}
          <button
            type="button"
            className="paddinglet ml-auto rounded-full bg-purple-500 px-[1.125rem] py-[0.625rem]"
          >
            <Image
              src="/icon-add-task-mobile.svg"
              width={12}
              height={12}
              alt=""
            />
          </button>
          <button type="button">
            <Image
              src="/icon-vertical-ellipsis.svg"
              width={5}
              height={20}
              alt=""
            />
          </button>
        </div>
      </div>
      {isMobileOpen && (
        <div className="fixed inset-0 z-10">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => {
              closeMobileMenu();
            }}
          ></div>
          <div className="relative top-20 z-20 mx-auto w-3/4 rounded-lg bg-white dark:bg-neutral-700">
            <p className="px-6 py-4 text-heading-sm uppercase text-neutral-400 dark:text-neutral-400">
              All boards ({boards.length})
            </p>
            <ul>
              {boards.map((board) => (
                <li key={board.id} className="pr-8">
                  <Link
                    href={`/board/${board.id}`}
                    className={clsx(
                      "flex items-center gap-3 rounded-r-full px-6 py-4 text-heading-md",
                      board.id !== boardId && "text-neutral-400",
                      board.id === boardId && "bg-purple-500 text-white",
                    )}
                    onClick={() => {
                      closeMobileMenu();
                    }}
                  >
                    <IconBoard />
                    {board.name}
                  </Link>
                </li>
              ))}

              <li>
                <Link
                  href={`board/${boardId}/newBoard`}
                  className="flex items-center gap-3 rounded-r-full px-6 py-4 text-heading-md text-purple-500"
                  onClick={() => {
                    closeMobileMenu();
                  }}
                >
                  <IconBoard />+ Create New Board
                </Link>
              </li>
            </ul>
            <div className="p-4">
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

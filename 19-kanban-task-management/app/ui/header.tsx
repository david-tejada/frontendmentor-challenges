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

type HeaderProps = {
  boardId: string;
};

export function Header({ boardId }: HeaderProps) {
  const [boards, setBoards] = useLocalStorage("boards", placeholderBoards);
  const [isOpen, setIsOpen] = useState(false);
  const board = useActiveBoard(boardId);
  useDarkMode();

  return (
    <header className="relative">
      <div className="relative z-20 flex items-center gap-4 bg-white p-4 dark:bg-neutral-700">
        <Image src="/logo-mobile.svg" width={24} height={25} alt="" />
        <button
          type="button"
          className="flex items-center text-heading-lg dark:text-white"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {board?.name}
          <Image
            src={isOpen ? "/icon-chevron-up.svg" : "/icon-chevron-down.svg"}
            width={10}
            height={7}
            alt=""
            className="ml-2"
          />
        </button>
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
      {isOpen && (
        <div className="fixed inset-0 z-10">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => {
              setIsOpen(false);
            }}
          ></div>
          <div className="relative top-20 z-20 mx-auto w-3/4 rounded-lg bg-white dark:bg-neutral-700">
            <p className="px-6 py-4 text-heading-sm uppercase text-neutral-400 dark:text-neutral-400">
              All boards (3)
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
                      setIsOpen(false);
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
                    setIsOpen(false);
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

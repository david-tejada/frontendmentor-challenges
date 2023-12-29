"use client";

import { redirect } from "next/navigation";
import { placeholderBoards } from "../placeholderBoards";
import { useLocalStorage } from "./useLocalStorage";

export default function useActiveBoard(id?: string) {
  const [boards, setBoards] = useLocalStorage("boards", placeholderBoards);
  const [activeBoard, setActiveBoard] = useLocalStorage(
    "active-board",
    id ?? boards[0].id,
  );

  const activeBoardId = id ?? activeBoard;
  const board = boards.find((board) => board.id === activeBoardId) ?? boards[0];

  if (id && id !== activeBoard) {
    setActiveBoard(id);
  }

  if (id && id !== board.id) {
    redirect(`/board/${board.id}`);
  }

  return board;
}

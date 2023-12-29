"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useActiveBoard from "./lib/hooks/useActiveBoard";
import { useLocalStorage } from "./lib/hooks/useLocalStorage";
import { placeholderBoards } from "./lib/placeholderBoards";

export default function Home() {
  const router = useRouter();
  const [boards, setBoards] = useLocalStorage("boards", placeholderBoards);
  const activeBoard = useActiveBoard();

  useEffect(() => {
    router.push(`board/${activeBoard?.id}`);
  }, [router, activeBoard]);
}

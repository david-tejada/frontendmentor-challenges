"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import IconLinkedIn from "./icons/IconLinkedIn";
import IconTwitter from "./icons/IconTwitter";
import clsx from "clsx";

type PersonnelCardProps = {
  name: string;
  title: string;
  avatarUrl: string;
  twitterUrl?: string;
  linkedInUrl?: string;
  children: React.ReactNode;
};

export function PersonnelCard({
  name,
  title,
  avatarUrl,
  twitterUrl,
  linkedInUrl,
  children,
}: PersonnelCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className={clsx("relative justify-center pb-16 pt-8 text-center", {
        "bg-green-900": isExpanded,
        "bg-green-800": !isExpanded,
      })}
    >
      {!isExpanded && (
        <>
          <Image
            src={avatarUrl}
            width={96}
            height={96}
            alt=""
            className="mx-auto mb-4 rounded-full border-2 border-white"
          />

          <p className="font-bold text-blue">{name}</p>
          <p className="font-medium italic">{title}</p>
        </>
      )}

      {isExpanded && (
        <>
          <p className="font-bold text-blue">{name}</p>
          <p className="mx-auto mt-4 max-w-[24ch] font-semibold">{children}</p>
          {(twitterUrl || linkedInUrl) && (
            <div className="mt-6 flex justify-center gap-4">
              {twitterUrl && (
                <Link href="#">
                  <IconTwitter className="fill-white hover:fill-coral" />
                </Link>
              )}

              {linkedInUrl && (
                <Link href="#">
                  <IconLinkedIn className="fill-white hover:fill-coral" />
                </Link>
              )}
            </div>
          )}
        </>
      )}

      <button
        type="button"
        aria-expanded={isExpanded}
        className={clsx(
          "absolute bottom-[-2rem] left-[calc(50%-2rem)] grid h-16 w-16 place-items-center rounded-full",
          {
            "bg-blue hover:bg-coral": isExpanded,
            "bg-coral hover:bg-blue": !isExpanded,
          },
        )}
        onClick={() => setIsExpanded((previous) => !previous)}
      >
        <div className="sr-only">More info</div>
        {(isExpanded && (
          <Image src="/icon-close.svg" width={16} height={16} alt="" />
        )) || <Image src="/icon-cross.svg" width={16} height={16} alt="" />}
      </button>
    </div>
  );
}

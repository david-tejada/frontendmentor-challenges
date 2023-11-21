import React from "react";
import Image from "next/image";

type TestimonialProps = {
  author: string;
  title: string;
  avatarUrl: string;
  children: React.ReactNode;
};

export function Testimonial({
  author,
  title,
  avatarUrl,
  children,
}: TestimonialProps) {
  return (
    <div>
      <p className="mx-auto max-w-[50ch] bg-[url('/icon-quotes.svg')] bg-[center_top] bg-no-repeat pt-10 font-semibold lg:mx-0">
        {children}
      </p>
      <p className="mt-4 text-lg font-bold text-blue">{author}</p>
      <p className="font-medium italic">{title}</p>
      <Image
        src={avatarUrl}
        alt=""
        width="62"
        height="62"
        className="mx-auto mt-4 rounded-full border border-white"
      />
    </div>
  );
}

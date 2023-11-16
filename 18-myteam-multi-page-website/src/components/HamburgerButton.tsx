import Image from "next/image";

type HamburgerButtonProps = {
  expanded: boolean;
  onClick(): void;
};

export default function HamburgerButton({
  expanded,
  onClick,
}: HamburgerButtonProps) {
  return (
    <button
      type="button"
      className="z-[100] my-auto cursor-pointer"
      aria-expanded={expanded}
      onClick={onClick}
    >
      {(expanded && (
        <>
          <span className="sr-only">Close menu</span>
          <Image src="icon-close.svg" alt="" width="20" height="17" />
        </>
      )) || (
        <>
          <span className="sr-only">Open menu</span>
          <Image src="icon-hamburger.svg" alt="" width="20" height="17" />
        </>
      )}
    </button>
  );
}

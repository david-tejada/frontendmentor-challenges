import Image from "next/image";

export default function Logo() {
  return (
    <>
      <Image
        src="/logo-mobile.svg"
        width={24}
        height={25}
        alt=""
        className="md:hidden"
      />
      <Image
        src="/logo-dark.svg"
        width={153}
        height={26}
        alt=""
        className="hidden dark:hidden md:block"
      />
      <Image
        src="/logo-light.svg"
        width={153}
        height={26}
        alt=""
        className="hidden md:dark:block"
      />
    </>
  );
}

import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <div className="grow bg-green-600 bg-pattern-contact-2 bg-[position:bottom_-100px_right_-100px] bg-no-repeat md:bg-[url('/bg-pattern-about-2-contact-1.svg'),url('/bg-pattern-contact-2.svg')] md:bg-[position:top_5rem_left_-100px,bottom_right_-100px]">
        <Container className="grid gap-8 py-20 sm:max-w-[70%] lg:max-w-6xl lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="text-center text-3xl font-bold lg:mx-0 lg:mt-4 lg:text-left lg:text-4xl">
              Contact
            </h1>
            <p className="mt-4 text-center text-2xl text-coral lg:mt-12 lg:text-left">
              Ask us about
            </p>

            <div className="mt-8 grid gap-4">
              <div className="flex items-center gap-4">
                <Image
                  src="icon-person.svg"
                  alt=""
                  width="65"
                  height="72"
                  className=""
                />

                <p className="">The quality of our talent network</p>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="icon-cog.svg"
                  alt=""
                  width="65"
                  height="72"
                  className=""
                />

                <p className="">Usage & implementation of our software</p>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="icon-chart.svg"
                  alt=""
                  width="65"
                  height="72"
                  className=""
                />

                <p className="">How we help drive innovation</p>
              </div>
            </div>
          </div>

          <ContactForm />
        </Container>
      </div>
    </>
  );
}

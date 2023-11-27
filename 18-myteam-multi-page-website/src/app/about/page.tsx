import Container from "@/components/Container";
import { PersonnelCard } from "@/components/PersonnelCard";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="bg-green-600 bg-pattern-about-1 bg-[position:bottom_-100px_right_-100px] bg-no-repeat pb-24 pt-4 md:bg-[position:bottom_right_-100px] lg:pt-8">
        <Container className="relative grid lg:grid-cols-[4fr_8fr]">
          <h1 className="mx-auto max-w-[10ch] text-center text-3xl font-bold leading-10 lg:mx-0 lg:mt-4 lg:shrink-0 lg:grow-[2] lg:text-left lg:text-4xl">
            About
          </h1>
          <p className="mx-auto mt-8 max-w-[52ch] text-center leading-7 lg:mx-0 lg:max-w-none lg:shrink lg:grow lg:text-left lg:before:absolute lg:before:top-0 lg:before:h-1 lg:before:w-12 lg:before:bg-coral">
            We help companies build dynamic teams made up of top global talent.
            Using our network of passionate professionals we drive innovation
            and deliver incredible outcomes. Talented, diverse teams shape the
            best products and experiences. We’ll bring those teams to you.
          </p>
        </Container>
      </div>

      <div className="bg-green-700 bg-[url('/bg-pattern-about-2-contact-1.svg'),url('/bg-pattern-home-4-about-3.svg')] bg-[position:top_-100px_left_-100px,bottom_right] bg-no-repeat py-20 md:bg-[position:top_left_-100px,bottom_right] md:py-24 lg:py-36">
        <Container>
          <h2 className="text-center text-2xl lg:text-3xl">
            Meet the directors
          </h2>

          <div className="my-12 grid gap-[4rem_2rem] sm:grid-cols-2 lg:grid-cols-3">
            <PersonnelCard
              name="Nikita Marks"
              title="Founder & CEO"
              avatarUrl="/avatar-nikita.jpg"
              twitterUrl="#"
              linkedInUrl="#"
            >
              “It always amazes me how much talent there is in every corner of
              the globe.”
            </PersonnelCard>

            <PersonnelCard
              name="Cristian Duncan"
              title="Co-founder & COO"
              avatarUrl="/avatar-christian.jpg"
              twitterUrl="#"
              linkedInUrl="#"
            >
              “Distributed teams required unique processes. You need to approach
              work in a new way.”
            </PersonnelCard>

            <PersonnelCard
              name="Cruz Hamer"
              title="Co-founder & CTO"
              avatarUrl="/avatar-cruz.jpg"
              twitterUrl="#"
              linkedInUrl="#"
            >
              “Technology is at the forefront of enabling distributed teams.
              That&apos;s where we come in.”
            </PersonnelCard>

            <PersonnelCard
              name="Drake Heaton"
              title="Business Development Lead"
              avatarUrl="/avatar-drake.jpg"
              twitterUrl="#"
              linkedInUrl="#"
            >
              “Hiring similar people from similar backgrounds is a surefire way
              to stunt innovation.”
            </PersonnelCard>

            <PersonnelCard
              name="Griffin Wise"
              title="Lead Marketing"
              avatarUrl="/avatar-griffin.jpg"
              twitterUrl="#"
              linkedInUrl="#"
            >
              “Unique perspectives shape unique products, which is what you need
              to survive these days.”
            </PersonnelCard>

            <PersonnelCard
              name="Aden Allan"
              title="Head of Talent"
              avatarUrl="/avatar-aden.jpg"
              twitterUrl="#"
              linkedInUrl="#"
            >
              “Empowered teams create truly amazing products. Set the north star
              and let them follow it.”
            </PersonnelCard>
          </div>
        </Container>
      </div>

      <div className="bg-green-800 bg-pattern-about-4 bg-[position:top_-100px_left_-100px] bg-no-repeat py-20 md:bg-[position:top_-100px_left] md:py-24 lg:bg-[position:top_left] lg:py-36">
        <Container>
          <h2 className="text-center text-2xl lg:text-3xl">
            Some of our clients
          </h2>

          <div className="mx-auto mt-16 flex w-40 flex-col gap-16 md:w-full md:flex-row md:gap-8 xl:gap-16">
            <Link href="#">
              <Image src="/logo-the-verge.png" width={330} height={56} alt="" />
            </Link>
            <Link href="#">
              <Image
                src="/logo-jakarta-post.png"
                width={368}
                height={46}
                alt=""
              />
            </Link>
            <Link href="#">
              <Image
                src="/logo-the-guardian.png"
                width={360}
                height={56}
                alt=""
              />
            </Link>
            <Link href="#">
              <Image
                src="/logo-tech-radar.png"
                width={330}
                height={56}
                alt=""
              />
            </Link>
            <Link href="#">
              <Image
                src="/logo-gadgets-now.png"
                width={196}
                height={90}
                alt=""
              />
            </Link>
          </div>
        </Container>
      </div>

      <div className="bg-coral bg-[url('/bg-pattern-home-6-about-5.svg')] bg-left-bottom bg-no-repeat py-24 text-green-800">
        <Container className="flex flex-col items-center md:flex-row md:justify-around">
          <h2 className="text-center  text-2xl lg:text-3xl">
            Ready to get started?
          </h2>
          <Link
            href="/contact"
            className="mx-auto mt-[1.5rem] w-fit rounded-full border-2 px-6 py-2 hover:bg-green-800 hover:text-coral md:mx-0 md:mt-0"
          >
            contact us
          </Link>
        </Container>
      </div>
    </>
  );
}

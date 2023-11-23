import Container from "@/components/Container";
import { PersonnelCard } from "@/components/PersonnelCard";

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
              work in a new way.” Cristian Duncan
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
    </>
  );
}

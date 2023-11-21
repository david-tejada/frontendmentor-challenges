import Container from "@/components/Container";
import { Testimonial } from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-green-600 bg-pattern-home-2 bg-bottom bg-no-repeat pb-48 pt-4 lg:bg-[url('/bg-pattern-home-2.svg'),_url('/bg-pattern-home-1.svg')] lg:bg-[position:bottom_right_20%,top_10%_left_-100px] lg:pt-8">
        <Container className="relative grid lg:grid-cols-2 lg:items-end lg:gap-20">
          <h1 className="mx-auto max-w-[10ch] text-center text-[40px] font-bold leading-10 lg:mx-0 lg:shrink-0 lg:grow-[2] lg:text-left lg:text-7xl xl:text-8xl">
            Find the best <em className="not-italic text-coral">talent</em>
          </h1>
          <p className="mx-auto mt-8 max-w-[52ch] text-center leading-7 lg:mx-0 lg:shrink lg:grow lg:text-left lg:before:absolute lg:before:top-0 lg:before:h-1 lg:before:w-12 lg:before:bg-blue">
            Finding the right people and building high performing teams can be
            hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.
          </p>
        </Container>
      </div>

      <div className="bg-green-700 bg-pattern-home-3 bg-[top_right_-100px] bg-no-repeat pb-20 pt-24 lg:bg-[bottom_right_-100px] lg:py-48">
        <Container className="grid lg:grid-cols-2 lg:gap-20">
          <h2 className="relative mr-[40%] text-3xl font-bold leading-none before:absolute before:top-[-1em] before:h-1 before:w-12 before:bg-coral lg:mr-8 lg:text-5xl">
            Build & manage distributed teams like no one else.
          </h2>
          <div className="mt-16 grid gap-4 text-center md:text-left lg:mt-0 lg:gap-8">
            <div className="md:relative md:ml-20 lg:ml-0">
              <Image
                src="icon-person.svg"
                alt=""
                width="65"
                height="72"
                className="mx-auto md:absolute md:left-[-5rem]"
              />
              <h3 className="mt-4 font-bold text-coral md:mt-0">
                Experience Individuals
              </h3>
              <p className="mx-auto max-w-[50ch] pt-4 opacity-80 md:mx-0">
                Our network is made up of highly experienced professionals who
                are passionate about what they do.
              </p>
            </div>
            <div className="mt-8 md:relative md:ml-20 md:mt-0 lg:ml-0">
              <Image
                src="icon-cog.svg"
                alt=""
                width="65"
                height="72"
                className="mx-auto md:absolute md:left-[-5rem]"
              />
              <h3 className="mt-4 font-bold text-coral lg:mt-0">
                Easy to Implement
              </h3>
              <p className="mx-auto max-w-[50ch] pt-4 opacity-80 md:mx-0">
                Our processes have been refined over years of implementation
                meaning our teams always deliver.
              </p>
            </div>
            <div className="mt-8 md:relative md:ml-20 md:mt-0 lg:ml-0">
              <Image
                src="icon-chart.svg"
                alt=""
                width="65"
                height="72"
                className="mx-auto md:absolute md:left-[-5rem]"
              />
              <h3 className="mt-4 font-bold text-coral lg:mt-0">
                Enhanced Productivity
              </h3>
              <p className="mx-auto max-w-[50ch] pt-4 opacity-80 md:mx-0">
                Our customized platform with in-built analytics helps you manage
                your distributed teams.
              </p>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-green-600 bg-[url('/bg-pattern-home-4-about-3.svg'),url('/bg-pattern-home-5.svg')] bg-[position:top_left,bottom_right] bg-no-repeat py-36">
        <Container className="text-center">
          <h2 className="mx-auto max-w-[35ch] text-3xl leading-none">
            Delivering real results for top companies. Some of our{" "}
            <em className="not-italic text-blue">success stories.</em>
          </h2>
          <div className="my-10 grid gap-10 lg:grid-cols-3">
            <Testimonial
              author="Kady Baker"
              title="Product Manager at Bookmark"
              avatarUrl="/avatar-kady.jpg"
            >
              “The team perfectly fit the specialized skill set required. They
              focused on the most essential features helping us launch the
              platform eight months faster than planned.”
            </Testimonial>

            <Testimonial
              author="Aiysha Reese"
              title="Founder of Manage"
              avatarUrl="/avatar-aiysha.jpg"
            >
              “We needed to automate our entire onboarding process. The team
              came in and built out the whole journey. Since going live, user
              retention has gone through the roof!”
            </Testimonial>

            <Testimonial
              author="Arthur Clarke"
              title="Co-founder of MyPhysio"
              avatarUrl="/avatar-arthur.jpg"
            >
              “Amazing. Our team helped us build an app that delivered a new
              experience for hiring a physio. The launch was an instant success
              with 100k downloads in the first month.”
            </Testimonial>
          </div>
        </Container>
      </div>
    </>
  );
}

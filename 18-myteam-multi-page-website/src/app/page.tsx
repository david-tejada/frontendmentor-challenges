import Container from "@/components/Container";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-pattern-home-2 bg-green-600 bg-bottom bg-no-repeat pb-48 pt-4 lg:bg-[url('/bg-pattern-home-2.svg'),_url('/bg-pattern-home-1.svg')] lg:bg-[position:bottom_right_20%,top_10%_left_-100px] lg:pt-8">
        <Container className="relative grid lg:items-end lg:grid-cols-2 lg:gap-20">
          <h1 className="mx-auto max-w-[10ch] text-center text-[40px] leading-10 lg:mx-0 lg:shrink-0 lg:grow-[2] lg:text-left lg:text-7xl xl:text-8xl">
            Find the best <em className="not-italic text-coral">talent</em>
          </h1>
          <p className="mx-auto lg:mx-0 mt-8 max-w-[52ch] text-center leading-7 lg:shrink lg:grow lg:text-left lg:before:absolute lg:before:top-0 lg:before:h-1 lg:before:w-12 lg:before:bg-blue">
            Finding the right people and building high performing teams can be
            hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.
          </p>
        </Container>
      </div>

      <div className="bg-pattern-home-3 bg-green-700 bg-[top_right_-100px] bg-no-repeat pb-20 pt-24 lg:py-48 lg:bg-[bottom_right_-100px]">
        <Container className="grid lg:grid-cols-2 lg:gap-20">
          <h2 className="relative mr-[40%] text-3xl leading-none before:absolute before:top-[-1em] before:h-1 before:w-12 before:bg-coral lg:mr-8 lg:text-5xl">
            Build & manage distributed teams like no one else.
          </h2>
          <div className="mt-16 grid gap-4 lg:gap-8 text-center md:text-left lg:mt-0">
            <div className="md:relative md:ml-20 lg:ml-0">
              <Image
                src="icon-person.svg"
                alt=""
                width="65"
                height="72"
                className="mx-auto md:absolute md:left-[-5rem]"
              />
              <h3 className="mt-4 text-coral md:mt-0">Experience Individuals</h3>
              <p className="pt-4 max-w-[50ch] mx-auto md:mx-0">
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
              <h3 className="mt-4 text-coral lg:mt-0">Easy to Implement</h3>
              <p className="pt-4 max-w-[50ch] mx-auto md:mx-0">
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
              <h3 className="mt-4 text-coral lg:mt-0">Enhanced Productivity</h3>
              <p className="pt-4 max-w-[50ch] mx-auto md:mx-0">
                Our customized platform with in-built analytics helps you manage
                your distributed teams.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

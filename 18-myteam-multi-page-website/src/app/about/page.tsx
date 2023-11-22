import Container from "@/components/Container";

export default function About() {
  return (
    <>
      <div className="bg-green-600 bg-pattern-about-1 bg-[position:bottom_-100px_right_-100px] bg-no-repeat pb-24 pt-4 md:bg-[position:bottom_right_-100px] lg:pt-8">
        <Container className="relative grid lg:grid-cols-[4fr_8fr]">
          <h1 className="mx-auto max-w-[10ch] text-center text-4xl font-bold leading-10 lg:mx-0 lg:mt-4 lg:shrink-0 lg:grow-[2] lg:text-left lg:text-6xl">
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
    </>
  );
}

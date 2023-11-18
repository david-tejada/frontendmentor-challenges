import Container from "@/components/Container";

export default function Home() {
  return (
    <div className="bg-pattern-home-2 bg-green-600 bg-bottom bg-no-repeat pb-48 pt-4 lg:bg-[url('/bg-pattern-home-2.svg'),_url('/bg-pattern-home-1.svg')] lg:bg-[position:bottom_right_20%,top_10%_left_-100px] lg:pt-8">
      <Container className="relative grid lg:flex lg:items-end">
        <h1 className="mx-auto max-w-[10ch] text-center text-[40px] leading-10 lg:mx-0 lg:shrink-0 lg:text-left lg:text-6xl xl:text-8xl">
          Find the best <em className="not-italic text-coral">talent</em>
        </h1>
        <p className="mx-auto mt-8 max-w-[52ch] text-center leading-7 lg:shrink lg:text-left lg:before:absolute lg:before:top-0 lg:before:h-1 lg:before:w-12 lg:before:bg-blue">
          Finding the right people and building high performing teams can be
          hard. Most companies aren’t tapping into the abundance of global
          talent. We’re about to change that.
        </p>
      </Container>
    </div>
  );
}

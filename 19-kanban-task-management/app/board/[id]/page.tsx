import { Header } from "@/app/ui/header";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <Header boardId={params.id} />
      <main>
        <p>Board {params.id}</p>
      </main>
      ;
    </>
  );
}

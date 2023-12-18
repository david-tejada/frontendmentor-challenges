import { promises as fs } from "fs";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/app/lib/data.json", "utf8");
  const defaultBoards = JSON.parse(file);

  return (
    <main>
      <p className="bg-red-500 p-4 text-body-lg">Hello world</p>
    </main>
  );
}

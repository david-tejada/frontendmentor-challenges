interface DisplayProps {
  value: string;
}

export function Display({ value }: DisplayProps) {
  return (
    <div className="my-8 grid h-24 items-center rounded-lg bg-background-screen p-6 text-right text-4xl">
      <div className="overflow-hidden">
        <p className="float-right">{value}</p>
      </div>
    </div>
  );
}

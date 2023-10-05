export function addThousandsSeparators(number: string) {
  const [integer, separator, decimals] = number.split(/(\.)/);
  console.log(integer, separator, decimals);

  if (!integer) return number;

  const chunks = [];
  let rest = integer;

  while (rest.length) {
    chunks.unshift(rest.slice(-3));
    rest = rest.slice(0, -3);
  }

  return `${chunks.join(",")}${separator ?? ""}${decimals ?? ""}`;
}

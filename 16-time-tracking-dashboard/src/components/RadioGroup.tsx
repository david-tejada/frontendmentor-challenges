import styles from "./RadioGroup.module.css";

// I'm not entirely sure how the generics work here, somebody in the TypeScript
// Discord proposed this solution so that `selected` must be one of the strings
// in `options`.
interface RadioGroupProps<T extends [] | readonly string[]> {
  name: string;
  options: T;
  selected: T[number];
  onChange(value: T[number]): void;
}

export function RadioGroup<
  T extends readonly ("" | (string & NonNullable<unknown>))[]
>({ name, options, selected, onChange }: RadioGroupProps<T>) {
  const radios = options.map((option, index) => {
    const id = `${name}-${option}`;
    return (
      <div key={index}>
        <input
          className="visually-hidden"
          type="radio"
          name={name}
          id={id}
          value={option}
          checked={option === selected}
          onChange={() => {
            onChange(option);
          }}
        />
        <label htmlFor={id}>{option}</label>
      </div>
    );
  });

  return <div className={styles["radio-group"]}>{radios}</div>;
}

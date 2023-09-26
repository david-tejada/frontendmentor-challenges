import styles from "./RadioGroup.module.css";

interface RadioGroupProps<T extends string> {
  name: string;
  options: T[];
  selected: T;
  onChange(value: T): void;
}

export function RadioGroup<T extends string>({
  name,
  options,
  selected,
  onChange,
}: RadioGroupProps<T>) {
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

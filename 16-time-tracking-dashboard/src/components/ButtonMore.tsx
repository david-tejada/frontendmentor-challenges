import styles from "./ButtonMore.module.css";

interface ButtonMoreProps {
  onMouseEnter(): void;
  onMouseLeave(): void;
}

export function ButtonMore({ onMouseEnter, onMouseLeave }: ButtonMoreProps) {
  return (
    <button
      onMouseEnter={() => {
        onMouseEnter();
      }}
      onMouseLeave={() => {
        onMouseLeave();
      }}
      type="button"
      className={styles.button}
    >
      <span className="visually-hidden">More</span>
      <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </svg>
    </button>
  );
}

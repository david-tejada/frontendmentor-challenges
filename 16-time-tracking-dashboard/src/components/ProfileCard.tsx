import { Period } from "../App";
import styles from "./ProfileCard.module.css";

interface ProfileCardProps {
  name: string;
  imageUrl: string;
  period: Period;
  onChange(value: Period): void;
}

export function ProfileCard({
  name,
  imageUrl,
  period,
  onChange,
}: ProfileCardProps) {
  return (
    <div className={styles["profile-card"]}>
      <div className={styles.header}>
        <img src={imageUrl} alt="" />
        <h1>
          Report for <span className={styles.name}>{name}</span>
        </h1>
      </div>
      <form className={styles["period-selector"]}>
        <input
          className="visually-hidden"
          type="radio"
          name="period"
          id="daily"
          value="daily"
          checked={period === "daily"}
          onChange={() => onChange("daily")}
        />
        <label htmlFor="daily">Daily</label>
        <input
          className="visually-hidden"
          type="radio"
          name="period"
          id="weekly"
          value="weekly"
          checked={period === "weekly"}
          onChange={() => onChange("weekly")}
        />
        <label htmlFor="weekly">Weekly</label>
        <input
          className="visually-hidden"
          type="radio"
          name="period"
          id="monthly"
          value="monthly"
          checked={period === "monthly"}
          onChange={() => onChange("monthly")}
        />
        <label htmlFor="monthly">Monthly</label>
      </form>
    </div>
  );
}

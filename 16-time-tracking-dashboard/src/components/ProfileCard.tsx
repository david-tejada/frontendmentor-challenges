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
        <p>
          Report for <span className={styles.name}>{name}</span>
        </p>
      </div>
      <form className={styles["period-selector"]}>
        <input
          type="radio"
          name="period"
          id="daily"
          value="daily"
          checked={period === "daily"}
          onChange={() => onChange("daily")}
        />
        <label htmlFor="daily">Daily</label>
        <input
          type="radio"
          name="period"
          id="weekly"
          value="weekly"
          checked={period === "weekly"}
          onChange={() => onChange("weekly")}
        />
        <label htmlFor="weekly">Weekly</label>
        <input
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

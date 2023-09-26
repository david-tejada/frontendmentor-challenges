import { Period } from "../App";
import styles from "./ProfileCard.module.css";
import { RadioGroup } from "./RadioGroup";

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
      <form>
        <RadioGroup
          name="period-selector"
          options={["daily", "weekly", "monthly"]}
          selected={period}
          onChange={onChange}
        ></RadioGroup>
      </form>
    </div>
  );
}

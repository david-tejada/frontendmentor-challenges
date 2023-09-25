import { useRef } from "react";
import { Period } from "../App";
import { ButtonMore } from "./ButtonMore";
import styles from "./Card.module.css";

interface Timeframe {
  current: number;
  previous: number;
}

interface Timings {
  title: string;
  timeframes: {
    daily: Timeframe;
    weekly: Timeframe;
    monthly: Timeframe;
  };
}

interface CardProps {
  timings: Timings;
  period: Period;
}

export function Card({ timings, period }: CardProps) {
  const { current, previous } = timings.timeframes[period];

  const currentSuffix = current === 1 ? "hr" : "hrs";
  const previousSuffix = previous === 1 ? "hr" : "hrs";

  const previousLabel =
    period === "daily"
      ? "Yesterday"
      : period === "weekly"
      ? "Last Week"
      : "Last Month";

  const categoryClassname = timings.title.toLowerCase().split(" ").join("-");

  const contentClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    const link = event.currentTarget.querySelector("a")!;
    const moreButton = event.currentTarget.querySelector("button");
    if (
      event.target !== link &&
      event.target instanceof Node &&
      !moreButton?.contains(event.target)
    ) {
      link.click();
    }
  };

  const content = useRef<HTMLDivElement | null>(null);

  const handleButtonMouseEnter = () => {
    if (content.current) {
      content.current.style.backgroundColor = "hsl(235 46% 20%)";
    }
  };
  const handleButtonMouseLeave = () => {
    if (content.current) {
      content.current.removeAttribute("style");
    }
  };

  return (
    <div className={`${styles.card} ${styles[categoryClassname]}`}>
      <div
        ref={content}
        onClick={contentClickHandler}
        className={styles.content}
      >
        <div className={styles.title}>
          <h2>
            <a href="#">{timings.title}</a>
          </h2>
          <ButtonMore
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
          />
        </div>
        <div className={styles.timings}>
          <p className={styles["current-timing"]}>
            {current}
            {currentSuffix}
          </p>
          <p className={styles["previous-timing"]}>
            {previousLabel} - {previous}
            {previousSuffix}
          </p>
        </div>
      </div>
    </div>
  );
}

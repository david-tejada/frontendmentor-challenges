import { Card } from "./components/Card";
import data from "./assets/data.json";
import styles from "./App.module.css";
import { ProfileCard } from "./components/ProfileCard";
import profileImageUrl from "./assets/image-jeremy.png";
import { useState } from "react";

export type Period = "daily" | "weekly" | "monthly";
const defaultPeriod: Period = "daily";

function App() {
  const [period, setPeriod] = useState(defaultPeriod);

  const timingsList = data.map((timings, index) => (
    <Card key={index} timings={timings} period={period}></Card>
  ));

  return (
    <main>
      <div className={styles.container}>
        <ProfileCard
          name="Jeremy Robson"
          imageUrl={profileImageUrl}
          period={period}
          onChange={(value) => {
            setPeriod(value);
          }}
        />
        {timingsList}
      </div>
    </main>
  );
}

export default App;

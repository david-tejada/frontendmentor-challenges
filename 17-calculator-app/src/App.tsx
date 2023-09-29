import "./App.css";
import { ThemeSwitcher } from "./Components/ThemeSwitcher";

function App() {
  return (
    <div className="mx-auto max-w-lg text-content">
      <header className="flex items-center justify-between">
        <h1 className="text-4xl">calc</h1>
        <ThemeSwitcher />
      </header>
    </div>
  );
}

export default App;

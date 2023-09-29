import "./App.css";
import { ThemeSwitcher } from "./Components/ThemeSwitcher";

function App() {
  return (
    <div className="mx-auto max-w-lg">
      <header className="flex items-center justify-between text-white">
        <h1 className="text-4xl">calc</h1>
        <ThemeSwitcher />
      </header>
    </div>
  );
}

export default App;

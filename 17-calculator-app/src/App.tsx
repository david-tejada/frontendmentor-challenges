import "./App.css";
import { Calculator } from "./Components/Calculator";
import { ThemeSwitcher } from "./Components/ThemeSwitcher";

function App() {
  return (
    <div className="mx-auto max-w-lg text-content">
      <header className="flex items-center justify-between">
        <h1 className="text-4xl">calc</h1>
        <ThemeSwitcher />
      </header>
      <main>
        <Calculator />
      </main>
    </div>
  );
}

export default App;

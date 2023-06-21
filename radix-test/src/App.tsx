import "./App.css";
import { Button } from "./components/Button";
import "./styles/global.css";

export function App() {
  return (
    <div className="w-screen h-screen bg-zinc-900 flex items-center justify-center gap-4">
      <Button>Create account</Button>
      <Button asChild>
        <a href="#">Link to website</a>
      </Button>
    </div>
  );
}

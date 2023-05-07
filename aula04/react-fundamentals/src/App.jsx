import { StatusText } from "./components/StatusText";
import { Subtitle } from "./components/Subtitle";
import Title from "./components/Title";
import TrueTest from "./components/TrueTest";

/* sempre que for criar um componente, usa-se PascalCase */
export default function App() {
  return (
    <div>
      <Title /> {/* <-- Forma de chamar um componente */}
      <Subtitle />
      <StatusText />
      <TrueTest />
    </div>
  );
}

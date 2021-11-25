import "./App.css";
import CUseState from "./components/CHooks/CUseState/CUseState";
import CUseEffect from "./components/CHooks/CUseEffect/CUseEffect";
import CUseRef from "./components/CHooks/CUseRef/CUseRef";

function App() {
  return (
    <div>
      <CUseState />
      <CUseEffect />
      <CUseRef />
    </div>
  );
}

export default App;

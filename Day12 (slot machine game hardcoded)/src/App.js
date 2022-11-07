import "./styles.css";
import { SlotMac } from "./SlotMachine";
// import { Condition } from "./Condition";

export default function App() {
  return (
    <>
      <h1>
        Welcome to <span style={{ fontWeight: "bold" }}>Slot Machine</span>
      </h1>

      <div className="App">
        <hr />
        <SlotMac x="😃" y="😃" z="😃" />

        <hr />

        <SlotMac x="😃" y="🙄" z="😃" />

        <hr />

        <SlotMac x="⏱" y="⏱" z="⏱" />
      </div>
    </>
  );
}

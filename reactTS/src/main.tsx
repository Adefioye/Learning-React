import ReactDOM from "react-dom/client";
import GuestList from "./state/GuestList";

function App() {
  return (
    <div>
      <h1>Hi there</h1>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <GuestList />
);

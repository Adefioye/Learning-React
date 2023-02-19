import ReactDOM from "react-dom/client";
import GuestList from "./state/GuestList";
import SearchUser from "./state/SearchUser";
import EventComponent from "./event/EventComponent";

function App() {
  return (
    <div>
      <h1>Hi there</h1>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <EventComponent />
);

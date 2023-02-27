import ReactDOM from "react-dom/client";
// import GuestList from "./state/GuestList";
// import SearchUser from "./state/SearchUser";
// import EventComponent from "./event/EventComponent";
import SearchUser from "./refs/SearchUser";

function App() {
  return (
    <div>
      <SearchUser />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);

import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
  {
    title: "What is React?",
    content: "React is a front-end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among sonftware engineers",
  },
  {
    title: "How do you use React?",
    content: "We use React by building components",
  },
];

const App = () => {
  return (
    <div>
      <Search />
    </div>
  );
};
export default App;

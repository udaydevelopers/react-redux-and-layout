import React from "react";
import Accordion from "./Accordian";

const App = () => {
  const data = [
    { title: "Section 1", content: "This is the content for section 1." },
    { title: "Section 2", content: "This is the content for section 2." },
    { title: "Section 3", content: "This is the content for section 3." },
  ];

  return (
    <div className="container p-8">
      <h1 className="text-2xl mb-4">React Accordion</h1>
      <Accordion items={data} />
    </div>
  );
};

export default App;

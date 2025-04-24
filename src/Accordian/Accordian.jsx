import React, {useState} from "react";
import AccordionItem from "./AccordianItem";

const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);
  
    const toggleItem = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
      <div className="w-full max-w-md mx-auto border rounded-md shadow-md">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isOpen={openIndex === index}
            onClick={() => toggleItem(index)}
          />
        ))}
      </div>
    );
  };
  
  export default Accordion;
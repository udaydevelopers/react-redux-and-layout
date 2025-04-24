const AccordionItem = ({ title, content, isOpen, onClick }) => (
    <div className="border-b">
      <button
        onClick={onClick}
        className="w-full text-left p-4 flex justify-between items-center"
      >
        <span>{title}</span>
        <span>{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <div className="p-4 pt-0 text-gray-700">{content}</div>}
    </div>
  );

  export default AccordionItem;
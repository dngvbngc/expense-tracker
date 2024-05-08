import { useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";
import Filter from "./components/Filter";

const App = () => {
  const [entries, setEntries] = useState([
    { id: 0, description: "milk", amount: 5, category: "Groceries" },
    { id: 1, description: "apples", amount: 7, category: "Groceries" },
  ]);

  const [currentCategory, setCurrentCategory] = useState("");

  // Dynamically computed when state of current category is changed, no need a function to update manually
  const filteredEntries = currentCategory
    ? entries.filter((entry) => entry.category === currentCategory)
    : entries;

  const [currentID, setCurrentID] = useState(2);

  const handleDelete = (id: number) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  return (
    <div>
      <Form
        onSubmit={(data) => {
          setEntries([...entries, { ...data, id: currentID }]);
          setCurrentID(currentID + 1);
        }}
      />
      <div className="mb-3 mt-3">
        <Filter onSelectCategory={(category) => setCurrentCategory(category)} />
      </div>
      <Table entries={filteredEntries} onDelete={handleDelete} />
    </div>
  );
};

export default App;

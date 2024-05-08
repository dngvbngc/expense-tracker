import React from "react";

interface Props {
  onSelectCategory: (category: string) => void;
}

const Filter = ({ onSelectCategory }: Props) => {
  return (
    <div className="form-group">
      <select
        className="form-select"
        onChange={(event) => onSelectCategory(event.target.value)}
      >
        <option value="">All categories</option>
        <option value="Groceries">Groceries</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
      </select>
    </div>
  );
};

export default Filter;

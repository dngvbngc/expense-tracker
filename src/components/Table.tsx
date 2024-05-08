import React from "react";
import { useState } from "react";

interface EntriesProp {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  entries: EntriesProp[];
  onDelete: (id: number) => void;
}

const Table = ({ entries, onDelete }: Props) => {
  if (entries.length === 0) return null;

  return (
    <>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={entry.id}>
              <td>{index + 1}</td>
              <td>{entry.description}</td>
              <td>{entry.amount}</td>
              <td>{entry.category}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => onDelete(entry.id)} // how to pass arguments
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot className="">
          <tr>
            <td>Total:</td>
            <td>
              $
              {entries.reduce((acc, entry) => entry.amount + acc, 0).toFixed(2)}
            </td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default Table;

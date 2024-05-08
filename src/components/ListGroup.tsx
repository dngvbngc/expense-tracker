function ListGroup() {
  const items = ["New York", "Boston", "Singapore", "Ha Noi"];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li
            key={item}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {item}
            <span className="badge text-bg-primary rounded-pill">14</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

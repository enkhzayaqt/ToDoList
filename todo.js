function Todo({ todo, index, remove }) {
  function handle() {
    console.log("Ping:", index);
    remove(index);
  }
  return (
    <div className="todo">
      <div>{todo.text}</div>
      <button className="btn-remove" onClick={handle}>
        x
      </button>
    </div>
  );
}

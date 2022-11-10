let TodoLists = (props) => {
  let deleteItems = () => {
    console.log("deleted");
  };

  return (
    <div className="todo_style">
      <i
        className="fa fa-items"
        aria-hidden="true"
        onClick={() => {
          props.onSelect(props.id);
        }}
      />
      <li>{props.text}</li>
    </div>
  );
};

export { TodoLists };

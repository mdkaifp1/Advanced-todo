import { addList } from "../../actions/index";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "./Input.css";
const Input = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleAddList = () => {
    let counter = 1;
    if (input.trim() !== "") {
      const id = counter.toString();
      counter = counter + 1;
      dispatch(
        addList({
          input: input,
          id: id
        })
      );
      setInput("");
    }
  };
  return (
    <>
      <div className="container">
        <input
          placeholder="Todo-list container"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAddList}>+</button>
      </div>
    </>
  );
};

export default Input;

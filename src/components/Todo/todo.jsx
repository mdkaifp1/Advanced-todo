import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editList } from "../../actions/index";
import i from "../../Assets/Group 15510.png";
import "./todo.css";
import edit from "../../Assets/Vector (1).png";

const Todo = ({ listId }) => {
  const [head, setHead] = useState("");
  const [desc, setDesc] = useState("");
  const allData = useSelector((state) => state.todoReducer.data);
  const data = allData.filter((e) => e.data.listId === listId);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (head.trim() !== "") {
      dispatch(
        addTodo({
          head: head,
          desc: desc,
          listId: listId
        })
      );
      setHead("");
      setDesc("");
    }
  };

  return (
    <>
      <div className="main_card-containner">
        <div className="left_card">
          <div className="icon_head">
            <img src={i} alt="head-icon" />
            <input
              placeholder="Add Todo"
              value={head}
              onChange={(e) => setHead(e.target.value)}
            />
          </div>
          <button onClick={handleAddTodo}>+</button>
        </div>
        <textarea
          type="textarea"
          value={desc}
          placeholder="Add Todo Description"
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      {data.map((e) => {
        return (
          <div className="card-containner" key={e.id}>
            <div className="show_card">
              <div className="show-icon_head">
                <img src={i} alt="head-icon" />
                <h1>{e.data.head}</h1>
              </div>
              <button onClick={() => dispatch(editList(e.id))}>
                <img src={edit} alt="Edit" />
              </button>
            </div>
            <p>{e.data.desc}</p>
          </div>
        );
      })}
    </>
  );
};

export default Todo;

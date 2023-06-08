import Todo from "../Todo/todo";
import { useSelector } from "react-redux";
import "./list.css";
const List = () => {
  const data = useSelector((state) => state.listReducer.data);
  return (
    <>
      {data.map((e) => {
        return (
          <div className="data_main-container">
            <div className="topbar">
              <h1>List: {e.data.input}</h1>
            </div>
            <Todo listId={e.id} />
          </div>
        );
      })}
    </>
  );
};

export default List;

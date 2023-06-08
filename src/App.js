import "./styles.css";
import icon from "./Assets/slide-left.png";
import Home from "./Assets/Group.png";
import world from "./Assets/Vector.png";
import List from "./components/List/list";
import Input from "./components/Input/Input";
import arrow from "./Assets/Path.png";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTodo, editList } from "./actions/index";
export default function App() {
  // const [head, sethead] = useState("");
  const [heading, setHeading] = useState("");
  // const [desc, setdesc] = useState("");
  const [description, setDescription] = useState("");
  const Edit = useSelector((state) => state.editReducer.data);
  const dispatch = useDispatch();
  const allData = useSelector((state) => state.todoReducer.data);
  const dat = allData.filter((e) => e.id === Edit.id);
  const handleUpdateTodo = (id) => {
    if (heading.trim() !== "") {
      dispatch(
        updateTodo({
          id: id,
          head: heading,
          desc: description,
          listId: dat[0].data.listId
        })
      );
      dispatch(editList(1));
      setHeading("");
      setDescription("");
    }
  };
  const editItemId = useSelector((state) => state.editReducer.data.id);

  useEffect(() => {
    if (editItemId !== null) {
      const editedItem = allData.find((item) => item.id === editItemId);
      if (editedItem) {
        setHeading(editedItem.data.head);
        setDescription(editedItem.data.desc);
      }
    } else {
      setHeading("");
      setDescription("");
    }
  }, [editItemId, allData]);
  return (
    <div className="App">
      <div className="top_bar">
        Lorem Ipsum is simply dummy text of the printing
      </div>
      <div className="main_container">
        <div className="right_container">
          <div className="right_topcontainer">
            <div className="profile_container">
              <div className="Profile">N</div>
              <h2>Name</h2>
              <div className="profile_icon">
                <img src={icon} alt="icon" />
              </div>
            </div>
            <div className="sub_container">
              <div>
                <img src={Home} alt="home" />
                <p>Home</p>
              </div>
              <div>
                <img src={Home} alt="section" />
                <p>Section 1</p>
              </div>
            </div>
          </div>

          <div className="bottom">
            <img src={world} alt="globe" />
          </div>
        </div>
        <div className="divider">
          <div className="inner_head">
            <p>section</p>
          </div>
          <div className="Sub_container">
            <div className="left_container">
              <List />
              <Input />
            </div>
            <div className="edit_bar">
              <div className="sub_head-edit">
                <img src={arrow} alt="arrow" />
                <p>Edit todo</p>
              </div>
              <input
                placeholder="Edit Todo"
                onChange={(e) => setHeading(e.target.value)}
                value={heading}
              />
              <textarea
                placeholder="Edit todo description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
              <button onClick={() => handleUpdateTodo(dat[0].id)}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

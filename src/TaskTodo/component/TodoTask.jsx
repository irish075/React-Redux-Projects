import { useSelector, useDispatch } from "react-redux";
import { addTask, removeTask, editTask } from "../store/todoReducer";
import React, { useState } from "react";

function TodoTask() {
  const [input, setInput] = useState("");
  const [editingId, setEditId] = useState(null);
  const [editTaskText, setEditTaskText] = useState("");

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // Handle Add Task
  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim() === "") return;
    const newTask = { id: Date.now(), text: input };
    dispatch(addTask(newTask));
    setInput("");
  };

  // Handle Edit Task
  const handleEdit = (e) => {
    e.preventDefault();
    if (editTaskText.trim() === "") return;
    dispatch(editTask({ id: editingId, text: editTaskText }));
    setEditId(null);
    setEditTaskText("");
  };

  return (
    <div className="main-div">
      <h1>Simple Todo Project With Redux Toolkit</h1>
      {/* Add Task Form */}
      <form onSubmit={handleSubmit} className="first-form">
        <input
          type="text"
          placeholder="Add Task Here"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>

      {/* Task List */}
      <div className="list">
        <ul>
          {todos.map((todo) => (
            <React.Fragment key={todo.id}>
              <li>
                {editingId === todo.id ? (
                  // Edit Task Form
                  <form onSubmit={handleEdit} className="form-sec">
                    <input
                      type="text"
                      placeholder="Edit task"
                      value={editTaskText}
                      onChange={(e) => setEditTaskText(e.target.value)}
                    />
                    <button className="save" type="submit">
                      Save
                    </button>
                    <button
                      className="cancel"
                      type="button"
                      onClick={() => setEditId(null)}
                    >
                      Cancel
                    </button>
                  </form>
                ) : (
                  // Normal Task Display
                  <>
                    {todo.text}
                    <div className="btn-div">
                      <button
                        className="editbtn"
                        onClick={() => {
                          setEditId(todo.id);
                          setEditTaskText(todo.text);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="remove"
                        onClick={() => dispatch(removeTask(todo.id))}
                      >
                        Remove
                      </button>
                    </div>
                  </>
                )}
              </li>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoTask;

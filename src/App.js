import Todo from "./components/Todo";
import Filter from "./components/Filter";
import Form from "./components/Form";
import React, { useState } from "react";
import {nanoid} from "nanoid";

const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {

  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState('All');

  function addTask(name) {
    console.log('add task')
    const newTask = {id: "todo-" + nanoid(), name: name, completed: false};
    setTasks([...tasks, newTask]);
    localStorage.setItem("TODO-MOZILLA", JSON.stringify([...tasks, newTask]));
  }

  function editTask(id, newName) {

    const editedTaskList = tasks.map(task => {
    // if this task has the same ID as the edited task
      if (id === task.id) {
        //
        return {...task, name: newName}

      }
      return task;
    });
    setTasks(editedTaskList);
    localStorage.setItem("TODO-MOZILLA", JSON.stringify(editedTaskList));
  }
  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
    localStorage.setItem("TODO-MOZILLA", JSON.stringify(updatedTasks));
  }
  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
    localStorage.setItem("TODO-MOZILLA", JSON.stringify(remainingTasks));
  }
  
  const taskList = tasks
.filter(FILTER_MAP[filter])
.map(task => (
  <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
    toggleTaskCompleted={toggleTaskCompleted}
    deleteTask={deleteTask}
    editTask={editTask}
  />
));
  const filterList = FILTER_NAMES.map(name => (
    <Filter
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));
  const headingText = `${taskList.length} tasks remaining`;
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
        <Form addTask={addTask}/>
      <div className="filters btn-group stack-exception">
      {filterList}
      </div>

      <h2 id = "list-heading">
        {headingText}
      </h2>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}
export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false }
];

const myJSON = JSON.stringify(DATA);

let myStorage;
if ( localStorage.getItem("TODO-MOZILLA") === null) {
  console.log('no storage')
  localStorage.setItem("TODO-MOZILLA", myJSON);
  console.log(myStorage)
} else {
myStorage = JSON.parse(localStorage.getItem("TODO-MOZILLA"));
console.log('yes storage')
console.log(myStorage)

}

ReactDOM.render(
  <React.StrictMode>
    <App tasks = {myStorage} />
  </React.StrictMode>,
  document.getElementById('root')
);
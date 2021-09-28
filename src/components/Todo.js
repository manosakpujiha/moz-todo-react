
export default function Todo(prop) {
  return (
    <li className = "todo stack-small">
          <div className = "c-cb">
            <input id = {prop.id} type="checkbox" defaultChecked = {prop.completed} onChange={() => prop.toggleTaskCompleted(prop.id)} />
            <label className = "todo-label" htmlFor = {prop.id}>
              {prop.name}
            </label>
          </div>
          <div className = "btn-group" >
            <button type="button" className = "btn">
              Edit <span className = "visually-hidden" > {prop.name} </span>
            </button>
            <button type="button" className = "btn btn__danger" onClick= {() => prop.deleteTask(prop.id)}>
              Delete <span className = "visually-hidden" > {prop.name} </span>
            </button>
          </div>
        </li>
  );
}
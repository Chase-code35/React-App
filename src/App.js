import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import ToDoList from './components/list.js';

function App() {
  const [listItem, setListItem] = useState([]);
  const [currentInput, setCurrentInput] = useState("");

  const addToList = (e) => {
    e.preventDefault();
    setListItem([...listItem, currentInput]);
  }

  const onClickDelete = (index) => {
    setListItem([...listItem.slice(0,index)
    ].concat(listItem.slice(index + 1)))
  }

  return (
    <div className="bg-light col-8 mx-auto">
      <form onSubmit={addToList}>
        <div className="row ml-4 mx-auto">
          <h2>To Do List</h2>
          <input className="form-control col-4 ml-4" onChange={(e) => setCurrentInput(e.target.value)} value={currentInput}></input>
          <input 
          className="btn btn-primary col-1 ml-4" 
          type="Submit" 
          value="Add"
          ></input>
        </div>
      </form>
      {
        listItem.map((sourceInput, i) => {
          return <ToDoList source={sourceInput} onClickDelete={onClickDelete} index={i}/>
        })
      }
    </div>
  );
}

export default App;

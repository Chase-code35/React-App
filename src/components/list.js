import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ToDoList = (props) => {
    const [isChecked, setIsChecked] = useState(false);

    return(
        <div>
            <h4>{props.source} <input type="checkbox" checked={isChecked} onChange={e => setIsChecked(e.target.checked)}/> <button onClick={() => props.onClickDelete(props.index)}>Delete</button></h4>
        </div>
    );
};

export default ToDoList;
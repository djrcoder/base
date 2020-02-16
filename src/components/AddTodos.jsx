
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addToDo } from "../redux";

function AddTodos() {
    const list = useSelector(state => state.today)
    const dispatch = useDispatch();
    const [newTodo, setTodo] = useState("");
    const onButtonClick = () => {
        dispatch(addToDo(newTodo))
    }



    return (
        <div>
            <ul>
                {list.map(item => (
                    <li key={item}> {item} </li>
                ))}
            </ul>
            <input onChange={event => setTodo(event.target.value)} value={newTodo} />
            <button onClick={onButtonClick}>Submit</button>
        </div>
    );
}

export default AddTodos;
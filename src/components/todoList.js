import { useState } from "react";
import ToDoCreate from './todoCreate.js';

function ToDoList() {

    const [listName, setListName] = useState('');
    const [list, setList] = useState([]);
    const handleSubmit = (event) => {
        event.preventDefault();
        if(listName.trim() !== '') {
            setList([...list, listName]);
            setListName('');
        }
    }
    const handleDelete = (index) => {
        const newList = [...list];
        newList.splice(index,1);
        setList(newList);
    }

    return (
        <div className={'todoListBox'}>
            <ul className={'todoList'}>
                {list.map((item, index) => (
                    <li key={index} className={'todoItem'}>
                        <label>
                        <span className={'labelText'}>{item}</span>
                        </label>
                        <button type={'button'} className={'btnDel'} onClick={() => handleDelete(index)}>삭제</button>
                    </li>
                ))}
            </ul>
            
            <ToDoCreate listName={listName} setListName={setListName} handleSubmit={handleSubmit} />
        </div>
    )
}

export default ToDoList;
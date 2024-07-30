import { useState } from "react";

function TodoCreate({listName, setListName, handleSubmit}) {

    // const [list, setList] = useState([]);
    // const [listName, setListName] = useState('');
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     if(listName.trim() !== '') {
    //         setList([...list, listName]);
    //         setListName('');
    //     }
    // }

    return(
        <form onSubmit={handleSubmit}>
            <div className={'createArea'}>
            <input type='text' name='list' className={'inputText'} placeholder={'Entering to-do list~!'} value={listName} onChange={(event) => setListName(event.target.value)}></input>
            <button className={'btnEnter'}><span className={'arrowIcon'}></span>입력</button>
            </div>
        </form>   
    )
}
  
export default TodoCreate;
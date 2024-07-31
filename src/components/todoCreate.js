// import { useState } from "react";

function TodoCreate({listName, setListName, handleSubmit}) {
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <input type='text' name='list' className={'inputText'} placeholder={'할 일 적어주기'} value={listName} onChange={(event) => setListName(event.target.value)}></input>
                <button>입력</button>
            </div>
        </form>   
    )
}
  
export default TodoCreate;
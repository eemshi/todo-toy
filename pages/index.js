import React, {useState} from 'react'
import ToDoItem from '../src/ToDoItem'

const ToDoList = () => {
    const [items, setItems] = useState(['first item']);
    const [newItem, setNewItem] = useState('')
    return (
        <div>
            <input type="text" 
                id="addItem" 
                name="addItem" 
                placeholder="enter new item"
                onChange={(e) => setNewItem(e.target.value)} />
            <input type="submit" value="Add Item"
                onClick={() => {
                    setItems(items.push(newItem))
                    console.log(items)
                }}/>
                
            {/* <div>
                {items.map((item, i) => {
                    return <ToDoItem itemId={i} text={item} />
                })}
            </div> */}
        </div>
    )
}
  
export default ToDoList


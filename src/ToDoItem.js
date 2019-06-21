import React, {useState} from 'react'

const ToDoItem = (itemId, text) => {
    const [complete, setComplete] = useState(false)
    return (
        <div>
            <input type="checkbox" name={itemId} id={itemId}
                onChange={() => {
                    setComplete(!complete)
                    console.log(complete)
                }}/>{text}
        </div>
    )
}

export default ToDoItem
import {useState} from 'react'
export default AddItem = ()=>{
    const [taskList, setTaskList] = useState(listOftasks);

    const addItemToList = () => {
        const newList = [
            ...taskList,
            {
                id: taskList.Length,
                task: newItemTask,
                priority: setNewItemPriority,
                Status: "imcomplete"
            },
        ];
        setTaskList(newList);
    };

    return(
        <div>
        <button onClick={addItemList} disabled={!newItemTask}>
            Add Item
        </button>
        <input
            style={{backgroundColor: "white", color: "black"}}
            value={newItemTask}
            onchange={(event) => {
             setNewItemTask.(event.target.value);
            }}
            />
            <select
                style={{ backgroundColor: "white", color: "black"}}
                onChange={(ev) => {
                    setNewItemPriority(ev.target.value);
                }}
                >
                 <option value="high">High</option>
                 <option value="medium">Medium</option>
                 <option value="low">Low</option>
                </select>
                </div>
    )
}
import React, { useEffect, useState } from "react"
import listdata from '../../listdata';
    
import { collection, addDoc, doc } from 'firebase/firestore'
import db from '../db'


function Form (props) {

    // const [allListItems, setAllListItems] = React.useState(listdata)
    const [newTaskTitle, setNewTaskTitle] = useState('')
    const [newTaskPriority, setNewTaskPriority] = useState('')
    //adding high into the ('') fixes the dropdown issuce but breaks the priority filter

    const [newTask, setNewTask] = useState({
        id: '',
        priority: '',
        status: false,
        title: ''
    })

    const allListItems = props.allListItems

    function changeHandler (e) {
       setNewTask({
        ...newTask,
        [e.target.name]: e.target.value
       })
    }

    async function submitHandler (e) {

        e.preventDefault()

        setNewTask({
            id: allListItems.length,
            priority: e,target,priority,
            status: false,
            title: e.target.title
        })

        const newList = [
            ...allListItems,
            newTask
        ]

        props.setAllListItems(newList)

        const c = collection(db, 'opal')
        const document = await addDoc(c, newTask)

        props.setAllListItems(c)
    }
    

        return (
            <div className="task-form">
            <form className="form" id="form" onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">task title</label>
                    <input type="text" className="form-control" id="title" name="title" required onChange={changeHandler}></input>
                </div>

                <div className="dropdowns">
                <div className="mb-3">
                    <label htmlFor="priority" className="form-label">task priority</label>
                    <select id="priority" name="priority" className="btn btn-outline-secondary dropdown-toggle" required onChange={changeHandler}>
                        <option value="high">high</option>
                        <option value="lo w">low</option>
                    </select>
                </div>

                {/* <div className="form-check">
                    <input className="form-check-input" type="radio" id="flexRadioDefault1"></input>
                    <label className="form-check-label" htmlfor="flexRadioDefault1">
                        <option>
                        Default radio
                        </option>
                    </label>
                    <input className="form-check-input" type="radio" id="flexRadioDefault1"></input>
                    <label className="form-check-label" htmlfor="flexRadioDefault1">
                         <option>
                        Default radio
                        </option>
                    </label>
                    </div> */}
                    


                {/* <div className="mb-3">
                    <label htmlFor="status" className="form-label">status</label>
                    <select id="status" name="status" className="btn btn-outline-secondary dropdown-toggle" onChange={}>
                        <option disabled value>Select an option</option>
                        <option value="complete">complete</option>
                        <option value="incomplete">incomplete</option>
                    </select>
                </div> */}
                </div>
                <div>
                    <button type="submit" id="enter" className="btn btn-primary btn-lg" onSubmit={(e) => submitHandler(e)}>Submit</button>
                </div>
            </form>
            </div>
        );

}


export default Form;


// import React, { useState } from 'react';
// import listdata from '../../listdata';


// function Form() {
//   const [inputValue, setInputValue] = useState('');
//   const [listdata, setlistdata] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newObject = { value: inputValue };
//     setArray([...array, newObject]);
//     setInputValue('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Input Value:
//         <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default Form;


  


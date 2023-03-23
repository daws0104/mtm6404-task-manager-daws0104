import React, { useEffect, useState } from "react"
import listdata from '../../listdata';
    



function Form (props) {

    // const [allListItems, setAllListItems] = React.useState(listdata)
    const [newTaskTitle, setNewTaskTitle] = useState('')
    const [newTaskPriority, setNewTaskPriority] = useState('')
    //adding high into the ('') fixes the dropdown issuce but breaks the priority filter

    const allListItems = props.allListItems

    function submitHandler (e) {

        e.preventDefault()

        const newList = [
            ...allListItems,
            {
                id: allListItems.length,
                title: newTaskTitle,
                pri: newTaskPriority,
                status: 'incomplete'
            }
        ]

        props.setAllListItems(newList)
    }
    

        return (
            <div className="task-form">
            <form className="form" id="form" onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">task title</label>
                    <input type="text" className="form-control" id="title" name="title" required onChange={(e) => {
                        setNewTaskTitle(e.target.value)
                    }}></input>
                </div>

                <div className="dropdowns">
                <div className="mb-3">
                    <label htmlFor="priority" className="form-label">task priority</label>
                    <select id="priority" name="priority" className="btn btn-outline-secondary dropdown-toggle" required onChange={e => {
                        setNewTaskPriority(e.target.value);
                    }}>
                        <option value="high">high</option>
                        <option value="low">low</option>
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
                    <button type="submit" id="enter" className="btn btn-primary btn-lg">Submit</button>
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


  


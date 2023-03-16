import React, { useEffect, useState } from "react"
import listdata from '../../listdata';
    



function Form (props) {

    // const [allListItems, setAllListItems] = React.useState(listdata)

    const allListItems = props.allListItems

    const [listItems, setListItems] = React.useState({
        id: 6,
        title: '',
        pri: '',
        status: ''
    })

    function titleChangeHandler (e) {
        setListItems({
            ...listItems,
            [e.target.name]: e.target.value,
        })
    }
    
    
    function submitHandler (e) {

        e.preventDefault()
    
        props.setAllListItems(allListItems, allListItems.push(listItems))
        console.log(allListItems)

    }
        return (
            <div className="task-form">
            <form className="form" id="form" onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">task title</label>
                    <input type="text" className="form-control" id="title" name="title" required onChange={titleChangeHandler}></input>
                </div>
                <div className="dropdowns">
                <div className="mb-3">
                    <label htmlFor="priority" className="form-label"> task priority</label>
                    <select id="pri" name="pri" className="btn btn-outline-secondary dropdown-toggle" onChange={titleChangeHandler}>
                        <option disabled value>Select an option</option>
                        <option value="high">high</option>
                        <option value="low">low</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="status" className="form-label">status</label>
                    <select id="status" name="status" className="btn btn-outline-secondary dropdown-toggle" onChange={titleChangeHandler}>
                        <option disabled value>Select an option</option>
                        <option value="complete">complete</option>
                        <option value="incomplete">incomplete</option>
                    </select>
                </div>
                </div>
                <div>
                    <button type="submit" id="enter" className="btn btn-primary btn-lg">Submit</button>
                </div>
            </form>
            </div>
        );

}


export default Form;



  


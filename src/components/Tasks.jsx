
// export default 
import React, { useState } from "react";

import data from '../../data';
import ListGroup from './ListGroup'
import listdata from '../../listdata';

function Tasks(props) {

    const [showCompleted, setShowCompleted] = useState(true)
//changes item to completed
    function completedHandler () {
        if (showCompleted === false) {
            setShowCompleted(true)  
        } else {
            setShowCompleted(false)
        }
    }

    // =document.getElementById("status");

    // function createItem() {
    //     localStorage.setItem('title')
    //     localStorage.setItem('pri')
    //     localStorage.setItem('status')
    //   }

    //   function retriveItem() {
    //     localStorage.getItem('title')
    //     localStorage.getItem('pri')
    //     localStorage.getItem('status')
    //   }

    //   function remove() {
    //     localStorage.removeItem('title')
    //     localStorage.removeItem('pri')
    //     localStorage.removeItem('status')
    //   }

    return (
        // <script type = "module">
        <div className="task-area">
            <div className="fantasy-container">
                <>
                    <h2 className="fantasy-title">{data[0].title}</h2>
                    <img src={data[0].image} alt="Final fantasy 14 banner" className="fantasy-pic"></img>
                    {showCompleted === false ? <button onClick={completedHandler} className="show-button">Show completed</button> : <button onClick={completedHandler} className="hide-button">Hide completed</button>}
                    <ListGroup>
                        {props.sortedList.map(listitem => {
                            if (showCompleted === true) {
                                    if (listitem.status === 'incomplete') {
                                        return (
                                            <li
                                                className="fantasy-items"
                                                key={listitem.id}> {listitem.pri}~{listitem.title}~{listitem.status}
                                                <br></br>
                                                <button onClick={props.listStatusHandler} id={listitem.id} className="complete-button" >Mark as completed</button>
                                                <button className="remove-button" onClick={props.listDeleteHandler} id={listitem.id}>Remove task</button>
                                            </li>
                                        )
                                    } else {
                                        return (
                                            <li
                                                className="fantasy-items"
                                                key={listitem.id}> {listitem.pri}~{listitem.title}~{listitem.status}
                                                <br></br>
                                                <button className="remove-button" onClick={props.listDeleteHandler} id={listitem.id}>Remove task</button>
                                            </li>
                                        )
                                    }
                            } else {
                                if (listitem.status === 'incomplete') {
                                    return (
                                        <li
                                            className="fantasy-items"
                                            key={listitem.id}>{listitem.pri} {listitem.title} {listitem.status}
                                            <br></br>
                                            <button onClick={props.listStatusHandler} id={listitem.id} className="complete-button">Mark as completed</button>
                                            <button className="remove-button" onClick={props.listDeleteHandler} id={listitem.id}>Remove task</button>
                                        </li>
                                    )
                                }
                            }
                        }
                        )}

                    </ListGroup>
                </>
            </div>
        </div>
    )  
}

export default Tasks;
    
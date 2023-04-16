
// export default 
import React, { useState } from "react";

import data from '../../data';
import ListGroup from './ListGroup'
import listdata from '../../listdata';
import { Link } from "react-router-dom";

function Tasks(props) {

    const [showCompleted, setShowCompleted] = useState(true)

    const lists = [
        {
          id: 0,
          slug: '/lists/opal',
          name: 'opal'
        },
        {
          id: 1,
          slug: '/lists/aria',
          name: 'aria'
        }
      ]
    
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
    //     localStorage.setItem('priority')
    //     localStorage.setItem('status')
    //   }

    //   function retriveItem() {
    //     localStorage.getItem('title')
    //     localStorage.getItem('priority')
    //     localStorage.getItem('status')
    //   }

    //   function remove() {
    //     localStorage.removeItem('title')
    //     localStorage.removeItem('priority')
    //     localStorage.removeItem('status')
    //   }

    return (
        // <script type = "module">
        <div>
            <div className="link-nav">
                <h2 className="list-header">Lists</h2>
                <Link to='/' className="home-link">Home</Link>
                {
                    lists.map((list, index) => <Link to={list.slug} className="aria-link" key={index}>{list.name} tasks</Link>)
                }
            </div>
            <div className="task-area">
            <div className="fantasy-container">
                <>
                    <h2 className="fantasy-title">{data[0].title}</h2>
                    <img src={data[0].image} alt="Final fantasy 14 banner" className="fantasy-pic"></img>
                    {showCompleted === false ? <button onClick={completedHandler} className="show-button">Show completed</button> : <button onClick={completedHandler} className="hide-button">Hide completed</button>}
                    <ListGroup>
                        {props.sortedList.map(listitem => {
                            if (showCompleted === true) {
                                    if (listitem.status === false) {
                                        return (
                                            <li
                                                className="fantasy-items"
                                                key={listitem.id}> {listitem.priority}~{listitem.title}~{listitem.status}
                                                <br></br>
                                                <button onClick={props.listStatusHandler} id={listitem.id} className="complete-button" >Mark as completed</button>
                                                <button className="remove-button" onClick={props.listDeleteHandler} id={listitem.id}>Remove task</button>
                                            </li>
                                        )
                                    } else {
                                        return (
                                            <li
                                                className="fantasy-items"
                                                key={listitem.id}> {listitem.priority}~{listitem.title}~{listitem.status}
                                                <br></br>
                                                <button className="remove-button" onClick={props.listDeleteHandler} id={listitem.id}>Remove task</button>
                                            </li>
                                        )
                                    }
                            } else {
                                if (listitem.status === false) {
                                    return (
                                        <li
                                            className="fantasy-items"
                                            key={listitem.id}>{listitem.priority} {listitem.title} {listitem.status}
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
        </div>
    )  
}

export default Tasks;
    
import { Link, useNavigate, useParams } from "react-router-dom"
import React, { useContext, useState } from "react";

import data from '../../data';
import ListGroup from '../components/ListGroup'
import listdata from '../../listdata';
import { ListItemsContext } from "../context/ListItemsContext";
import Form from "../components/form";
import Tasks from "../components/Tasks";

function Opal () {

    const listOfItems = useParams()
    const [showCompleted, setShowCompleted] = useState(true)

    const useListItemsContext = useContext(ListItemsContext)
    const [opalListItems, setOpalListItems] = useState(listdata.filter(item => item.char === 'Opal'))
    const [allListItems, setAllListItems] = useState(listdata)
    const [listItemId, setListItemId] = useState()

    const contextValues = {
        opalListItems,
        setOpalListItems
    }

    function statusUpdate (listItemId) {
        const itemStatus = allListItems[listItemId].status

        if (itemStatus === 'incomplete') {
            return 'complete'
        } else {
            return 'incomplete'
        }
    }

    function statusHandler (event) {
        const listItemId = event.target.id
    
        const [...listCopy] = allListItems

        listCopy[listItemId].status = statusUpdate(listItemId)

        setAllListItems(listCopy)
    
        setOpalListItems(listCopy.filter(item => item.char === 'Opal'))
    }

    function deleteHandler (event) {

        const listItemId = event.target.id

        const [...listCopy] = allListItems

        listCopy.splice(listItemId, 1)

        setAllListItems(listCopy)

        setOpalListItems(listCopy.filter(item => item.char === 'Opal'))
    }

//changes item to completed
    // function showList () {
        
    // }

    // showList()


    return (
        // <script type = "module">
        <ListItemsContext.Provider value={contextValues}>
            <h1>Opal Tasks</h1>
            <div className="task-area">
                {/* <Link to='/'>Home</Link>
                <Link to='/Aria'>Aria Tasks</Link>
                <Link to="/opal">
                    Opal Tasks
                </Link> */}
                {/* <div className="fantasy-container">
                    <>
                        <h2 className="fantasy-title">{data[0].title}</h2>
                        <img src={data[0].image} alt="Final fantasy 14 banner" className="fantasy-pic"></img>
                    </>
                </div> */}
                <Tasks
                    sortedList={opalListItems}
                    editListItem={(id) => setListItemId(id)}
                    listStatusHandler={statusHandler}
                    listDeleteHandler={deleteHandler}
                    />
            </div>
        </ListItemsContext.Provider>
    )  
}

export default Opal
import React, { useContext, useState } from "react";

import listdata from '../../listdata';
import { ListItemsContext } from "../context/ListItemsContext";
import Form from "../components/form";
import Tasks from "../components/Tasks";


function Aria () {

    const [showCompleted, setShowCompleted] = useState(true)

    const useListItemsContext = useContext(ListItemsContext)
    const [ariaListItems, setAriaListItems] = useState(listdata.filter(item => item.char === 'Aria'))
    const [allListItems, setAllListItems] = useState(listdata)
    const [listItemId, setListItemId] = useState()

    const contextValues = {
        ariaListItems,
        setAriaListItems
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
    
        setAriaListItems(listCopy.filter(item => item.char === 'Aria'))
    }

    function deleteHandler (event) {

        const listItemId = event.target.id

        const [...listCopy] = allListItems

        listCopy.splice(listItemId, 1)

        setAllListItems(listCopy)

        setAriaListItems(listCopy.filter(item => item.char === 'Aria'))
    }

    return (
        <ListItemsContext.Provider value={contextValues}>

        <div>
            {/* <Link to='/'>Home</Link>
                <Link to='/Aria'>Aria Tasks</Link>
                <Link to="/aria">
                    Aria Tasks
                </Link> */}
            <h1>Aria Tasks</h1>
            <Tasks
                sortedList={ariaListItems}
                editListItem={(id) => setListItemId(id)}
                listStatusHandler={statusHandler}
                listDeleteHandler={deleteHandler}
                />
        </div>
        </ListItemsContext.Provider>
    )
}

export default Aria
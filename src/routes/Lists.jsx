import { Link, useNavigate, useParams } from "react-router-dom"
import React, { useContext, useEffect, useState } from "react";
import ListGroup from '../components/ListGroup'
import listdata from '../../listdata';
import { ListItemsContext } from "../context/ListItemsContext";
import Form from "../components/form";
import Tasks from "../components/Tasks";
import { collection, onSnapshot, query } from 'firebase/firestore'
import db from '../db'

function Lists () {

    const { id } = useParams()
    const [showCompleted, setShowCompleted] = useState(true)
    const [task, setTask] = useState('')

    // useEffect(() => {
        
    // }, [])

    const useListItemsContext = useContext(ListItemsContext)
    const [opalListItems, setOpalListItems] = useState([])
    const [ariaListItems, setAriaListItems] = useState(listdata.filter(item => item.char === 'Aria'))
    const [allListItems, setAllListItems] = useState(listdata)
    const [listItemId, setListItemId] = useState()

    const contextValues = {
        opalListItems,
        setOpalListItems
    }

    useEffect(() => {
        const c = collection(db, 'opal')
        const q = query(c)

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const data = []
            snapshot.forEach(doc => data.push({
                id: doc.id,
                priority: doc.data().priority,
                status: doc.data().status,
                title: doc.data().title
            }))
            setOpalListItems(data)
            console.log(data)
        })

    }, [])

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
        setAriaListItems(listCopy.filter(item => item.char === 'Aria'))
    }

    function deleteHandler (event) {

        const listItemId = event.target.id

        const [...listCopy] = allListItems

        listCopy.splice(listItemId, 1)

        setAllListItems(listCopy)

        setOpalListItems(listCopy.filter(item => item.char === 'Opal'))
        setAriaListItems(listCopy.filter(item => item.char === 'Aria'))
    }

//changes item to completed
    // function showList () {
        
    // }

    // showList()


    return (
        // <script type = "module">
        <ListItemsContext.Provider value={contextValues}>
            {
                id === 'opal' &&
                <div className="task-area">
                    <Form allListItems={opalListItems} setAllListItems={setOpalListItems} />
                    <h1>Opal Tasks</h1>
                    <Tasks
                        sortedList={opalListItems}
                        editListItem={(id) => setListItemId(id)}
                        listStatusHandler={statusHandler}
                        listDeleteHandler={deleteHandler}
                        />
                </div>
            }
            {
                id === 'aria' &&
                <div>
                    <h1>Aria Tasks</h1>
                    <Tasks
                        sortedList={ariaListItems}
                        editListItem={(id) => setListItemId(id)}
                        listStatusHandler={statusHandler}
                        listDeleteHandler={deleteHandler}
                        />
                </div>
            }
        </ListItemsContext.Provider>
    )  
}

export default Lists
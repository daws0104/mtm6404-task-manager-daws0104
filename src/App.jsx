import React, { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import FooterInfo from './components/FooterInfo'
import HeaderInfo from './components/HeaderInfo'
import Tasks from './components/Tasks'
import Greeting from './components/Greeting'
import Form from './components/form'
import listdata from '../listdata';
import { Link } from 'react-router-dom'
import { ListItemsContext } from './context/ListItemsContext'


function App() {
  const useListItemsContext = useContext(ListItemsContext)

  const [allListItems, setAllListItems] = useState(listdata)
  const [listItemId, setListItemId] = useState()

  const contextValues = {
    allListItems,
    setAllListItems
  }

  // (JSON.parse(localStorage.getItem('list')) || 

  // const sortedList = allListItems.sort((a,b) => {
  //   if (a.pri === 'high') {
  //     return -1;
  //   } else if (a.pri === 'low') {
  //     return 0;
  //   } else {
  //     return 1;
  //   }
  // })

  function saveLocalStorage() {
    localStorage.setItem('list', JSON.stringify(allListItems))
  }

  function statusUpdate (listItemId) {
    const itemStatus = allListItems[listItemId].status

    if (itemStatus === 'incomplete') {
      return 'complete'
    } else {
      return 'incomplete'
    }
  }

  //function to mark items as complete
  function statusHandler (event) {
    const listItemId= event.target.id

    const [...listCopy] = allListItems

    listCopy[listItemId].status = statusUpdate(listItemId)

    setAllListItems(listCopy)
  }

  function deleteHandler (event) {

    event.preventDefault()

    const [...listCopy] = allListItems

    listCopy.splice(event.target.id, 1)

    // const updatedList = listCopy.filter(item =>
    //   item.id !== event.target.id
    // )

    setAllListItems(listCopy)
  }

  saveLocalStorage()

  // listitem.id stueas //to override

  return (
    <ListItemsContext.Provider value={contextValues}>
      <div className="App">
        <Greeting />
        <HeaderInfo />
        <Tasks
          sortedList={allListItems}
          editListItem={(id) => setListItemId(id)}
          listStatusHandler={statusHandler}
          listDeleteHandler={deleteHandler}
        />
        <Form allListItems={allListItems} setAllListItems={setAllListItems} />
        <FooterInfo />
      </div>
    </ListItemsContext.Provider>
  );
}

export default App;

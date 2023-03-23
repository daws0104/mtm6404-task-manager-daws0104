import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import FooterInfo from './components/FooterInfo'
import HeaderInfo from './components/HeaderInfo'
import Tasks from './components/Tasks'
import Greeting from './components/Greeting'
import Form from './components/Form'
import listdata from '../listdata';


function App() {
  const [count, setCount] = useState(0)
  const [allListItems, setAllListItems] = React.useState(JSON.parse(localStorage.getItem('list')) || listdata)
  const [listItemId, setListItemId] = React.useState()

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
  );
}

export default App;

import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import FooterInfo from './components/FooterInfo'
import HeaderInfo from './components/HeaderInfo'
import Tasks from './components/Tasks'
import Greeting from './components/Greeting'
import Form from './components/Form'
import NewTaskForm from './components/NewTaskForm'
import listdata from '../listdata';


function App() {
  const [count, setCount] = useState(0)
  const [allListItems, setAllListItems] = React.useState(listdata)

  return (
    <div className="App">
      <Greeting />
      <HeaderInfo />
      <Tasks allListItems={allListItems} />
      <Form allListItems={allListItems} setAllListItems={setAllListItems} />
      <NewTaskForm />
      <FooterInfo />
    </div>
  );
}

export default App;

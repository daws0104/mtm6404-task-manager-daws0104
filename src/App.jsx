import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import FooterInfo from './components/FooterInfo'
import HeaderInfo from './components/HeaderInfo'
import Tasks from './components/Tasks'
import Greeting from './components/Greeting'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Greeting />
      <HeaderInfo />
      {/* <App /> */}
      <Tasks />
      <FooterInfo />
    </div>
  );
}

export default App;

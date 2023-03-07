import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import FooterInfo from './components/FooterInfo'
import HeaderInfo from './components/HeaderInfo'
import Tasks from './components/Tasks'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <HeaderInfo />
      {/* <App /> */}
      <Tasks />
      <FooterInfo />
    </div>
  );
}

export default App;

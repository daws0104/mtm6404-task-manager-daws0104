import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import CharacterBio from './components/CharacterBio';
import Opal from './routes/Opal'
import Aria from './routes/Aria'
import {createBrowserRouter,Router,RouterProvider} from "react-router-dom";
// import data from 'data.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/CharacterBio/:id",
    element: <CharacterBio />
  },
  {
    path: "/opal",
    element: <Opal />
  },
  {
    path: '/aria',
    element: <Aria />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

    {/* <App /> */}
//form index.html taskmanager
{/* <div id="root"></div> */}
{/* <script type="module" src="/src/main.jsx"></script> */}
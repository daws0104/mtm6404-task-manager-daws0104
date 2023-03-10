
// export default 
import React from "react";

import data from '../../data';
import ListGroup from './ListGroup'
import listdata from '../../listdata';

function Tasks(props) {
    //array here? or load data as a string here
    // console.tasks(props)
    return (
        // <script type = "module">
        <div className="task-area">
        <div className="fantasy-container">
            <><h2 className="fantasy-title">{data[0].title}</h2>
                <img src={data[0].image} alt="Final fantasy 14 banner" className="fantasy-pic"></img>
                <ListGroup>
                    {listdata.map(listitem => <li className="fantasy-items" key={listitem.id}>{listitem.title}</li>)}
                    {/* <li className="fantasy-items">Complete post stromblood quests</li>
                    <li className="fantasy-items">Complete PVP reward tier</li>
                    <li className="fantasy-items">Complete island sanctuary </li>
                    <li className="fantasy-items">Complete seasonal quests </li>
                    <li className="fantasy-items">Complete weekly objectives</li> */}
                </ListGroup></>
        </div><div className="terra-container">
                <h2 className="terra-title">{data[1].title}</h2>
                <img src={data[1].image} alt="Terraria banner" className="terra-pic"></img>
                <ul>
                    <li className="terra-items">Complete fishing quests</li>
                    <li className="terra-items">Get a pocket mirror</li>
                    <li className="terra-items">Defeat the empress of light</li>
                    <li className="terra-items">Restock potions</li>
                </ul>
            </div><div className="factory-container">
                <h2 className="factory-title">{data[2].title}</h2>
                <img src={data[2].image} alt="Satisfactory banner" className="factory-pic"></img>
                <ul>
                    <li className="factory-items">Rework power supply</li>
                    <li className="factory-items">Add more coal generators</li>
                    <li className="factory-items">Renovate factory</li>
                </ul>
            </div>
            </div>
            // </script>
    )  
}

export default Tasks;
    
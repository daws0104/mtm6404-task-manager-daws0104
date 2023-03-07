
// export default 
import React from "react";

// import {data} from 'data'

function Tasks(props) {
    //array here? or load data as a string here
    // console.tasks(props)
    return (
        // <script type = "module">
        <div>
        <div className="fantasy-container">
            <><h2 className="fantasy-title">{props.title}</h2>
                <img src={props.image} alt="Final fantasy 14 banner" className="fantasy-pic"></img><ul>
                    <li className="fantasy-items">Complete post stromblood quests</li>
                    <li className="fantasy-items">Complete PVP reward tier</li>
                    <li className="fantasy-items">Complete island sanctuary </li>
                    <li className="fantasy-items">Complete seasonal quests </li>
                    <li className="fantasy-items">Complete weekly objectives</li>
                </ul></>
        </div><div className="terra-container">
                <h2 className="terra-title">{props.title}</h2>
                <img src={props.image} alt="Terraria banner" className="terra-pic"></img>
                <ul>
                    <li className="terra-items">Complete fishing quests</li>
                    <li className="terra-items">Get a pocket mirror</li>
                    <li className="terra-items">Defeat the empress of light</li>
                    <li className="terra-items">Restock potions</li>
                </ul>
            </div><div className="factory-container">
                <h2 className="factory-title">{props.title}</h2>
                <img src={props.image} alt="Satisfactory banner" className="factory-pic"></img>
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
    
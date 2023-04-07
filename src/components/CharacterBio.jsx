import React from "react";
import { useParams } from "react-router-dom";




function Characterdisplay() {
    const {id}=useParams()
    const bios = [
        {name: "Opal"},
        {name: "Aria"},
        {name: "Basil"},
    ];
    return (
        <div>
            {bios.map ((bio, index) => (
                <h4>{bio.name}</h4>
            ))}
        </div>
    );
}

export default Characterdisplay


// <link key={index} to={bio.slug}> </link>


// info: fullname, Species, clan, gender, All the info on the log in screen
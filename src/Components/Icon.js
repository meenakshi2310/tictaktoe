import React from "react"
import {FaTimes, FaRegCircle, FaPen } from "react-icons/fa"; //import all font icons that are required

const Icon=({choice})=>{
    switch(choice){
        case "cross":
            return <FaTimes className="icon"/>;
        case "circle":
            return <FaRegCircle className="icon"/>;
        default:
            return "";
    }

}

export default Icon;
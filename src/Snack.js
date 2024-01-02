import React from "react";
import {Link} from "react-router-dom"

const Snack = ({name})=>{
    return (
        <div className="Snack">
            <h2>Here's your {name}. Enjoy!</h2>
            <Link to="/">GoBack</Link>
        </div>

    )
}

export default Snack;
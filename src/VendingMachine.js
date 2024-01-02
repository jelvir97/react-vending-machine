import React from "react";
import {Link} from "react-router-dom"

const VendingMachine = ()=>{
    return (
        <div className="VendingMachine">
            <h2>Vending Machine!</h2>
            <p>Choose a snack</p>
                <li><Link to="/chips">Chips</Link></li>
                <li><Link to="/candy">Candy</Link></li>
                <li><Link to="/chocolate">Chocolate</Link></li>
        </div>
    )
}

export default VendingMachine;
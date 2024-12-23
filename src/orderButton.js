import "./orderButton.css";
import { useState } from "react";

function Buttons() {
    const [ initial, setInitial ] = useState(0)

    function handleClick() {
        alert('Order Placed.')
        setInitial(initial + 1);
    }

    return (
        <div>
            <div className="buttonContainer">
                <ul>
                    <li><button onClick={handleClick} >Order</button></li>
                    <li><button onClick={handleClick} >Order</button></li>
                    <li><button onClick={handleClick} >Order</button></li>
                    <li><button onClick={handleClick} >Order</button></li>
                </ul>
            </div>
            <div className="count">
                <ul>
                    <li>{initial}</li>
                    <li>{initial}</li>
                    <li>{initial}</li>
                    <li>{initial}</li>
                </ul>
            </div>
        </div>
       



     
    );
};

export default Buttons;
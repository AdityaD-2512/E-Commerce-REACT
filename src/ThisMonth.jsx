import "./ThisMonth.css";
import ThisComponents from "./ThisComponents";

export default function ThisMonth({addToCart}){
    
    return(
        <div>
            <div className="month" id="month1">
                <img src="./assets/redRec.png"></img>
                <h2>This Month</h2>
            </div>
            <div>
                <h1>Best Selling Products</h1>
                <ThisComponents addToCart={addToCart}/>
            </div>
        </div>
    )
}
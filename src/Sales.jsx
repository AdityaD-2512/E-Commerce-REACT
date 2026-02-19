import "./Sales.css";
import Sliderr from "./Sliderr";

export default function Sales({addToCart}){
    return(
        <div>
            <div className="today">
                <img src="./assets/redRec.png"></img>
                <h2>Today's</h2>
            </div>
            <div>
                <h1>Flash Sales</h1>
                <Sliderr addToCart={addToCart}/>
            </div>
        </div>
    )
}
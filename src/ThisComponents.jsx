// import "./Sliderr.css";
import LikeButton from "./LikeButton";

export default function ThisComponents({addToCart}){
    
    return(
        <>
            <div className="main" >
                <div className="below" style={{display:"flex" , flexWrap:"wrap"}}>
                
                    {data.map((d)=>(
                        <div className="cards" style={{marginRight:"4vw"}}>
                            <div className="imgDiv">
                                <img className="i" src={d.img} alt=""></img>
                                <span style={{marginTop:"-10rem"}}><LikeButton/></span>
                                
                            </div>

                            <div className="btm">
                                
                                <p style={{fontWeight:"600", fontSize:"30px"}}>{d.name}</p>
                                <span style={{display:"flex"}}><p style={{textDecoration:"line-through"}}>{d.priceOld}</p> &nbsp;&nbsp;&nbsp;<p>{d.priceNew}</p></span> 
                                <button style={{backgroundColor:"#3F51B5", fontSize:"large", color:"white", height:"40px", width:"100%", padding:"6px 1px 6px 1px", borderRadius:"1rem" }} onClick={() => addToCart(d.name)}>Add To Cart</button>
                            </div>
                        </div>

                    ))}
                
                </div>
                    <br></br><br></br><br></br><br></br>
                <img style={{height:"450px", width:"100%"}} src="./assets/catagories.png"></img>
                <br></br><br></br><br></br>
                <img style={{height:"250px", width:"100%"}} src="./assets/service.png"></img>

            </div>
            <hr></hr>
            <br></br>
            <br></br>
            
        </>
        
        
    )
}


const data = [
    {
        idx: 1,
        img : `./assets/earBuds.jpg`,
        name : "wireless earbuds",
        priceOld : 50,
        priceNew : 40,
    },
    {
        idx: 2,
        img : `./assets/graphicCard.jpg`,
        name : "Graphic card",
        priceOld : 100,
        priceNew : 90,
    },
    {
        idx: 3,
        img : `./assets/headphones.jpg`,
        name : "Headphones",
        priceOld : 70,
        priceNew : 60,
    },
    {
        idx: 4,
        img : `./assets/mac.jpg`,
        name : "MacBook",
        priceOld : 120,
        priceNew : 110,
    },
    {
        idx: 5,
        img : `./assets/phone.jpg`,
        name : "Smart Phone",
        priceOld : 80,
        priceNew : 90,
    },
    {
        idx: 6,
        img : `./assets/ps5.jpg`,
        name : "Play Station",
        priceOld : 90,
        priceNew : 80,
    },
    {
        idx: 7,
        img : `./assets/tv.avif`,
        name : "Smart TV",
        priceOld : 60,
        priceNew : 50,
    },
    {
        idx: 8,
        img : `./assets/watch.jpg`,
        name : "Smart Watch",
        priceOld : 20,
        priceNew : 10,
    }
]


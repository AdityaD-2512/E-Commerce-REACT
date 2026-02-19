import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Sliderr.css";
import LikeButton from "./LikeButton";

function Sliderr({addToCart}){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return(
        <>
            <div className="main">
                <div className="below">
                <Slider {...settings}>
                    {data.map((d)=>(
                        <div className="cards">
                            <div className="imgDiv">
                                <img className="i" src={d.img} alt=""></img>
                                <span style={{marginTop:"-10rem"}}><LikeButton/></span>
                                
                            </div>

                            <div className="btm">
                                
                                <p style={{fontWeight:"600", fontSize:"30px"}}>{d.name}</p>
                                <span style={{display:"flex"}}><p style={{textDecoration:"line-through"}}>{d.priceOld}</p> &nbsp;&nbsp;&nbsp;<p>{d.priceNew}</p></span> 
                                <button style={{backgroundColor:"#3F51B5", fontSize:"large", color:"white", height:"40px", width:"100%", padding:"6px 1px 6px 1px", borderRadius:"1rem"}} onClick={() => addToCart(d.name)}>Add To Cart</button>
                            </div>
                        </div>

                    ))}
                </Slider>
                </div>
                <button style={{backgroundColor:"rgb(210,0,0)", borderRadius:"0.5rem", fontSize:"large", color:"white", height:"40px", width:"30%",padding:"6px 3px 6px 3px", marginLeft: "25vw", textAlign:"center", marginTop:"70px", marginBottom:"30px"}}>VIEW ALL PRODUCTS</button>
            </div>
            <hr></hr>
        </>
        
        
    )
}


const data = [
    {
        img : `./assets/earBuds.jpg`,
        name : "wireless  earbuds",
        priceOld : 50,
        priceNew : 40,
    },
    {
        img : `./assets/graphicCard.jpg`,
        name : "Graphic card",
        priceOld : 100,
        priceNew : 90,
    },
    {
        img : `./assets/headphones.jpg`,
        name : "Headphones",
        priceOld : 70,
        priceNew : 60,
    },
    {
        img : `./assets/mac.jpg`,
        name : "MacBook",
        priceOld : 120,
        priceNew : 110,
    },
    {
        img : `./assets/phone.jpg`,
        name : "Smart Phone",
        priceOld : 80,
        priceNew : 90,
    },
    {
        img : `./assets/ps5.jpg`,
        name : "Play Station",
        priceOld : 90,
        priceNew : 80,
    },
    {
        img : `./assets/tv.avif`,
        name : "Smart TV",
        priceOld : 60,
        priceNew : 50,
    },
    {
        img : `./assets/watch.jpg`,
        name : "Smart Watch",
        priceOld : 20,
        priceNew : 10,
    }
]

export default Sliderr;
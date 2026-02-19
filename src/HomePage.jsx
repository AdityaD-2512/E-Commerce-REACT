import NavBar from './NavBar';
import Header from './Header';
import Sales  from './Sales';
import ThisMonth from './ThisMonth';
// import LikeButton from './LikeButton';
import Footer from './Footer';

export default function HomePage({addToCart}){
    return(
        <>
        <NavBar/>
        <Header/>
        <Sales addToCart={addToCart}/>
        <ThisMonth addToCart={addToCart}/>
        <Footer/>
        </>
    )
}
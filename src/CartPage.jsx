import {Link} from 'react-router-dom';
import './CartPage.css';
import Header from './header';
import NavBar from './NavBar';
import Footer from './Footer';

const CartPage = ({ cartItems, removeFromCart }) => {
    return (
        <div>
            <NavBar/>
            <Header/>
            <div className='all'>
                <h1 className='cartHeading'>Cart Page</h1>
                {cartItems.length === 0 ? (
                <img src='./assets/emptyCart.png' style={{height:"70vh", width:"70vw"}}></img>
                ) : (
                <ul>
                    {cartItems.map((item, index) => (
                    <li key={index}>
                        {index+1} {item} <button onClick={() => removeFromCart(index)}>Remove</button>
                    </li>
                    ))}
                </ul>
                )}
                <Link to="/">Go Back</Link>
            </div>
            <br></br><br></br><br></br>
            <Footer/>
        </div>    
    );
  };

export default CartPage;

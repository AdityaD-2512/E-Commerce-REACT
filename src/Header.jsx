import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./Header.css";
import { Link} from 'react-router-dom';


export default function Header(){
    return (
        <>
            <div className='header'>
                <div className='header-left'>
                    
                    <span className='homeIcon'><HomeIcon/></span>
                    <Link  to="/"  style={{color:"black", fontSize:"larger", marginTop:"3px"}}>HOME</Link>
                </div>

                <div className='header-right'>
                    <span className='wishListIcon wish'><FavoriteIcon/></span>
                    <h3 className='headerName wish'>WishList</h3>
                    <span className='wishListIcon cart cart1'><ShoppingCartIcon/></span>
                    {/* <h3 className='headerName cart1'>Cart</h3> */}
                    <Link  to="/cart" className='headerName cart1' style={{color:"black", fontSize:"larger"}}>Cart</Link>
                    <span className='wishListIcon cart toggle'><WbSunnyIcon/></span> 
                </div>
            </div>
            <hr></hr>
        </>
        
    )
}
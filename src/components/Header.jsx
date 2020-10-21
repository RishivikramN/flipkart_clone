import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom';
import SearchBar from './SearchBar';
import Button from './Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {
    return (
        <nav className='header'>
            <Link to='/'>
                <img className='header__logo' src={require('../assets/images/logo.png')} alt='logo'/>
            </Link>

            <SearchBar PlaceHolder='Search for products, brands and more'/>
            
            <Button route='/login'>Login</Button>     
            
            <Link to='/' className='more__link'>
                    <span className='more'>More</span>
                    <ExpandMoreIcon className='expandmore_Icon'/>
            </Link>

            <Link to='/checkout' className='cart_link'>
                <ShoppingCartIcon className='cart_Icon'/>
            </Link>

            <Link to='/checkout' className='cart__link'>
                <span className='cart_text'>Cart</span>
            </Link>
            
        </nav>
    )
}

export default Header

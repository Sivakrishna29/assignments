import { useState } from 'react';
import { Link } from 'react-router-dom';

const Title = () => {
    return (
        <img
            className='logo'
            alt="food" 
            src='https://images.saymedia-content.com/.image/t_share/MTc2MjcyOTIxMTM5NjE4OTg5/fast-food-restaurant-logos-and-their-hidden-meanings.jpg' />
    )
}

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className='header'>
            <Title />
            <div className='nav-list-items'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/instamart">Instamart</Link></li>
                    <li>Cart</li>
                </ul>
            </div>
            {isLoggedIn ? (
                <button onClick={() => setIsLoggedIn(false) }>Login</button>
            ):
             (
                <button onClick={() => setIsLoggedIn(true) }>Logout</button>
             )
            }
        </div>
    )
}

export default Header;

const Title = () => {
    return (
        <img
            className='logo'
            alt="food" 
            src='https://images.saymedia-content.com/.image/t_share/MTc2MjcyOTIxMTM5NjE4OTg5/fast-food-restaurant-logos-and-their-hidden-meanings.jpg' />
    )
}

const Header = () => {
    return (
        <div className='header'>
            <Title />
            <div className='nav-list-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;

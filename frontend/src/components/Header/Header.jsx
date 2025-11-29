import React from "react";
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className="header-content">
                <h2>Order your favourite food</h2>
                <p>Choose from a variety of delicious meals and have them delivered to your doorstep.</p>
                <button>View Menu</button>
            </div>
        </div>
    )
};

export default Header;
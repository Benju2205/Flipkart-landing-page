//use 'rfce' for react export boiler plate code
// import React from "react";
// import "./Navbar.css";
// import Flipkartlogo from "./Flipkartlogo.png";

// function Navbar() {
//   return (
//     <div className="navbar">
//       <label htmlFor="flipkart">
//         <a href="#" id="flipkart">
//           <img src={Flipkartlogo} alt="flipkartlogo" id="flipkartlogo" />
//         </a>
//       </label>
//       <label htmlFor="searchbar">
//         <input
//           type="text"
//           id="searchbar"
//           placeholder="Search for products,brands and more"
//         />
//       </label>
//       <label htmlFor="login">
//         <input type="submit" id="login" value="Login" />
//       </label>
//       <label htmlFor="seller">
//         <a href="#" id="seller">
//           Become a seller
//         </a>
//       </label>
//       <label htmlFor="more" id="more">
//         More
//         <select name="more"></select>
//       </label>
//       <label htmlFor="cart">
//         <a href="#" id="cart">
//           Cart
//         </a>
//       </label>
//       <img src="logo" alt="" />
//     </div>
//   );
// }

// export default Navbar;

import React from 'react';
import './Navbar.css';
import logo from './Flipkartlogo.png'
import search from './search-icon.png'
import cart from './cart.png'

function navbar() {
  return (
    <>
           <div className="navbar">
            <ul className='navlinks'>
                <li className="navlink" id="nav-1"><a href="#"><img src={logo} id='FKlogo'/></a></li>
                <li className="navlink" id="nav-2"><input type='text' placeholder='Search for products, brands and more'></input></li>
                <li className="navlink" id="nav-3"><a href="#"><button>Login</button></a></li>
                <li className="navlink" id="nav-4"><a href="#" id='seller'>Become a seller</a></li>
                <li className="navlink" id="nav-5">More<select name="more"></select></li>
                <li className="navlink" id="nav-6"><a href="#" id='cart'><img src={cart} id='cartlogo'/>Cart</a></li>
            </ul>
           </div>
    </>
  )
}

export default navbar


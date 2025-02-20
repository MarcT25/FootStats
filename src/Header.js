import React from "react";
import { NavLink } from "react-router";


//navigation bar
const Navbar = () => {
    return (
                <nav className='navbar'>
                    
                    <div className='navbar-left'>
                        <NavLink to="/" className='logo'>FootStats</NavLink>
                    </div>

                    <div className='navbar-center'>
                        <ul className='nav-links'>
                            <li>
                                <NavLink to="/teamStats">Teams</NavLink>
                            </li>
                            <li>
                                <NavLink to="/playerStats">Players</NavLink>
                            </li>
                            <li>
                                <NavLink to ='/liveMatches'>Live Matches</NavLink>
                            </li>
                            <li>
                                <NavLink to ='/about'>About</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            
    )
}

function Header() {
    return (
        <Navbar/>
    )
}

export default Header
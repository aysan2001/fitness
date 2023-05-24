import Logo from '../img/logo.png';
import { Link, NavLink } from 'react-router-dom';
import {links} from '../data/data';
import {GoThreeBars} from 'react-icons/go';
import {MdOutlineClose} from 'react-icons/md';
import './navbar.css';
import { useState } from 'react';

const Navbar = () => {

  const [isNavShowing, setIsNavShowing] = useState(false);




  return (
    <nav>
     <div className="container nav__container">
      <Link to="/" className='logo'  onClick={() => setIsNavShowing(false)}> 
         <img src={Logo} alt="Nav Logo" />
          </Link>
      
        <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__Nav'}`}>
          {links.map(({name,path},index) =>{
            return(
              <li key={index}>
                <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' :''}  onClick={() => setIsNavShowing(prev => !prev)} >{name}</NavLink>
              </li>
            )
          })}
        </ul>
       <button className='nav__toggle-btn' onClick={() => setIsNavShowing(prev => !prev)}>
      {
        isNavShowing ? <MdOutlineClose/> : <GoThreeBars/>
      }
         </button> 
     </div>
    </nav>
  )
}

export default Navbar
import SearchBar from './SearchBar';

import RandomCards from './RandomCards';
import { useLocation } from 'react-router-dom';

import {NavLink} from 'react-router-dom'



export default function Nav(props) {
  const location = useLocation();
    return (
        
        <div >
          <div >
       <NavLink to='/home'><img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png"}alt= 'imagen' /></NavLink>
       </div>
       {location.pathname === "/home" && (
        <div>
          <SearchBar  onSearch={props.onSearch} />
          <RandomCards random={props.random} />
        </div>
      )}
          <div>
            <NavLink to="/home"style={{ textDecoration: "none" }} >
            <p >Home</p>
            </NavLink>

            <NavLink to="/favorites" style={{ textDecoration: "none" }}>
              <p >Favorites</p>
            </NavLink>
          <NavLink  to="/About" style={{ textDecoration: "none" }}>
            <p >About</p>
            </NavLink>
          </div>
        </div>
       
        
      
    );
  }
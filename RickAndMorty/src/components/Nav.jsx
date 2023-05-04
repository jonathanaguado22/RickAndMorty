import React from "react";
import SearchBar from "./SearchBar.jsx";
import { Link } from "react-router-dom";


function Nav(props) {
  return (

      

    <div className="searchb">
<Link to='about'>
<button>About</button>
</Link>
   <Link to="/home">
   <button >Home</button>
   </Link>
      
      <SearchBar onSearch={props.onSearch}/>

      
    </div>
   

  );
}

export default Nav;
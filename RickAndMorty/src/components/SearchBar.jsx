import "./SearchBar.css"
import {useState} from "react"


export default function SearchBar(props) {
   const [character, setCharacter]=useState();

   
   
   return (
      <div className="searchb">
          
         <input type="search" />

         <button onClick={()=>props.onSearch(character)}> Agregar </button> 
         
      </div>
   );
}

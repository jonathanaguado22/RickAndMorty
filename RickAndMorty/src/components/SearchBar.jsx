import "./SearchBar.css"
import {useState} from "react"

export default function SearchBar(props) {
   const [character, setCharacter]=useState()




   
   const handleSearch=(event) => {
      
      let {value}=event.target
      setCharacter(value)
   }

   return (
      <div className="searchb">
         <input className="search" type='number'min='1'max='826' onChange={handleSearch}  />
         <button onClick={()=>props.onSearch(character)}>Agregar</button>
      </div>
   );
}
   
  
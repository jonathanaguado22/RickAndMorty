import "./Card.css"
import {Link} from "react-router-dom"

import { connect } from 'react-redux'
import {addFavorite,deleteFavorite} from '../Redux/actions'

import { useState, useEffect } from "react" 







export function mapStateToProps(state){
  
   return {
         myFavorites:state.myFavorites
   }
   
}

export function Card(props) {


   const [isFav, setIsFav] = useState(false);
   const handleFavorite=()=>{
      if (isFav) {
         setIsFav(false);
        props.deleteFavorite(props.id)
         
      } else {
         setIsFav(true);
        props.addFavorite(props);
       }
     };
     useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites, props.id]);
   
   return (
      <div className="card">
<div >  {
         isFav ? (
            <button  onClick={handleFavorite}>💖</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )
      }
      </div>
         <div >
           
         <button  onClick={props.onClose}>X</button></div>
         <Link to={`/detail/${props.id}`}>
                  
      <img src={props.image} alt={props.name} />
         <h2 >{props.name}</h2>
      
      
       <div>

          <p>{props.species}</p>
      <p>{props.gender}</p>
      </div>
     </Link>
   
      
      
      
   </div>
   );
}
function mapDispatchToProps (dispatch) {
  return {
     addFavorite:(char)=>{
        dispatch(addFavorite(char));
     },
     deleteFavorite: (id)=>{
        dispatch(deleteFavorite(id)) 
     }
  }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Card);
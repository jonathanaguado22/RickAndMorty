
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios";
import { Link } from "react-router-dom";

const Detail = ()=>{

    const {id} = useParams();
const [character, setCharacter] = useState({});


useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
        
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});

 }, [id]);
    return(
        <div>

            <button>

                <Link to='home'>Home</Link>
            </button>

            <h1>{character?.name}</h1>
            <h2>{character?.status}</h2>
            <h2>{character?.species}</h2>
            <h2>{character?.gender}</h2>
            <h2>{character?.origin?.name}</h2>
            <img src={character?.image} alt={character.name}/>



        </div>
    )
}


export default Detail
import Card from './Card';
import "./Cards.css"

export default function Cards(props) {
   const { characters } = props;
   return (
   <div className='cards_container'>
               
        {characters.map((personaje, index) => (
         
         <Card
         
         key={index}
         image={personaje.image}
         name={personaje.name}
         species={personaje.species}
         gender={personaje.gender}
         id={personaje.id}
         onClose={() => props.onClose(personaje.id)}
         />
      ))}
    </div>
  );
}

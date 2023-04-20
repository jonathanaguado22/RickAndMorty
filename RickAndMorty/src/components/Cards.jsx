import Card from './Card';
import "./Cards.css"

export default function Cards({characters}) {
   return (
   <div className='cards_container'>
         {
         characters && characters.map((element)=> {
            return (
               <Card key={element.id}
               id={element.id}
               name={element.name}
               status={element.status}
               species={element.species}
               gender={element.gender}
               origin={element.origin.name}
               image={element.image}
               onClose={() => window.alert('Emulamos que se cierra la card')}></Card>
            )
         })}

      
   </div>
   )
}

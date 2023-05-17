

export default function RandomCards(props) {
    

    return (
        <div>
           
           <button onClick={()=>props.random()}>Random Card</button>
        </div>
     );
  
}
import './App.css';
import axios from 'axios';
import Nav from './components/Nav.jsx';
import About from './components/About.jsx';
import Detail from './components/Detail.jsx';

// import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
//import SearchBar from './components/SearchBar.jsx';
// import characters, { Rick } from './data.js'
import { Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


function App() {
   const location = useLocation();
   const [characters, setCharacters] = useState([]);
   
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
    
    const navigate = useNavigate();
    const [access, setAccess] = useState(false);
    const username = "ejemplo@gmail.com";
    const password = "123456";
  
    function login(userData) {
      if (userData.password === password && userData.username === username) {
        setAccess(true);
        navigate("/home");
      }
    }
    useEffect(() => {
      !access && navigate("/");
    }, [access, navigate]);
   return (

      <div className='App'>
      
      {location.pathname !== "/" && <Nav onSearch={onSearch}  />}
       
        <Routes>
        <Route exact path="/" element={<Form login={login} />} />
         <Route path='/home' element= {<Cards characters={characters} />} />
         <Route path='/about' element= {<About/>} />
         <Route path='/detail/:id' element= {<Detail/>} />
        </Routes>

        
      </div>
   );
}

export default App;

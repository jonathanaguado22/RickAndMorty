import './App.css';

import Nav from './components/Nav.jsx';
import About from './components/About.jsx';
import Favorites from "./components/Favorites"
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
   
   const onSearch = async (id) => {
      try {
       await fetch(`https://rickandmortyapi.com/api/character/${id}`)
          .then((response) => response.json())
          .then((data) => {
            // if (data.id) {
            //   !characters.some((obj) => JSON.stringify(obj) === JSON.stringify(data))
            //     ? setCharacters((oldChars) => [...oldChars, data])
            //     : window.alert(");
            // } else {
            //   window.alert("No hay personajes con ese ID");
            // }
            if (data.name) {
              const characterExists = characters.some((char) => char.id === data.id);
              if (!characterExists) {
                setCharacters((oldChars) => [...oldChars, data]);
              } else {
                window.alert("El personaje ya existe");
              }
            }
          });
      } catch (e) {
        console.log("catch error");
      }
    };
    const onClose = (characterId) => {
      setCharacters((chars) => {
        return chars.filter((char) => char.id !== characterId);
      });
      // const onClose = () => {
      //   setCharacters([]);
    };
    const random = () => {
      const index = Math.floor(Math.random() * 826 + 1);
      onSearch(index);
    };
    const navigate = useNavigate();
    const [access, setAccess] = useState(false);
    const username = "ejemplo@gmail.com";
    const password = "123456";
   //  async function login(userData) {
   //    const { username, password } = userData;
   //    console.log(username, password);
   //    const URL = "http://localhost:3000/";
   //    try {
   //      const { data } = await axios.get(`${URL}?email=${username}&password=${password}`);
   //      const { access } = data;
   //      setAccess(data);
   //      access && navigate("/home");
   //    } catch (err) {
   //      console.log("login error");
   //    }
   //  }
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

      {location.pathname !== "/" && <Nav onSearch={onSearch} random={random} />}
      <Routes>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route exact path="/" element={<Form login={login} />} />
        <Route path="/About" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/Detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;

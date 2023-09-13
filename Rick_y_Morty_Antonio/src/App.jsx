import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import About from '-/components/about/About';
import Cards from './components/cards/Cards.jsx';
import Detail from './components/detail/Detail';
import Favorites from './components/favorites/Favorites';
import Form from './components/form/Form';
import Nav from './components/nav/Nav';
import './App.css';


function App() {

   const [ characters, setCharacters ] = useState([]); // [ estado, functión ]
   
   const navigate = useNavigate();

   const [access, setAccess] = useState(false)
   const EMAIL = 'antonio@gmail.com'
   const PASSWORD = '1234567'

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home'); 
      } else {
         alert("Por favor ingrese sus datos")
      }
   }

   useEffect(() => {
      !access && navigate('/home');
   }, [access]);

   const location = useLocation();
   console.log(location.pathname);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este id');
         }
      });
   }

   const onClose = (id) => {
      setCharacters(characters.filter(char => char.id !== Number(id)))
   }

   return (
      <div className='App'>
         {
            location.pathname !== "/" && <Nav onSearch={onSearch} />
         }
         <Routes>
            <Route
               path="/"
               element={<Form login={login} />}
            />
           <Route
              path="/home"
              element={<Cards characters={characters} onClose={onClose} />}
            />
           <Route
              path="/about"
              element={<About />}
            />
           <Route
              path="/detail/:id"
              element={<Detail />}
            />
           <Route
              path="/favorites"
              element={<Favorites onClose={onClose} />}
           />
           <Route
              path="*"
              element={<About />}
            />          
         </Routes>
      
      </div>
   );
}

export default App;

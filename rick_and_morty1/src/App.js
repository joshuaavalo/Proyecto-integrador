import { useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Details from './components/Details/Details';

const URL = 'https://rickandmortyapi.com/api/character/'

function App() {

   // con el custom hook
   // const {
   //    characters,
   //    onSearch,
   //    onClose,
   // } = useApp();

   const [characters, setCharacters] = useState([]);

   const onSearch = async (id) => {
      // promesas
      // fetch(`${URL}${id}`)
      //   .then((response) => response.json())
      //   .then((data) => {
      //     console.log('la data que nos lelga con el id', data);
      //     setCharacters([...characters, data]);
      //   });
      // .error((error) => console.log('error', error));

      // async await

      try {
         const response = await fetch(`${URL}${id}`);
         const data = await response.json();
         setCharacters([...characters, data]);
      } catch (error) {
         console.log('error', error);
      }
   }

   const onClose = (id) => {
      const personajesFiltrados = characters.filter((character) => character.id !== id);
      setCharacters(personajesFiltrados);
   }


   return (
      <div className='App'>
         
         <Nav onSearch={onSearch} />

         <Routes>
             <Route path='/Home' element={
               <Cards 
                characters={characters}
                onClose={onClose}
               />
             }/>

             <Route path='/About' element={
                <About />
             }/>

             <Route path='/details/:detailId' element={<Details />}/>
         </Routes>
      
      
      </div>
   );
}

export default App;

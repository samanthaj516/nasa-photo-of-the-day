// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import './App.css';
// import Header from './components/Header';
// import Container from './components/Container';
// import Photo from './components/Photo';
// import styled from 'styled-components';

// const StyledApp = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-flow: column nowrap;
//   padding: 50px;
//   min-height: 100vh;
// `;

// const App = () => {
//   const [photo, setPhoto] = useState([]);

//   const fetchPhoto = () => {
//     axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
//     .then((response) => {
//       console.log(response.data)
//       setPhoto(response.data)
//     })
//     .catch((error) => 
//       console.log(error))
//   }

//   useEffect(fetchPhoto, []);

//   return (
//     <StyledApp className="App">
//       <Header/>
//       
//       <Photo photo={photo}></Photo> 
//     </StyledApp>
//   );
// }

// export default App;

import React from "react";
import "./App.css";
import Data from "./data";


function App() {
  return (
    <div className="App">
      <Data />
    </div>
  );
}

export default App;

// https://api.nasa.gov/planetary/apod?api_key=jV4lgbAY9tt39f0belXXdv4lCiqf27vb4rRIdfB3
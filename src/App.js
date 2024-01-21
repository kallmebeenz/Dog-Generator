import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DogAPI from './DogAPI';
import DogBreeds from './DogBreeds'; 
import DogBreedsWithImages from './DogBreedsWithImages';

function App() {
  return (
    <div className="App">
       <DogBreedsWithImages/>
    </div>
  );
}

export default App;

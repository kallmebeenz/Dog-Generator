import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DogBreedsWithImages() {
  const [numberOfDogs, setNumberOfDogs] = useState(3); // Default to 3 dogs
  const [dogData, setDogData] = useState([]);
  const [loading, setLoading] = useState(true);

  // This code snippet appears to be written in a React functional component. It utilizes the useEffect hook to fetch dog images from an API when the 'numberOfDogs' prop changes, and then updates the component's state accordingly.

// The useEffect hook is used to perform side effects in a React component.
useEffect(() => {
  // Inside the useEffect function, we define an asynchronous function called 'fetchData'.
  const fetchData = async () => {
    try {
      // Within 'fetchData', an HTTP GET request is made using the Axios library to the Dog API.
      const response = await axios.get(
        `https://dog.ceo/api/breeds/image/random/${numberOfDogs}`
      );

      // Once the response is received, the 'setDogData' function is called with the fetched dog images.
      // This updates the component's 'dogData' state with the data from the API response.
      setDogData(response.data.message);

      // Additionally, the 'setLoading' function is called with 'false' to indicate that the data has been fetched and loading is complete.
      setLoading(false);
    } catch (error) {
      // In case there is an error during the API request, an error message is logged to the console.
      console.error('Error fetching dog data:', error);

      // Also, the 'setLoading' function is called with 'false' to indicate that loading is complete even in the case of an error.
      setLoading(false);
    }
  };

  // Finally, the 'fetchData' function is called immediately to trigger the API request when the component renders or when 'numberOfDogs' changes.
  fetchData();
}, [numberOfDogs]);

const handleNumberOfDogsChange = (event) => {
  setNumberOfDogs(event.target.value);
};

  // This code defines a function called 'getBreedName' that takes a URL as its parameter.

const getBreedName = (url) => {
  // Inside the function:
  
  // 1. The URL is split into an array of parts using the '/' character as the separator.
  const parts = url.split('/');
  
  // 2. The fourth part of the URL (index 4 in the array) typically represents the breed name.
  // This is assuming that the URL has a specific structure where the breed name is the fourth part.
  const breedName = parts[4];
  
  // 3. The breed name may contain hyphens (e.g., "german-shepherd"), so 'replaceAll' is used to replace all hyphens with spaces.
  // This results in a more human-readable format for the breed name.
  return breedName.replaceAll('-', ' ');
};


  return (
    <div>
      <h1 className="text-center">Random Dog Images with Breeds</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <label>
              Number of Dogs:
              <input
                type="number"
                value={numberOfDogs}
                onChange={handleNumberOfDogsChange}
                min="1"
                className="form-control"
              />
            </label>
          </div>
        </div>
        <div className="row mt-4">
          {loading ? (
            <p>Loading...</p>
          ) : (
            dogData.map((dogImageUrl, index) => (
              <div className="col-md-4" key={index}>
                <div className="card">
                  <img
                    src={dogImageUrl}
                    alt={`Random Dog ${index}`}
                    width="400px" height="400px"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <p className="card-text">{getBreedName(dogImageUrl)}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default DogBreedsWithImages;

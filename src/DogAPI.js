import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DogAPI() {
  const [numberOfDogs, setNumberOfDogs] = useState(1);
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

  return (
    <div>
      <h1>Random Dog Images</h1>
      <label>
        Number of Dogs:
        <input
          type="number"
          value={numberOfDogs}
          onChange={handleNumberOfDogsChange}
          min="1"
        />
      </label>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {dogData.map((dogImageUrl, index) => (
            <img key={index} src={dogImageUrl} width="400px" height="400px" alt={`Random Dog ${index}`} />
          ))}
        </div>
      )}
    </div>
  );
}

export default DogAPI;

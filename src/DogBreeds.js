// DogBreeds.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DogBreeds() {
  const [dogBreeds, setDogBreeds] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDogBreeds = async () => {
      try {
        const response = await axios.get('https://dog.ceo/api/breeds/list/all');
        setDogBreeds(response.data.message);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching dog breeds:', error);
        setLoading(false);
      }
    };

    fetchDogBreeds();
  }, []);

  return (
    <div>
      <h1>List of Dog Breeds</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {Object.keys(dogBreeds).map((breed, index) => (
            <li key={index}>
              <strong>{breed}</strong>: {dogBreeds[breed].join(', ')}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DogBreeds;

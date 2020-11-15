import React, { useState } from "react";

const DogGallery = () => {
  const [dogPhotos, setDogPhotos] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);

  async function getFriend() {
    try {
      setLoading(true);
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await res.json();
      setDogPhotos([...dogPhotos, data.message]);
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
      console.error(err);
    }
  }
  return (
    <div>
      <Button handleDog={getFriend} />
      <DogPhoto
        dogHolder={{
          dogPhotos: dogPhotos,
          isLoading: isLoading,
          hasError: hasError,
        }}
      />
    </div>
  );
};

const Button = (props) => <button onClick={props.handleDog}>Get a dog!</button>;

const DogPhoto = ({ dogHolder }) => {
  const { dogPhotos, isLoading, hasError } = dogHolder;
  return (
    <div>
      {isLoading && <p>Loading ... </p>}
      {!hasError &&
        dogPhotos.map((dog, index) => (
          <img src={dog} width="100px" alt="dog" key={index} />
        ))}
    </div>
  );
};

export default DogGallery;

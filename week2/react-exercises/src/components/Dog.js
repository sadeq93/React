import React, { useState } from "react";
const shortid = require("shortid");
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
      <Button handleChange={getFriend} />
      <DogPhoto
        dogInfo={{
          dogPhotos: dogPhotos,
          isLoading: isLoading,
          hasError: hasError,
        }}
      />
    </div>
  );
};

const Button = (props) => (
  <button onClick={props.handleChange}>Get a dog!</button>
);

const DogPhoto = ({ dogInfo }) => {
  const { dogPhotos, isLoading, hasError } = dogInfo;
  return (
    <div>
      {isLoading && <p>Loading ... </p>}
      {!hasError &&
        dogPhotos.map((dog) => (
          <img src={dog} width="100px" alt="dog" key={shortid.generate()} />
        ))}
    </div>
  );
};

export default DogGallery;

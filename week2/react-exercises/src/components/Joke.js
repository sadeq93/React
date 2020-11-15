import React, { useEffect, useState } from "react";

const RandomJoke = () => {
  const [joke, setJoke] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);

  async function fetchJoke() {
    try {
      setLoading(true);
      const res = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const data = await res.json();
      setJoke(data);
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
      console.error(err);
    }
  }

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <Joke
      jokeHolder={{
        joke: joke,
        isLoading: isLoading,
        hasError: hasError,
      }}
    />
  );
};

const Joke = ({ jokeHolder }) => {
  const { joke, isLoading, hasError } = jokeHolder;
  return (
    <div>
      {isLoading && <p>Loading ... </p>}
      {!hasError && (
        <div>
          <p>{joke.setup}</p>
          <p>{joke.punchline}</p>
        </div>
      )}
    </div>
  );
};

export default RandomJoke;

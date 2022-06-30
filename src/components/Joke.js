import React from "react";

function Joke({ get, joke }) {
  return (
    <div className="joke">
      <div>
        <button onClick={get}>Give me a joke : )</button>
      </div>
      <p>{joke.joke}</p>
    </div>
  );
}

export default Joke;

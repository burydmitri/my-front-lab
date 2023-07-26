import { useState, useEffect } from "react";

interface iJoke {
  setup: string;
  punchline: string;
}
export default function randomJoke() {
  const [joke, setJoke] = useState<iJoke>({ setup: "", punchline: "" });

  async function fetchJoke() {
    let response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    if (response.ok) {
      let json = await response.json();
      setJoke({
        setup: json.setup,
        punchline: json.punchline,
      });
    } else {
      alert("HTTP error: " + response.status);
    }
  }

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <>
      <h1 className="mt-0 mb-4 text-4xl font-bold md:text-5xl ">
        Typed.js + random joke 🤡
      </h1>
      <br />
      <p className="prose-m px-12 text-gray-500 md:px-0">
        I want to try some animation libs. Typed.js looks like something that
        can be used often
      </p>

      <br />
      <br />
      <br />

      <p>{joke.setup ? `${joke.setup}\n ${joke.punchline}` : "Loading..."}</p>

      <br />
      <a
        href="https://github.com/burydmitri/my-front-lab/tree/master/lab/src/pages/random-joke-api.tsx"
        className="border-b lg:text-gray-400"
      >
        Code on github
      </a>

      <br />
      <br />
      <br />

      <p className="font-medium">I like it</p>
    </>
  );
}

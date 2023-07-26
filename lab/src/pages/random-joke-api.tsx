import { useState, useEffect, useRef } from "react";
import Typed from "typed.js";

interface iJoke {
  setup: string;
  punchline: string;
}
export default function randomJoke() {
  const el = useRef(null);
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

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [`${joke.setup}`, `${joke.punchline}`],
      typeSpeed: 70,
    });

    return () => {
      typed.destroy();
    };
  }, [joke]);

  return (
    <>
      <h1 className="mt-0 mb-4 text-4xl font-bold md:text-5xl ">
        Text animations + jokes 🤡
      </h1>
      <br />
      <p className="prose-m px-12 text-gray-500 md:px-0">
        I want to try some animation libs (here I test only text effects)
      </p>

      <br />
      <br />
      <h2 className="mt-0 mb-4 font-bold md:text-2xl ">
        <a href="https://github.com/mattboldt/typed.js/">types.js</a>
      </h2>

      <div className="bg-gray-800 p-10 rounded-xl">
        <span ref={el} className="text-tertiary-300 font-mono"></span>
      </div>

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

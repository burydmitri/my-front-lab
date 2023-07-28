import { useState, useEffect, useRef } from "react";
import Typed from "typed.js";
import { VaraJoke } from "@/components/vara-joke";
interface iJoke {
  setup: string;
  punchline: string;
}
export default function randomJoke() {
  const el1 = useRef(null);
  const el2 = useRef(null);
  const el3 = useRef(null);
  const el4 = useRef(null);
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
    const typed = new Typed(el1.current, {
      strings: [`${joke.setup}`, `${joke.punchline}`],
      typeSpeed: 70,
    });

    return () => {
      typed.destroy();
    };
  }, [joke]);
  useEffect(() => {
    const typed = new Typed(el2.current, {
      cursorChar: "👨‍💻",
      strings: [`${joke.setup}`, `${joke.punchline}`],

      loop: true,
      typeSpeed: 100,

      fadeOut: true,
      fadeOutDelay: 2000,
    });

    return () => {
      typed.destroy();
    };
  }, [joke]);
  useEffect(() => {
    const typed = new Typed(el3.current, {
      strings: [
        `And another one window...`,
        `And another for observing Smart Backspacing`,
        `And 😺😺😺😺😺😺`,
      ],
      typeSpeed: 50,

      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, [joke]);

  useEffect(() => {
    const typed = new Typed(el4.current, {
      strings: [`${joke.setup}^1000 '${joke.punchline}'`],
      loop: true,
      typeSpeed: 30,
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
        <a href="https://github.com/mattboldt/typed.js/">Types.js</a>
      </h2>

      <div className="bg-gray-800 p-10 rounded-xl">
        <span ref={el1} className="text-tertiary-300 font-mono"></span>
      </div>
      <br />
      <div className="bg-gray-800 p-10 rounded-xl">
        <span ref={el2} className="text-tertiary-300 font-mono"></span>
      </div>
      <br />
      <div className="bg-gray-800 p-10 rounded-xl">
        <span ref={el3} className="text-tertiary-300 font-mono"></span>
      </div>
      <br />
      <div className="bg-gray-800 p-10 rounded-xl">
        <span ref={el4} className="text-tertiary-300 font-mono"></span>
      </div>
      <br />

      <p>
        Typed.js is a library that types. A simple tool with enough settings
      </p>

      <br />
      <br />

      <h2 className="mt-0 mb-4 font-bold md:text-2xl ">
        <a href="https://github.com/akzhy/Vara">Vara.js</a>
      </h2>

      <VaraJoke id="vara1" setup={joke.setup} punch={joke.punchline}></VaraJoke>
      <br />
      <VaraJoke
        id="vara2"
        setup={joke.setup}
        punch={joke.punchline}
        font={2}
      ></VaraJoke>
      <br />
      <VaraJoke
        id="vara3"
        setup={joke.setup}
        punch={joke.punchline}
        width={1}
        font={3}
      ></VaraJoke>
      <br />
      <VaraJoke
        id="vara4"
        setup={joke.setup}
        punch={joke.punchline}
        width={2}
        font={4}
        color="#be185d"
      ></VaraJoke>

      <br />

      <p>
        Vara is a javascript library that can create text drawing animations. There are 4 fonts, but you can make custom
      </p>

      <br />
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

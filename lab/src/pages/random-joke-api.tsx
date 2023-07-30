import { useState, useEffect } from "react";
import { TypedJoke } from "@/components/typed-joke";
import { VaraJoke } from "@/components/vara-joke";
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

      <TypedJoke string={[`${joke.setup}`, `${joke.punchline}`]}></TypedJoke>
      <br />
      <TypedJoke
        string={[`${joke.setup}`, `${joke.punchline}`]}
        loop={true}
        fadeOut={true}
        cursorChar="👨‍💻"
      ></TypedJoke>
      <br />
      <TypedJoke
        string={[
          `And another one window...`,
          `And another for observing Smart Backspacing`,
          `And 😺😺😺😺😺😺`,
        ]}
        loop={true}
        typeSpeed={50}
      ></TypedJoke>
      <br />
      <TypedJoke
        string={[`${joke.setup}^1000 '${joke.punchline}'`]}
        loop={true}
        typeSpeed={30}
      ></TypedJoke>
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
        duration={1000}
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
        duration={3500}
      ></VaraJoke>

      <br />

      <p>
        Vara is a javascript library that can create text drawing animations.
        There are 4 fonts, but you can make custom
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

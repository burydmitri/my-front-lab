import { useEffect, useRef } from "react";
import Typed from "typed.js";

interface iTypedJoke {
  string: Array<string>;
  loop?: boolean;
  fadeOut?: boolean;
  fadeOutDelay?: number;
  typeSpeed?: number;
  cursorChar?: string;
}

export function TypedJoke({
  string,
  loop = false,
  fadeOut = false,
  fadeOutDelay = 2000,
  typeSpeed = 70,
  cursorChar = '|',
}: iTypedJoke) {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: string,
      loop: loop,
      fadeOut: fadeOut,
      fadeOutDelay: fadeOutDelay,
      typeSpeed: typeSpeed,
      cursorChar: cursorChar,
    });

    return () => {
      typed.destroy();
    };
  }, [string]);
  return (
    <div className="bg-gray-800 p-10 rounded-xl">
      <span ref={el} className="text-tertiary-300 font-mono"></span>
    </div>
  );
}

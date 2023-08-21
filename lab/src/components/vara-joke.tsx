import Vara from "vara";
import { useEffect, useRef } from "react";

interface iVaraJoke {
  id: string;
  setup: string;
  punch: string;
  font?: 1 | 2 | 3 | 4;
  fontSize?: number;
  width?: number;
  color?: string;
  duration?: number;
}

export function VaraJoke({
  id,
  setup,
  punch,
  font = 1,
  fontSize = 24,
  width = 0.5,
  color = "black",
  duration = 2000,
}: iVaraJoke) {

  const ref = useRef<HTMLDivElement>(null);
  let fontUrl: string;
  switch (font) {
    case 1: {
      fontUrl =
        "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json";
      break;
    }
    case 2: {
      fontUrl =
        "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Pacifico/PacificoSLO.json";
      break;
    }
    case 3: {
      fontUrl =
        "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Parisienne/Parisienne.json";
      break;
    }
    case 4: {
      fontUrl =
        "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Shadows-Into-Light/shadows-into-light.json";
      break;
    }
  }

  useEffect(() => {
    ref.current?.replaceChildren();

    let vara = new Vara(
      `#${id}`,
      fontUrl,
      [
        {
          text: setup,
        },
        {
          text: punch,
        },
      ],
      {
        color: color,
        fontSize: fontSize,
        strokeWidth: width,
        duration: duration,
      }
    );
  }, [id, setup, punch, font, fontSize]);
  return <div id={id} ref={ref} className="bg-gray-100 p-5 rounded-md"></div>;






  
}

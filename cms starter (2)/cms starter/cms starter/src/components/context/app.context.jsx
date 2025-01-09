import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);
  const [slider, setSlider] = useState(true);
  const [sliderImg, setSliderImg] = useState({
    1: "/pobrane.jpg",
    2: "/image.jpg",
    3: "/pobrane(1).jpg",
  });
  const [logOut, setLogOut] = useState(true);
  const [boxColor, setBoxColor] = useState({
    1: "#808080",
    2: "#808080",
    3: "#808080",
  });

  return (
    <AppContext.Provider
      value={{
        logged,
        setLogged,
        slider,
        setSlider,
        sliderImg,
        setSliderImg,
        logOut,
        setLogOut,
        boxColor,
        setBoxColor,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

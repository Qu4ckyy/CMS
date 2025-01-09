import "./Dashboard.scss";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AppContext } from "../context/app.context";
import { click } from "@testing-library/user-event/dist/click";

const Dashboard = () => {
  const {
    slider,
    setSlider,
    sliderImg,
    setSliderImg,
    boxColor,
    setBoxColor,
    setLogged,
  } = useContext(AppContext);

  const [footerText, setFooterText] = useState("");

  const setSliderImgHanlder = (e) => {
    const sliderNumber = Number(e.target.name);
    const sliderImgValue = e.target.value;

    sliderImg[sliderNumber] = sliderImgValue;

    setSliderImg(sliderImg);
  };

  const setBoxColorHandler = (e) => {
    const boxNumber = Number(e.target.name);
    const boxColorValue = e.target.value;

    boxColor[boxNumber] = boxColorValue;

    setBoxColor(boxColor);
  };
  const logOutFn = () => {
    if (click) {
      setLogged(false);
    }
  };

  const saveFooterText = () => {
    const footerElement = document.querySelector(".footer-container h2");
    if (footerElement) {
      footerElement.textContent = `Made by #TechniSchools - ${footerText}`;
    }
  };

  const handleFooterTextChange = (e) => {
    setFooterText(e.target.value);
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <Link to="/">See home page</Link>
      <div className="settings">
        <div className="header">
          <h2>Slider</h2>
          <button onClick={() => setSlider(!slider)}>
            {slider ? "OFF" : "ON"}
          </button>
        </div>
        <div className="options">
          <div className="slider-links">
            <input
              onChange={(e) => setSliderImgHanlder(e)}
              defaultValue={sliderImg[1]}
              type="text"
              name="1"
              placeholder="enter url"
            />
            <input
              onChange={(e) => setSliderImgHanlder(e)}
              defaultValue={sliderImg[2]}
              type="text"
              name="2"
              placeholder="enter url"
            />
            <input
              onChange={(e) => setSliderImgHanlder(e)}
              defaultValue={sliderImg[3]}
              type="text"
              name="3"
              placeholder="enter url"
            />
          </div>
          <div className="colors">
            <h2>Box colors</h2>
            <input
              onChange={(e) => setBoxColorHandler(e)}
              defaultValue={boxColor[1]}
              type="color"
              name="1"
            />
            <input
              onChange={(e) => setBoxColorHandler(e)}
              defaultValue={boxColor[2]}
              type="color"
              name="2"
            />
            <input
              onChange={(e) => setBoxColorHandler(e)}
              defaultValue={boxColor[3]}
              type="color"
              name="3"
            />
          </div>

          <input
            type="text"
            placeholder="Edytuj stopkę"
            onChange={handleFooterTextChange}
            value={footerText}
          />
          <button onClick={saveFooterText}>Zapisz</button>
        </div>
        <div className="LogOut">
          <button onClick={logOutFn}>Wyloguj</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

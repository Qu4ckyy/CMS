import "./Boxes.scss";
import { AppContext } from "../context/app.context";
import { useContext } from "react";

const Boxes = () => {
  const { boxColor } = useContext(AppContext);

  console.log(boxColor);

  return (
    <div id="boxes" className="container">
      <div className="boxes">
        <div className="box" style={{ backgroundColor: boxColor[1] }}>
          <h2>Kurs HTML</h2>
          <ul>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>
        <div className="box" style={{ backgroundColor: boxColor[2] }}>
          <h2>Kurs CSS</h2>
          <ul>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>
        <div className="box" style={{ backgroundColor: boxColor[3] }}>
          <h2>Kurs JavaScript</h2>
          <ul>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Boxes;

import logo from "./logo.svg";
import "./App.scss";
import Header from "./layout/header/Header";
import video3d from "./assets/videos/3dvideo.mp4";
import icon3d from "./assets/icon3d.png";

function App() {
  return (
    <div className="App gap-5 mb-5">
      <Header />
      <div className="px-4">
        <div className="d-flex justify-content-between">
          <div className="flex-grow m-5">
            <div className="content">
              <p className="p-heading">
                Don't Just “<span className="b-highlight">Build</span>”.
              </p>
              <p className="p-heading">
                Engineer the <span className="b-highlight">Future.</span>
              </p>
              <p className="w-75 py-4 content-p-text">
                We transform complex visions into precise, buildable realities
                using cutting-edge digital engineering.
              </p>
              <div>
                <button
                  className="btn btn-primary me-3 d-block mb-4"
                  type="button"
                >
                  See Our Solutions
                </button>
                <button className="btn btn-outline-primary" type="button">
                  Let's talk about project
                </button>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-center m-5">
            <img src={icon3d} alt="Maksim" className="img-3d" />
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between ps-5 gap-5">
      <div className="video-frame">
          <video
            src="https://www.shutterstock.com/shutterstock/videos/3750282613/preview/stock-footage-background-architectural-layout-concept-schematic-drawing-of-house-rotates-loop-d-rendering.webm"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata" // or "auto" if file is optimized
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          </div>
          <div className="flex-grow m-5">
            <div className="content">
              <p className="p-heading">
              Developing <span className="b-highlight">Tomorrow</span>
              </p>
              <p className="p-heading">
              Advanced <span className="b-highlight">Engineering.</span>
              </p>
              <p className="w-75 py-4 content-p-text">
              Our expertise is your asset. We deliver innovative engineering solutions 
              tailored to your specific needs.
              </p>
              <div>
                <button
                  className="btn btn-primary me-3 d-block mb-4"
                  type="button"
                >
                   Explore Our Solutions
                </button>
                <button className="btn btn-outline-primary" type="button">
                Let's Find Our Our Solutions
                </button>
              </div>
            </div>
          </div>
          {/* <div className="d-flex justify-content-start align-items-center m-5">
            <img src={icon3d} alt="Maksim" className="img-3d" />
          </div> */}
        </div>
    </div>
  );
}

export default App;

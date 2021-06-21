import "./App.css";
import Lottie from "lottie-react";
import dino from "./dino.json";
function App() {
  return (
    <div className="App">
      <div className="sky">
        <h1 className="title">Walking Dino</h1>
        <div className="dino">
          <Lottie animationData={dino} style={{ height: "auto", width: 800 }} />
        </div>
        <div className="mountain"></div>
        <div className="grass"></div>
      </div>
    </div>
  );
}

export default App;

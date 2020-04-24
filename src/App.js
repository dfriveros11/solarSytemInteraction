import React from "react";

import { Canvas } from "react-three-fiber";
import SolarSystem from "./component/SolarSystem.js";

function App() {
  return (
    <div className="App">
      <Canvas camera={{ position: [10, 0, 0] }}>
        <SolarSystem />
      </Canvas>
    </div>
  );
}

export default App;

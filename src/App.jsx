import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Simulador from "./pages/Simulador";
import Solicitar from "./pages/Solicitar";
import Solicitudes from "./pages/Solicitudes";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simulador" element={<Simulador />} />
        <Route path="/solicitar" element={<Solicitar />} />
        <Route path="/solicitudes" element={<Solicitudes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BaseLayout from "./concepts/shared/components/BaseLayout";
import {
  SetsBasic,
  SelfContainingSets,
  NonSelfContainingSets,
  BarberExample,
} from "./concepts/russels_paradox/steps";
import { SchrodingersCat } from "./concepts/schrodingers_cat/Index";
import {
  TheLetter,
  EPR,
  CatAnologyInformative,
  CatAnalogyInteractive
} from "./concepts/schrodingers_cat/steps";
import { RusselsParadox } from "./concepts/russels_paradox";
import Home from "./basic/components/Home";
import About from "./basic/components/About";
import TheSetParadox from "./concepts/russels_paradox/steps/TheSetParadox";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/russels-paradox"
          element={<BaseLayout concept="Russel's Paradox" />}
        >
          <Route index element={<RusselsParadox />} />
          <Route path="1" element={<SetsBasic />} />
          <Route path="2" element={<SelfContainingSets />} />
          <Route path="3" element={<NonSelfContainingSets />} />
          <Route path="4" element={<TheSetParadox />} />
          <Route path="5" element={<BarberExample />} />
        </Route>
        <Route
          path="/schrodingers-cat"
          element={<BaseLayout concept="Schrödinger's Cat" />}
        >
          <Route index element={<SchrodingersCat />} />
          <Route path="1" element={<EPR />} />
          <Route path="2" element={<TheLetter />} />
          <Route path="3" element={<CatAnologyInformative />} />
          <Route path="4" element={<CatAnalogyInteractive />} />
        </Route>
      </Routes>
    </Router>
  );
}

import {BrowserRouter , Routes , Route} from "react-router-dom"
import AnimeItem from "./Component/AnimeItem";
import Popular from './Component/Popular';
import Homepage from "./Component/Homepage";
import Gallery from "./Component/Gallery";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/anime/:id" element={<AnimeItem />} />
        <Route path="/character/:id" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;


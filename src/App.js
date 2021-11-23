import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home/Home";
import Loader from "components/Loader";

function App() {
  return (
    <>
      <Loader style={{zIndex: '1000000000000000'}}/>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>

    </>
  );
}

export default App;

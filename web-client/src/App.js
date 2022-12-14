import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import Main from "./components/Main/index";
import About from "./components/About/index";
// import { MyChart } from './components/Progress/PieChart.js';
import { Progress } from "./components/Progress/Progress";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/progress" element={<Progress />}></Route>
          <Route path="/" element={<Main />}></Route>
        </Routes>

        <Footer />
      </Router>
    </>
  );
};

export default App;

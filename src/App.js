import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css";
// import { Section1, Section2, Section3 } from "./section1.js";
import Section1 from "./pages/section1.js";
import Section2 from "./pages/section2.js";
import Section3 from "./pages/section3.jsx";
import Section4 from "./pages/section4.jsx";
import Section5 from "./pages/section5.jsx";
import data from "./pages/data";
import Details from "./pages/Details.jsx";
import { useState } from "react";

function App() {
  let [pd, setPd] = useState(data);
  // console.log(pd);
  let nav = useNavigate();

  return (
    <div className="App">
      <header className="App-header mw">
        <Link to="/" className="logo">
          <img src="/img/logo.svg" />
        </Link>
        <nav className="gnb">
          <Link to="/sec2">Section2</Link>
          <Link to="/sec3">Section3</Link>
          <Link to="/sec4">Section4</Link>
        </nav>
        <button
          className="person"
          onClick={() => {
            nav(-2);
          }}
        >
          두 단계 전으로
        </button>
        <Link to="/" className="person">
          개인페이지
        </Link>
      </header>

      <Routes>
        <Route path="*" element={<div>페이지 없음 (404)</div>} />
        <Route path="/" element={<Section1 />} />
        <Route path="/sec2" element={<Section2 data={pd} />} />
        <Route path="/sec3" element={<Section3 />}>
          <Route path="member" element={<div>회사소개</div>} />
          <Route path="location" element={<div>회사위치</div>} />
        </Route>
        <Route path="/sec4" element={<Section4 />} />
        <Route path="/sec5" element={<Section5 />} />
        <Route path="/detail/:id" element={<Details data={pd} />} />
      </Routes>

      <footer className="ft">
        <div className="ft_inner mw">
          <ul className="ft_nav">
            <li>
              <Link to="#">HOME</Link>
            </li>
            <li>
              <Link to="#">О НАС</Link>
            </li>
            <li>
              <Link to="#">ОФЕРТА</Link>
            </li>
            <li>
              <Link to="#">КОРЗИНА</Link>
            </li>
            <li>
              <Link to="#">FAQ</Link>
            </li>
          </ul>
          <ul className="sns_list">
            <li>
              <Link to="#">
                <img src="/img/sns01.png" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src="/img/sns02.png" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src="/img/sns03.png" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src="/img/sns04.png" />
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;

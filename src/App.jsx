import "./App.css";
import { Routes, Route } from "react-router-dom";
import { NavBar, Home, Category } from "./components";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />}>
          <Route path=":categoryName" element={<Category />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import Header from "./my_Component/Header";
import Footer from "./my_Component/Footer";
import Main from "./my_Component/Main";

// import Todo from "./my_Component/Todo";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import CardCom from "./my_Component/CardCom";
function App() {
  return (
    <Router>
        <Header/>
          <Routes>
        
       <Route path="/">
        <Main/>
       </Route>
      </Routes>
      <Footer/>
      </Router>
  
  );
}

export default App;

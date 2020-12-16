import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {BrowserRouter} from "react-router-dom";
import App1 from "./Reactmenu/App1";
import "./Reactmenu/Style.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <App1/>
      </BrowserRouter>
    </div>
  );
}

export default App;

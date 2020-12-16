// import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import WishMessage from "./Wish/WishMessage";
 import Counter from "./Counter/Counter";
 import AnotherCounter from "./AnotherCounter/AnotherCounter"
 import {store} from "./ReduxDetail/store";
import { Provider } from 'react-redux';


function App() {
  return (
    <div className="App">
      
      <Provider store={store}>
      <WishMessage/>
      <Counter/>
      <AnotherCounter/>
      </Provider>
      

     
    </div>
  );
}

export default App;


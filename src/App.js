import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>

    </div>
  );
}

function Person(){
  return (
    <div className="container">
      <h1>Name: Shakib Al Hasan</h1>
      <h4>Profession: Cricketer</h4>
    </div>
  );
}

export default App;

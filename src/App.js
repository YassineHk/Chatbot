import React from 'react';
import './App.css';
import Cart from './Components/Card'
import Button from 'react-bootstrap/Button'
import CartData from './Data'


function App() {
  return (
    <div >
      <header className="App-header"> 
        <Cart/>
        <div >
        <Button className="btn"  type="submit">
          Suivant
        </Button>
        </div>
      </header>
    </div >
  );
}

export default App;

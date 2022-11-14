import logo from './logo.svg';
import Header from './components/Header'
import React, { useState, useEffect } from 'react';
import './App.css';
import OnSaleItemsList from './components/OnSaleItemsList';

function fetchOnSaleItems(){
  console.log("Hello")
}

function App() {
  const [onSaleItems, setOnSaleItems] = useState([]);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/onsale-items/')
    .then((response) => response.json())
    .then(data => 
      //console.log(data)
     setOnSaleItems(data)
      )
 }, []);
  return (
    
    <div className="main-container">
      <Header username={'Tesfatsion'}/>
      <OnSaleItemsList onSaleItems={onSaleItems} />
    </div>
  );
}

export default App;

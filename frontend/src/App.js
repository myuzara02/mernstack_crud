import React, { Component } from 'react';
import ProductList from './components/ProductList';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import EditProduct from './components/EditProduct';
import AddProduct from './components/AddProduct';

class App extends Component {
  render() {
    return (

      <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList/>}/>
          <Route path="/add" element={<AddProduct/>}/>
          <Route path="/edit/:id" element={<EditProduct/>}/>
        </Routes>
      </BrowserRouter>
    </div>
      
    );
  }
}

export default App;

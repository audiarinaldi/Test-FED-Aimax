import './App.css';
import React from 'react';
import Data from './Data';
import AddData from './AddData';
import DetailData from './DetailData';
import EditData from './EditData';
import Navbar from './Navbar';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

function App() {
  const title = 'Data'
  return (
    <BrowserRouter>
    <div className="App">
      <div className="content">
        <Navbar/>
        <h1>{title}</h1>
          <Routes>
            <Route path='/' element={<Data/>}></Route>
            <Route path='/AddData/' element={<AddData/>}></Route>
            <Route path='/DetailData/:id' element={<DetailData/>}></Route>
            <Route path='/EditData/:id' element={<EditData/>}></Route>

          </Routes>
      </div>
    </div>
    </BrowserRouter>

  );
}

export default App;

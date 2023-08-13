// src/App.tsx
import React from 'react';
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import './App.css';
import LoginPage from './screens/LoginPage';
import Home from './screens/Home';
import Books from './screens/Books';

function App() {
  return (
    <BrowserRouter>
      <div className="App"> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/books" element={<Books />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

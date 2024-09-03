import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShowDetails from './components/ShowDetails';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/show/:id" element={<ShowDetails />} />
      </Routes>
    </Router>
  );
};

export default App;

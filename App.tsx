import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import System from './pages/System';
import Reviews from './pages/Reviews';
import Checkout from './pages/Checkout';
import Success from './pages/Success';
import Legal from './pages/Legal';
import ImageGenerator from './pages/ImageGenerator';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/system" element={<System />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/generate" element={<ImageGenerator />} />
        <Route path="/success" element={<Success />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
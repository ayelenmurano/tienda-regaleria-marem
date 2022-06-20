import React from 'react';
import './App.css';
import CategoriesProviders from './context/category/Providers';
import RoutesApp from './routes';

function App() {
  return (
    <CategoriesProviders className="App">
        <RoutesApp />
    </CategoriesProviders>
  );
}

export default App;

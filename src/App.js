import React from 'react';

// import { Container } from './styles';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';
export default function App() {
  return (
    <BrowserRouter>
      <Routes></Routes>
    </BrowserRouter>
  );
}

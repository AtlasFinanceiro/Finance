import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Detalhamento from './Detalhamento';
import Perfil from './Perfil';
import ListaDeAtivos from './ListaDeAtivos';

function App() {
  const [state, setState] = useState({visible: false});

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home state={state} setState={setState} />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/detalhamento" element={<Detalhamento />} />
        <Route path='/ativos' element={<ListaDeAtivos />} />
      </Routes>
    </Router>
  );
}

export default App;
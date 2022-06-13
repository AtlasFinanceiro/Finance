import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { BrowserRouter as Router, Routes, Route, Navegate } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Cadastro/Login';
import SignUp from '../pages/Cadastro/SignUp';
import Perfil from '../pages/Perfil/Perfil';
import ListaDeAtivos from '../pages/ListaDeAtivos/ListaDeAtivos';
import Carteira from '../pages/Carteira/Carteira';
import DetalhamentoIndicadores from '../pages/Detalhamento/Detalhamento Indicadores';
import DetalhamentoCotacoes from '../pages/Detalhamento/Detalhamento Cotacoes';
import { fetchAtivos } from '../store/slices/AtivosSlice';
import { fetchAtivosCarteira } from '../store/slices/CarteiraSlice';
import Watchlist from './Watchlist/Watchlist';

store.dispatch(fetchAtivos());
store.dispatch(fetchAtivosCarteira());



function App() {
  const [state, setState] = useState({visible: false});

  return (<>
            <Provider store={store}>
              <Router>
                <Routes>
                  <Route path="/" element={<Home state={state} setState={setState} />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/sign-up" element={<SignUp />} />
                  <Route path="/perfil" element={<Perfil />} />
                  <Route path='/carteira' element={<Carteira />} />
                  <Route path="/detalhamento_cotacoes" element={<DetalhamentoCotacoes />} />
                  <Route path="/detalhamento_indicadores" element={<DetalhamentoIndicadores />} />
                  <Route path='/ativos' element={<ListaDeAtivos />} />
                  <Route path='/watchlist' element={<Watchlist />} />
                </Routes>
              </Router>
            </Provider>
          </>
  );
}

export default App;
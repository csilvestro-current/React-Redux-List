import React from 'react';
import './App.css';
//React Router
import { BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux';
import Routes from './components/Routes';
import configureStore from './store/configureStore';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
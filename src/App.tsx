import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home.screen';
import { Provider } from 'react-redux';
import { store } from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

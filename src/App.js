import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './pages/login';
import FirnasLog from './pages/firnas_log';
import MedLog from './pages/med_log';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Login} />
        <Route path="/firnas_log" component={FirnasLog} />
        <Route path="/med_log" component={MedLog} />
        {/* Other routes and components */}
      </div>
    </Router>
  );
}

export default App;
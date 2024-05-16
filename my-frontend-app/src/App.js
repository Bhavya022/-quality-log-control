import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Logs from './pages/Logs';
// Import other pages if needed

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" component={Logs} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

import './App.css';
import WelcomePage from './Components/WelcomePage/welcome';
import Questions from './Components/Questions/Questions';
import Applications from './Components/Applications/Applications';
import { Routes, Route } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/questions/:page" element={<Questions />} />
          <Route path="/applications" element={<Applications />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

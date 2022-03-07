import './App.css';
import WelcomePage from './Components/WelcomePage/welcome';
import Questions from './Components/Questions/Questions';
import Applications from './Components/Applications/Applications';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/questions/:page" element={<Questions />} />
          <Route path="/applications" element={<Applications />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

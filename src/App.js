import './App.css';
import WelcomePage from './Components/WelcomePage/welcome';
import Questions from './Components/Questions/Questions';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/questions/:page" element={<Questions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import WelcomePage from './pages/WelcomePage/WelcomePage'
import FrontendPage from './pages/FrontendPage/FrontendPage';
import BackendPage from './pages/BackendPage/BackendPage';
import FullstackPage from './pages/FullstackPage/FullstackPage';

function App() {
    return (
        <Router>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="frontend" element={<FrontendPage />} />
            <Route path="backend" element={<BackendPage />} />
            <Route path="fullstack" element={<FullstackPage />} />
          </Routes>
        </Router>
    );
}

export default App;

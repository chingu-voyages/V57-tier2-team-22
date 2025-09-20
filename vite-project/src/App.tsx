import './globals.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DesignSystem from './pages/DesignSystem';
import PRsPage from './pages/PRsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/design-system" element={<DesignSystem />} />
        <Route path="/prs" element={<PRsPage />} />
      </Routes>
    </Router>
  );
}

export default App;


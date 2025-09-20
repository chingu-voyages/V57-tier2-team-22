import './globals.css';
import DesignSystem from './pages/DesignSystem';
import PRDashboard from './components/Dashboard';
import PRsPage from './pages/PRsPage';

function App() {
  return (
    <>
      <DesignSystem />
      <PRDashboard />
      <div className='h-12 md:h-16'></div>
      <PRsPage />
    </>
  );
}

export default App;


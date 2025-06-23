//App.jsx
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './Welcome';
import Login from './Login';
import DashboardSummary from './DashboardSummary';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashboardSummary />} /> {/* nueva ruta */}
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

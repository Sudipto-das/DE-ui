
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Sidebar from "./components/sidebar/sidebar";
import Dashboard from "./pages/dashboard/dashboard";
import Navbar from './components/navbar/navber';
import ProductionPage from './pages/production/production';

const Layout = () => {
  return (
    <div className="flex items-start justify-start">
      <div className='w-[18%]'><Sidebar /></div>  
      <div className="flex-grow w-[82%]">
        <Navbar />
        <div className="p-4">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/production-Installation" element={<ProductionPage />} />
            {/* Add more routes here */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;

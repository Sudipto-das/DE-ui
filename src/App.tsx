
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Sidebar from "./components/sidebar/sidebar";
import Dashboard from "./pages/dashboard/dashboard";
import Navbar from './components/navbar/navber';
import ProductionPage from './pages/production/production';
import RawMaterials from './pages/rawMaterials/rawmaterials';

const Layout = () => {
  return (
    <div className="flex items-start justify-start">
      <div className='md:w-[18%]'><Sidebar /></div>  
      <div className="flex-grow w-full md:w-[82%]">
        <Navbar />
        <div className="p-4">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/production-Installation" element={<ProductionPage />} />
            <Route path="/raw-materials" element={<RawMaterials />} />
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

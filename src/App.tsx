import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Sidebar from "./components/sidebar/sidebar";
import Dashboard from "./pages/dashboard/dashboard";
import ProductionPage from './pages/production/production';
import RawMaterials from './pages/rawMaterials/rawmaterials';
import InspirationsPage from './pages/inspiration/inspirations';
import Navbar from './components/navbar/navber';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const Layout = () => {
  return (
    <div className="flex">
      <div className="md:fixed md:top-0 md:left-0 h-full md:w-[18%] overflow-y-auto bg-gray-100 z-50 shadow-md">
        <Sidebar />
      </div>
      <div className="md:ml-[18%] flex-grow md:w-[82%]">
        <div className="md:fixed md:top-0 md:left-[18%] md:w-[82%] bg-white md:z-40">
          <Navbar />
        </div>
        <div className="md:pt-16 p-4 md:mt-10">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/production-Installation" element={<ProductionPage />} />
            <Route path="/raw-materials" element={<RawMaterials />} />
            <Route path="/inspirations" element={<InspirationsPage />} />
            {/* Add more routes here */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout />
      </Router>
    </QueryClientProvider>
  );
};

export default App;


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Sidebar from "./components/sidebar/sidebar";
import Dashboard from "./pages/dashboard/dashboard";
import Navbar from './components/navbar/navber';

const Layout = () => {
  return (
    <div className="flex items-start justify-start">
        <Sidebar /> 
      <div className="flex-grow">
        <Navbar />
        <div className="p-4">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Dashboard />} />
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

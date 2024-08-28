import { HashRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';

import Sidebar from "./components/sidebar/sidebar";
import Dashboard from "./pages/dashboard/dashboard";
import ProjectPage from './pages/project/projectPage';
import ProjectDetailsPage from './pages/project/projectDetailsPage';
import ProfilePage from './pages/profile/profilePage';
import LoginPage from './pages/login/loginPage';
import ContextProvider from './context/ContextProvider';
import React from 'react';
import { AppContext } from './context/Context';
import UpdatePage from './pages/updates/updatePage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from './components/navbar/navber';
import ProductionPage from './pages/production/production';
import RawMaterials from './pages/rawMaterials/rawmaterials';
import InspirationsPage from './pages/inspiration/inspirations';
import HelpAndSupport from './pages/help&support/supportPage';
import FinancePage from './pages/finance/financePage';
import Quiz from './pages/Quiz/quiz';
import ChooseRooms from './pages/Quiz/ChooseRoom';
import Consolation from './pages/consolation/Consolation';
import MyDesigns from './pages/mydesigns/MyDesign';
import UploadDocuments from './pages/upload/UploadDocument';


const Layout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';
  const { user: CurrentUser } = React.useContext(AppContext);
  return (
    <div className="flex">
      {!isLoginPage && (
        <div className="md:fixed md:top-0 md:left-0 h-full md:w-[18%] overflow-y-auto bg-gray-100 z-50 shadow-md">
          <Sidebar />
        </div>
      )}
      <div className={!isLoginPage ? "md:ml-[18%] flex-grow md:w-[82%]" : "flex-grow w-full"}>
        {!isLoginPage && (
          <div className="md:fixed md:top-0 md:left-[18%] md:w-[82%] bg-white md:z-40">
            <Navbar />
          </div>
        )}
        <div className={!isLoginPage ? "md:pt-16 p-4 md:mt-6" : "p-0"}>
          <Routes>
            <Route path="/" element={CurrentUser.Id ? <Navigate to="/dashboard" /> : <LoginPage />} />
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/production-Installation" element={<ProductionPage />} />
            <Route path="/raw-materials" element={<RawMaterials />} />
            <Route path="/inspirations" element={<InspirationsPage />} />
            <Route path="/help-support" element={<HelpAndSupport />} />
            <Route path="/finance-your-project" element={<FinancePage />} />
            <Route path="/projects/*" element={<ProjectLayout />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/updates" element={<UpdatePage />} />
            <Route path='/shortlistedinspiration' element={<Quiz />} />
            <Route path='/choose-room' element={<ChooseRooms />} />
            <Route path='/consolation' element={<Consolation />} />
            <Route path='/mydesign' element={<MyDesigns />} />
            <Route path='/uploaddesign&document' element={<UploadDocuments />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
const ProjectLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<ProjectPage />} />
      <Route path=":id" element={<ProjectDetailsPage />} />
    </Routes>
  );
};
const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ContextProvider>
          <Layout />
        </ContextProvider>
      </Router>
    </QueryClientProvider>
  );
};
export default App;
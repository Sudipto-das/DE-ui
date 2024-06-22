import Navbar from "./components/navbar/navber";
import Sidebar from "./components/sidebar/sidebar";

const App = () => {
  return (
    <>
      <div className="flex items-start justify-start">
        <Sidebar/>
        <Navbar/>
      </div>
    </>
  );
}

export default App;
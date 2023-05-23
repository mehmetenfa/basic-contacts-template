import Navigation from "./components/main/Navigation";
import Sidebar from "./components/main/Sidebar";
import Content from "./components/main/Content";

function App() {
  return (
    <div className="flex flex-row h-screen w-screen">
      <div className="w-20 border-r-2 border-borderColor bg-navigation">
        <Navigation />
      </div>
      <div className="w-5/12 bg-sidebar">
        <Sidebar />
      </div>
      <div className="w-7/12 bg-navigation">
        <Content />
      </div>
    </div>
  );
}

export default App;

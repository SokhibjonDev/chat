import './App.css';
// import { Routes, Route } from "react-router-dom";
// import AOS from "aos";
// import 'aos/dist/aos.css'
// AOS.init()
import Navigation from './components/navigation/Navigation'
function App() {
  return (
    <div>
      {/* <Routes>
        <Route path='/' element={<Navigation />} />
      </Routes> */}
      <Navigation />
    </div>
  );
}

export default App;

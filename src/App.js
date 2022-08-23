import './App.css';
// import { Routes, Route } from "react-router-dom";
// import AOS from "aos";
// import 'aos/dist/aos.css'
// AOS.init()
import Navigation from './components/navigation/Navigation'
import Categories from './components/categories/Categories'
import CategoryChat from './components/category-chat/CategoryChat.jsx'
function App() {
  return (
    <div>
      {/* <Routes>
        <Route path='/' element={<Navigation />} />
      </Routes> */}
      <Navigation />
      <Categories/>
      <CategoryChat/>
    </div>
  );
}

export default App;

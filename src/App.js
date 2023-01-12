import logo from './logo.svg';
import './App.css';
import { Routes, Route, Router, BrowserRouter } from 'react-router-dom';
import './Pages/blog/Blog';

import SignUP from './Pages/signUp/SignUP';
import Home from './Pages/home/Home';
import Blog from './Pages/blog/Blog';
import BookMarks from './Pages/bookmarks/BookMarks';
import Uikit from './Pages/uikit/Uikit';
import About from './Pages/about/About';
import Learn from './Pages/learn/Learn';
// import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <SignUp /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignUP />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/bookmarks' element={<BookMarks />} />
          <Route path='/uikit' element={<Uikit />} />
          <Route path='/about' element={<About />} />
          <Route path='/learn' element={<Learn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

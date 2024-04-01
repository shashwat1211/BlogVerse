import {BrowserRouter , Routes , Route  } from "react-router-dom"
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Blogdetails from "./components/BlogDetails";
import Create from "./pages/Create"; 
import MyBlogs from "./pages/MyBlogs"
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Header />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/signup" element = {<Signup/>}/>
            <Route path="/login" element={ <Login />} />
            <Route path="/blogs/:id" element={<Blogdetails/>}/>
            <Route path="/create" element={<Create />} />
            <Route path="/my" element={<MyBlogs/> } />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;

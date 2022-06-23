import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import NewPost from "./components/NewPost";
import EditPost from "./components/EditPost";
import BlogSingle from "./components/BlogSingle";
import Signup from "./components/Signup";
import Login from "./components/Login";
const RouteSwitch = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path='/user/signup' element={<Signup />} />
          <Route path='/user/login' element={<Login />} />
          <Route path="/new" element={<NewPost />} />
          <Route path="/blog/:id" element={<BlogSingle />} />
          <Route path="/blog/:id/edit" element={<EditPost />} />
        </Routes>
      </BrowserRouter>
    );
};
  
export default RouteSwitch;
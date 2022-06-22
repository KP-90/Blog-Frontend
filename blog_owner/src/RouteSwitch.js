import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import NewPost from "./components/NewPost";
import Edit_Post from "./components/EditPost";
import BlogSingle from "./components/BlogSingle";
import Signup from "./components/login";
const RouteSwitch = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path='/user/signup' element={<Signup />} />
          <Route path="/new" element={<NewPost />} />
          <Route path="/blog/:id" element={<BlogSingle />} />
          <Route path="/blog/:id/edit" element={<Edit_Post />} />
        </Routes>
      </BrowserRouter>
    );
};
  
export default RouteSwitch;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Blog_single from "./components/blog_single/blog_single"

const RouteSwitch = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/blog/:id" element={<Blog_single />} />
        </Routes>
      </BrowserRouter>
    );
};
  
export default RouteSwitch;
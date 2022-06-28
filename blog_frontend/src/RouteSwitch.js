import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import BlogSingle from "./components/blog_single";
const RouteSwitch = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/blog/:id" element={<BlogSingle />} />
        </Routes>
      </BrowserRouter>
    );
};
  
export default RouteSwitch;
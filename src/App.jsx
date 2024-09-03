// import React from "react";
import Home from "./Pages/Home";
import {
  createRoutesFromElements,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blog from "./Pages/Blog";
import Layout from "./Components/Layout";
import BlogDetail from "./Pages/BlogDetail";
import Test from "./Pages/Test";
import Newsletter from "./Pages/Newsletter";
import FAQpageTest from "./Pages/FAQpageTest";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="Blog" element={<Blog />} />
      <Route path="BlogDetail" element={<BlogDetail />} />
      <Route path="Test" element={<Test />} />
      <Route path="Test" element={<Test />} />
      <Route path="Newsletter" element={<Newsletter />} />
      <Route path="FAQpageTest" element={<FAQpageTest />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

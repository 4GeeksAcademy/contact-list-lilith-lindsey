// Import necessary components and functions from react-router-dom.
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Demo } from "./pages/Demo";
import { Test } from "./pages/Test";
import UpdateContact from "./pages/UpdateContact"; // ✅ fixed default import

export const router = createBrowserRouter(
  createRoutesFromElements(
    // Root Route: All navigation will start from here.
    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>}>
      {/* Nested Routes: Render inside Layout via <Outlet /> */}
      <Route index element={<Home />} /> {/* index = default child route */}
      <Route path="single/:theId" element={<Single />} /> {/* Dynamic route */}
      <Route path="demo" element={<Demo />} />
      <Route path="test" element={<Test />} />
      <Route path="updateContact" element={<UpdateContact />} />
    </Route>
  )
);

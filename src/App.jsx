import {
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Layout from "./components/Layout";
import HomePage from "./pages/Home";
import Raw from "./pages/Raw";
import Protected from "./pages/Protected";
import RandomPostPage, { postLoader } from "./pages/RandomPost";
import ProtectedRoute from "./ProtectedRoute";
import React from "react";
import Error from "./pages/Error";
import All from './pages/All';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route
        path="/post/:postId"
        loader={postLoader}
        element={<RandomPostPage />}
      />
      <Route path="/raw/*" element={<Raw />} />
      <Route path="/secured/*" element={<All />} />
      {false? <Route path="/protected" element={<Protected />} />: null}
    </Route>
  )
);

export const App = () => {
  return <RouterProvider router={router} />;
};

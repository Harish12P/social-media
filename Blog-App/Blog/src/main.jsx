import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Components/Layout.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import Home from "./Pages/Home.jsx";
import PostDetail from "./Pages/PostDetail.jsx";
import Register from "./Pages/Register.jsx";
import Login from "./Pages/Login.jsx";
import UserProfile from "./Pages/UserProfile.jsx";
import Authors from "./Pages/Authors.jsx";
import CreatePost from "./Pages/CreatePost.jsx";
import CategoryPosts from "./Pages/CategoryPosts.jsx";
import AuthorPosts from "./Pages/AuthorPosts.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import EditPost from "./Pages/EditPost.jsx";
import Logout from "./Pages/Logout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "posts/:id", element: <PostDetail /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "profile/:id", element: <UserProfile /> },
      { path: "authors", element: <Authors /> },
      { path: "create", element: <CreatePost /> },
      { path: "posts/categories/:category", element: <CategoryPosts /> },
      { path: "posts/users/:id", element: <AuthorPosts /> },
      { path: "myposts/:id", element: <Dashboard /> },
      { path: "posts/:id/edit", element: <EditPost /> },
      { path: "logout", element: <Logout /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

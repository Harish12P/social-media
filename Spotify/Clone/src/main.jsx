import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvide, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList /> },
      { path: "/create-post", element: <CreatePost /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvide router={router}></RouterProvide>
    <App />
  </React.StrictMode>
);

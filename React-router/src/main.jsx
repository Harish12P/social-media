import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvide, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import CreatePost from "./components/CreatePost.jsx";
import { PostList } from "./store/post-list-store.jsx";

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
    <RouterProvide router={router} />
  </React.StrictMode>
);

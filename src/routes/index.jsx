import { createBrowserRouter } from "react-router-dom";
import MainLayout from "~/layouts/main";
import Bookmark from "~/pages/bookmark";
import Community from "~/pages/community";
import Explore from "~/pages/explore";
import Home from "~/pages/home";
import List from "~/pages/list";
import Message from "~/pages/message";
import NotFound from "~/pages/not-found";
import Notifications from "~/pages/notifications";
import Profile from "~/pages/profile";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
      },
      {
        path: "/messages",
        element: <Message />,
      },
      {
        path: "/lists",
        element: <List />,
      },
      {
        path: "/bookmarks",
        element: <Bookmark />,
      },
      {
        path: "/communities",
        element: <Community />,
      },
      {
        path: ":slug",
        element: <Profile />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;

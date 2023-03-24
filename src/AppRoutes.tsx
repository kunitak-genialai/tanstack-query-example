import { createBrowserRouter } from "react-router-dom";
import { Top } from "./pages/Top";
import { Login } from "./pages/Login";
import { BookInfoView } from "./pages/BookInfoView";

export const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "top", element: <Top /> },
  { path: "bookinfo/:bookId/view", element: <BookInfoView /> },
]);
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./components/error-page/error-page.component";
import TicTacToe from "./games/tic-tac-toe/tic-tac-toe.component";
import ConnectFour from "./games/connect-four/connect-four.component";
import Memory from "./games/memory/memory.component";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
   },
   {
      path: "tic-tac-toe",
      element: <TicTacToe />,
   },
   {
      path: "connect-four",
      element: <ConnectFour />,
   },
   {
      path: "memory",
      element: <Memory />,
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);

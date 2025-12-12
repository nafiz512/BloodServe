import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import { RouterProvider } from "react-router/dom";
import Routes from "./routes/Routes.jsx";
import AuthProvider from "./context/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
    <AuthProvider>
        <RouterProvider router={Routes} />
    </AuthProvider>
);

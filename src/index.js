// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";

// ReactDOM.createRoot(document.getElementById("root")).render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );
import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./admin/routes/Products";
import Customers from "./admin/routes/Customers";
import App from "./admin/App";
import Home from "./admin/routes/Home";
import LoginPage from "./admin/pages/LoginPage";
import Page from "./client/Page";

// const router = createBrowserRouter(
//     createRoutesFromElements(
//         <Route element={<AppLayout />}>
//             <Route path="/" element={<Home />} />
//             <Route path="/products" element={<Products />} />
//             <Route path="/customers" element={<Customers />} />
//         </Route>
//     )
// );

const router = createBrowserRouter([
    {
        path: "/",
        element: <Page />
    },
    {
        element: <App />,
        children: [
            {
                path: "/admin",
                element: <Home />
            },
            {
                path: "products",
                element: <Products />
            },
            {
                path: "customers",
                element: <Customers />
            }
        ]
    },
    {
        path: "/login",
        element: <LoginPage />
    }
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);

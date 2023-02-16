import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
// import React from "react";
// import { createRoot } from "react-dom/client";
// import {
//     createBrowserRouter,
//     RouterProvider,
//     createRoutesFromElements,
//     Route,
//     Routes,
//     BrowserRouter
// } from "react-router-dom";
// import Products from "./admin/routes/Products";
// import Customers from "./admin/routes/Customers";
// import AdminPage from "./admin/AdminPage";
// import Home from "./admin/routes/Home";
// import LoginPage from "./admin/pages/LoginPage";
// import Page from "./client/Page";
// import WomenPage from "./client/pages/WomenPage";
// import MenPage from "./client/pages/MenPage";
// import RootPage from "./client/pages/RootPage";
// import { Provider } from "react-redux";
// const router = createBrowserRouter(
//     createRoutesFromElements(
//         <Routes>
//             <Route element={<Page />}>
//                 <Route path="/" element={<RootPage />} />
//                 <Route path="/women" element={<WomenPage />} />
//                 <Route path="/men" element={<MenPage />} />
//             </Route>
//             <Route path="/admin" element={<AdminPage />}></Route>
//         </Routes>
//     )
// );

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Page />,
//         children: [
//             {
//                 path: "/Women",
//                 element: <WomenPage />
//             },
//             {
//                 path: "/Men",
//                 element: <MenPage />
//             }
//         ]
//     },
//     {
//         element: <App />,
//         children: [
//             {
//                 path: "/admin",
//                 element: <Home />
//             },
//             {
//                 path: "products",
//                 element: <Products />
//             },
//             {
//                 path: "customers",
//                 element: <Customers />
//             }
//         ]
//     },
//     {
//         path: "/login",
//         element: <LoginPage />
//     }
// ]);

// createRoot(document.getElementById("root")).render(
//     <RouterProvider router={router} />
// );

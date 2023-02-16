import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPage from "./admin/AdminPage";
import Home from "./admin/pages/Home";
import Products from "./admin/pages/Products";
import Customers from "./admin/pages/Customers";
import Attributes from "./admin/pages/Attributes";
import ClientPage from "./client/ClientPage";
import ClientHome from "./client/pages/ClientHome";
import MenPage from "./client/pages/MenPage";
import WomenPage from "./client/pages/WomenPage";
import LoginPage from "./admin/pages/LoginPage";
import ProductDetail from "./client/components/product/ProductDetail";
function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route element={<AdminPage />}>
                        <Route element={<Home />} path="/admin" />
                        <Route element={<Products />} path="/products"></Route>
                        <Route element={<Customers />} path="/customers" />
                        <Route element={<Attributes />} path="/attributes" />
                    </Route>
                    <Route element={<ClientPage />}>
                        <Route element={<ClientHome />} path="/" exact />
                        <Route element={<MenPage />} path="/men"></Route>
                        <Route
                            element={<ProductDetail />}
                            path="/men/products/:productId"
                        />
                        <Route element={<WomenPage />} path="/women" />
                    </Route>
                    <Route element={<LoginPage />} path="/login" />
                </Routes>
            </Router>
        </div>
    );
}

export default App;

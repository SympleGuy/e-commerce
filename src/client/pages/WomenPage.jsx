import { getFemaleProducts } from "../../services/apiService";
import { useState, useEffect } from "react";
import ProductList from "../components/product/ProductList";

const WomenPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchListProducts();
    }, []);

    const fetchListProducts = async () => {
        await getFemaleProducts().then((res) => {
            setProducts(res.data.content);
        });
    };
    return <ProductList product={products} title={"Women"} />;
};
export default WomenPage;

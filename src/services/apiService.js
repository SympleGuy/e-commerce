import axios from "../utils/axiosCustomize";

const getMaleProducts = () => {
    return axios.get("/product/get-all?gender=male");
};

const getDetailProduct = (id) => {
    return axios.get(`/product/${id}`);
};

const getDetailProductColor = (id) => {
    return axios.get(`attribute/product/list-color?pro-id=${id}`);
};

const authen = (userName, password, config) => {
    return axios.post("/login", { userName, password }, config);
};

export { getMaleProducts, getDetailProduct, getDetailProductColor, authen };

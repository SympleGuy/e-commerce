import axios from "../utils/axiosCustomize";

const getMaleProducts = () => {
    return axios.get("/product/get-all?gender=male");
};

const getFemaleProducts = () => {
    return axios.get("/product/get-all?gender=female");
};

const getDetailProduct = (id) => {
    return axios.get(`/product/${id}`);
};

const getDetailProductColor = (id) => {
    return axios.get(`attribute/product/list-color?pro-id=${id}`);
};

const getDetailImage = (id, color) => {
    return axios.get(`photo/pro-color/?product-id=${id}&color=${color}`);
};

const getDetailSize = (id, color) => {
    return axios.get(`attribute/product-color/?pro-id=${id}&color=${color}`);
};

const getProductCategory = () => {
    return axios.get("/category/getlist");
};

const authen = (userName, password, config) => {
    return axios.post("/login", { userName, password }, config);
};

export {
    getMaleProducts,
    getFemaleProducts,
    getDetailProduct,
    getDetailProductColor,
    getProductCategory,
    getDetailImage,
    getDetailSize,
    authen
};

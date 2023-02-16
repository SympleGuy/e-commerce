import axiosClient from "./axiosClient";

const productApi = {
    async getAll(params) {
        // Transform _page to _start
        const newParams = { ...params };
        newParams._start =
            !params._page || params._page <= 1
                ? 0
                : (params._page - 1) * (params._limit || 50);
        // Remove un-needed key
        delete newParams._page;
        // Fetch product list + count
        const productListByGender = await axiosClient.get("/product/get-all", {
            params: newParams
        });
        // Build response and return
        return {
            data: productListByGender,
            pagination: {
                page: params._page,
                limit: params._limit,
                gender: params._gender
                // total: count
            }
        };
    },
    get(id) {
        const url = `/product/${id}`;
        return axiosClient.get(url);
    },

    add(data) {
        const url = "/product";
        return axiosClient.post(url, data);
    },

    update(data) {
        const url = `/product/${data.id}`;
        return axiosClient.patch(url, data);
    },

    remove(id) {
        const url = `/product/${id}`;
        return axiosClient.delete(url);
    }
};
export default productApi;
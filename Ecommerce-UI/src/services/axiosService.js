import axios from 'axios';

const API_URL = 'http://localhost:8080';

const axiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true,
});

export const getProducts = () => axios.get(`${API_URL}/product`);
export const getProductById = (id) => axios.put(`${API_URL}/product/${id}`);
export const createProduct = (product) => axios.post(`${API_URL}/product/new`, product);

export const updateProduct = (product) => axios.post(`${API_URL}/product/update`, product);

export const updateProduct = (id, product) => axios.put(`${API_URL}/product/${id}`, product);


export const getCategories = () => axios.get(`${API_URL}/productCategory`);
export const getCategoryById = (id) => axios.put(`${API_URL}/productCategory/${id}`);
export const createCategory = (category) => axios.post(`${API_URL}/productCategory/new`, category);

export const updateCategory = (category) => axios.post(`${API_URL}/productCategory/`, category);
export const deleteProduct = (id) => 
    {
        console.log("Product Id "+id);
        try{
            axios.delete(`${API_URL}/product/delete`,{params : {productId : id }});
        } catch(error){
            console.log(error);
        }
    };

export const updateCategory = (id, category) => axios.put(`${API_URL}/productCategory/${id}`, category);

export default axiosInstance;



import express  from "express";
import {
    getProduct,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from '../controllers/ProductController.js';

const route = express.Router()

route.get('/product', getProduct);
route.get('/product/:id', getProductById);
route.post('/product', createProduct);
route.patch('/product/:id', updateProduct);
route.delete('/product/:id', deleteProduct);

export default route;
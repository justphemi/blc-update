import express from 'express'
import {addProduct,listProducts, removeProduct, singleProduct} from '../controllers/productController.js'
import upload from '../middleware/multer.js'
import adminCheck from '../middleware/adminCheck.js'

const productRouter = express.Router()

productRouter.post(`${process.env.ADD_PRODUCT}`,adminCheck, upload.fields([{name: 'image1', maxCount: 1},{name: 'image2', maxCount: 1},{name: 'image3', maxCount: 1},{name: 'image2', maxCount: 4}]), addProduct)
productRouter.post(`${process.env.REMOVE_PRODUCT}`,adminCheck, removeProduct)
productRouter.post(`${process.env.SINGLE_PRODUCT}`, singleProduct)
productRouter.get(`${process.env.LIST_PRODUCTS}`, listProducts)

export default productRouter
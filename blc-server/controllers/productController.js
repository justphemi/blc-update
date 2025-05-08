import { v2 as cloudinary } from "cloudinary"
import productModel from '../models/productModel.js'

const addProduct = async (req, res) => {
    try {
        const {name, description, price, category, subCategory, sizes, bestseller} = req.body
        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]

        const images = [image1, image2, image3, image4].filter((i) => i !== undefined)

        let imagesUrl = await Promise.all(
            images.map(async (i) => {
                let result = await cloudinary.uploader.upload(i.path, {resource_type: 'image'})
                return result.secure_url
            })
        )

        // console.log({name, description, price, category, subCategory, sizes, bestSeller})
        // console.log(images)

        const productData = {
            name, 
            description, 
            category, 
            price: Number(price), 
            subCategory, 
            bestSeller: (bestseller === "true" ? true : false),
            sizes: JSON.parse(sizes),
            image: imagesUrl,
            date: Date.now(), 
        }

        const product = new productModel(productData)
        await product.save()

        res.json({success: true, message: "Product Added!"})

    } catch (error) {
        console.log("Upload failed: ", error)
        res.json({success:false, message: error.message})
    }
}

const listProducts = async (req, res) => {

    try {
        const products = await productModel.find({})
        res.json({success:true, products})
    } catch (err) {
        console.log("Fetching products error: ", err)
        res.json({success:false, message: err.message})
    }

}

const removeProduct = async (req, res) => {

    try {
        await productModel.findByIdAndDelete(req.body.id)
        res.json({success:true, message: "Product deleted!"})

    } catch(err){        
        console.log("Fetching products error: ", err)
        res.json({success:false, message: err.message})
    }

}

const singleProduct = async (req, res) => {

    try {
        const {productId} = req.body
        const product = await productModel.findById(productId)
        res.json({success:true, product})

    } catch(err){
        console.log("Fetching single product error: ", err)
        res.json({success:false, message: err.message})
    }

}


export {addProduct,listProducts, removeProduct, singleProduct}

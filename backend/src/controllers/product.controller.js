/** Models that are used. */
import Product from '../models/Product';

/** Get product information */
export const getProducts = async (req, res, next) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({
            message: error.message || "something goes wrong."
        });
    }
}

/** Get one specific product information by its ID. */
export const getProductById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);

        if (!product) return res.status(400).json({ message: `Product with id ${id} does not exist` });

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({
            message: error.message || "something goes wrong."
        });
    }
}

/** Create a new product in DB. */
export const createProduct = async (req, res, next) => {
    try {
        const { name, description, categories, price, images } = req.body;
        const newProduct = new Product({
            name,
            description,
            categories,
            price,
            images
        });
        // validate category
        // convert image to webp
        // save image
        const productSaved = await newProduct.save();
        res.json(productSaved);
    } catch (error) {
        res.status(500).json({
            message: error.message || "something goes wrong."
        });
    }
}

/** Update product information. */
export const updateProductById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const productUpdated = await Product.findByIdAndUpdate(id, req.body, { new: true });

        if (!productUpdated) return res.status(400).json({ message: `Product with id ${id} does not exist` });

        res.status(200).json(productUpdated);
    } catch (error) {
        res.status(500).json({
            message: error.message || "something goes wrong."
        });
    }
}

/** Delete product from DB. */
export const deleteProductById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const productDeleted = await Product.findByIdAndDelete(req.params.id);

        if (!productDeleted) return res.status(400).json({ message: `Product with id ${id} does not exist` });

        res.status(204).json(productDeleted);
    } catch (error) {
        res.status(500).json({
            message: error.message || "something goes wrong."
        });
    }
}
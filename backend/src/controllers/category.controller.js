/** Models that are used. */
import Category from '../models/Category';

/** Get category information. */
export const getCategories = async (req, res, next) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({
            message: error.message || "something goes wrong."
        });
    }
}

/** Get one specific category by its ID. */
export const getCategoryById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const category = await Category.findById(id);

        if (!category) return res.status(400).json({ message: `Category with id ${id} does not exist` });

        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({
            message: error.message || "something goes wrong."
        });
    }
}

/** Create a new category in DB. */
export const createCategory = async (req, res, next) => {
    try {
        const { name } = req.body;
        const newCategory = new Category({
            name          
        });
        
        const categorySaved = await newCategory.save();
        res.json(categorySaved);
    } catch (error) {
        res.status(500).json({
            message: error.message || "something goes wrong."
        });
    }
}

/** Update category information. */
export const updateCategoryById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const categoryUpdated = await User.findByIdAndUpdate(id, req.body, { new: true });

        if (!categoryUpdated) return res.status(400).json({ message: `Category with id ${id} does not exist` });

        res.status(200).json(categoryUpdated);
    } catch (error) {
        res.status(500).json({
            message: error.message || "something goes wrong."
        });
    }
}

/** Delete category from DB. */
export const deleteCategoryById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const categoryDeleted = await User.findByIdAndDelete(req.params.id);

        if (!categoryDeleted) return res.status(400).json({ message: `Category with id ${id} does not exist` });

        res.status(204).json(categoryDeleted);
    } catch (error) {
        res.status(500).json({
            message: error.message || "something goes wrong."
        });
    }
}
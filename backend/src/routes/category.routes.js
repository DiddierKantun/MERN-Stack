import { Router } from "express";
const router = Router();

/** Controllers that are used. */
import * as categoryController from '../controllers/category.controller';

/** GET: api/category */
router.get('/', categoryController.getCategories);
/** GET: api/category/{id} */
router.get('/:id', categoryController.getCategoryById);
/** POST: api/category */
router.post('/', categoryController.createCategory);
/** PUT: api/category/{id} */
router.put('/:id', categoryController.updateCategoryById);
/** DELETE: api/category/{id} */
router.delete('/:id', categoryController.deleteCategoryById);

export default router;
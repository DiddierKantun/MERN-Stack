import { Router } from "express";
const router = Router();

/** Controllers that are used. */
import * as productController from '../controllers/product.controller';

/** GET: api/product */
router.get('/', productController.getProducts);
/** GET: api/product/{id} */
router.get('/:id', productController.getProductById);
/** POST: api/product */
router.post('/', productController.createProduct);
/** PUT: api/product/{id} */
router.put('/:id', productController.updateProductById);
/** DELETE: api/product/{id} */
router.delete('/:id', productController.deleteProductById);

export default router;
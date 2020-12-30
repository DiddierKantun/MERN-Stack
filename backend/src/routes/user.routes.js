import {Router} from "express";
const router = Router();

/** Controllers that are used. */
import * as userController from '../controllers/user.controller';

/** GET: api/user */
router.get('/', userController.getUsers);
/** GET: api/user/{id} */
router.get('/:id', userController.getUserById);
/** POST: api/user */
router.post('/', userController.createUser);
/** PUT: api/user/{id} */
router.put('/:id', userController.updateUserById);
/** DELETE: api/user/{id} */
router.delete('/:id', userController.deleteUserById);

export default router;
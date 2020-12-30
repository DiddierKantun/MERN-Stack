import { Router } from "express";
const router = Router();

/** Controllers that are used. */
import * as AuthController from "../controllers/auth.controller";

/** POST: api/sigin */
router.post('/singin', AuthController.singIn);
/** POST: api/sigup */
router.post('/singup', AuthController.singUp);

export default router;
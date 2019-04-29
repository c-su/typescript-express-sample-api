import { UserController } from "../controller/user-controller";
import { Router } from "express";

const router = Router();
const userController = new UserController();

router.get("/create", userController.createHandler);
router.get("/update", userController.updateHandler);
router.get("/remove", userController.removeHandler);
router.get("/find", userController.findHandler);

export { router as UserRouter };

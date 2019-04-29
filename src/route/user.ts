import { Router } from "express";
import { UserController } from "../controller/user-controller";
import { UserApplicationService } from "../application/user-application-service";
import { UserRepository } from "../infrastructure/user-repository";

const router: Router = Router();
const userController = new UserController(
  new UserApplicationService(new UserRepository("User"))
);

router.get("/create", userController.createHandler);
router.get("/update", userController.updateHandler);
router.get("/remove", userController.removeHandler);
router.get("/find", userController.findHandler);

export { router as UserRouter };

import { Router } from "express";
import { UserController } from "../controller/user-controller";
import { UserApplicationService } from "../application/user-application-service";
import { UserRepository } from "../infrastructure/user-repository";

const router: Router = Router();
const userController = new UserController(
  new UserApplicationService(new UserRepository("User"))
);

router.get("/insert", userController.insertHandler);
router.get("/update", userController.updateHandler);
router.get("/delete", userController.deleteHandler);
router.get("/select", userController.selectHandler);

export { router as UserRouter };

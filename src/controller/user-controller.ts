import { NextFunction, Response, Request } from "express";
import { UserApplicationService } from "../application/user-application-service";
import { UserRepository } from "../infrastructure/user-repository";

export class UserController {
  async createHandler(req: Request, res: Response, next: NextFunction) {
    try {
      const applicationService = new UserApplicationService(
        new UserRepository("User")
      );
      await applicationService.createUser(
        req.query.name,
        req.query.desc,
        req.query.file
      );

      res.json({
        status: 200,
        response: "ok"
      });
    } catch (err) {
      next(err);
    }
  }

  async updateHandler(req: Request, res: Response, next: NextFunction) {
    try {
      const response = {
        status: 200,
        response: "ok"
      };

      const applicationService = new UserApplicationService(
        new UserRepository("User")
      );
      const isUpdated = await applicationService.updateUser(
        req.query.id,
        req.query.name
      );

      if (!isUpdated) {
        response.status = 404;
        response.response = "not found";
      }
      res.json(response);
    } catch (err) {
      next(err);
    }
  }

  async removeHandler(req: Request, res: Response, next: NextFunction) {
    try {
      const response = {
        status: 200,
        response: "ok"
      };

      const applicationService = new UserApplicationService(
        new UserRepository("User")
      );
      const isDeleted = await applicationService.removeUser(req.query.id);
      if (!isDeleted) {
        response.status = 404;
        response.response = "not found";
      }

      res.json(response);
    } catch (err) {
      next(err);
    }
  }

  findHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = {
        status: 200,
        response: {}
      };

      const applicationService = new UserApplicationService(
        new UserRepository("User")
      );
      response.response = await applicationService.findUser(req.query.id);
      res.json(response);
    } catch (err) {
      next(err);
    }
  };
}

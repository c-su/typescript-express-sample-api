import { NextFunction, Response, Request } from "express";
import { UserApplicationService } from "../application/user-application-service";

export class UserController {
  applicationService: UserApplicationService;

  constructor(service: UserApplicationService) {
    this.applicationService = service;
  }

  async createHandler(req: Request, res: Response, next: NextFunction) {
    try {
      await this.applicationService.createUser(
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

      const isUpdated = await this.applicationService.updateUser(
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

      const isDeleted = await this.applicationService.removeUser(req.query.id);
      if (!isDeleted) {
        response.status = 404;
        response.response = "not found";
      }

      res.json(response);
    } catch (err) {
      next(err);
    }
  }

  async findHandler(req: Request, res: Response, next: NextFunction) {
    try {
      const response = {
        status: 200,
        response: {}
      };
      response.response = await this.applicationService.findUser(req.query.id);
      res.json(response);
    } catch (err) {
      next(err);
    }
  }
}

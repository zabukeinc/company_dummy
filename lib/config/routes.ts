import { CompanyController } from "../controllers/company.controller";

import { Application, Response, Request } from "express";

export class Routes {
  public companyController: CompanyController = new CompanyController();

  public routes(app: Application): void {
    app
      .route("/company")
      .get(this.companyController.index)
      .post(this.companyController.create);

    app
      .route("/company/:id")
      .put(this.companyController.update)
      .delete(this.companyController.delete);

    app.all("*", function (req: Request, res: Response) {
      res.status(404).send({
        status: false,
        message: "Endpoint not found",
      });
    });
  }
}

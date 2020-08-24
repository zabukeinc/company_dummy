"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const company_controller_1 = require("../controllers/company.controller");
class Routes {
    constructor() {
        this.companyController = new company_controller_1.CompanyController();
    }
    routes(app) {
        app
            .route("/company")
            .get(this.companyController.index)
            .post(this.companyController.create);
        app
            .route("/company/:id")
            .put(this.companyController.update)
            .delete(this.companyController.delete);
        app.all("*", function (req, res) {
            res.status(404).send({
                status: false,
                message: "Endpoint not found",
            });
        });
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map
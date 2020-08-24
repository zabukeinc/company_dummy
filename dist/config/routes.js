"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const company_controller_1 = require("../controllers/company.controller");
class Routes {
    constructor() {
        this.companyController = new company_controller_1.CompanyController();
    }
    routes(app) {
        app.route("/compnay").get(this.companyController.index);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map
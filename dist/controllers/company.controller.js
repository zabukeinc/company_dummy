"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyController = void 0;
const company_model_1 = require("../models/company.model");
class CompanyController {
    index(req, res) {
        company_model_1.Company.find((err, company, res) => {
            if (err) {
                res.status(500).json({
                    status: false,
                    message: err.message,
                });
            }
            else {
                res.status(200).json({
                    status: true,
                    message: "Get all data company",
                    data: company,
                });
            }
        });
        // let Company.find((err: any, company: any) => {
        //   if (err) {
        //     res.json({
        //       status: true,
        //       message: "Get all data company",
        //       data: company,
        //     });
        //   } else {
        //     res.json({
        //       status: false,
        //       message: "Data company is empty",
        //     });
        //   }
        // });
    }
}
exports.CompanyController = CompanyController;
//# sourceMappingURL=company.controller.js.map
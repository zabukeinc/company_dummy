"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyController = void 0;
const company_model_1 = require("../models/company.model");
class CompanyController {
    index(req, res) {
        company_model_1.Company.find({}, (err, company) => {
            if (err) {
                res.send(err);
            }
            res.status(200).send({
                status: true,
                message: "Get all data company",
                data: company,
            });
        });
    }
    create(req, res) {
        const newCompany = new company_model_1.Company(req.body);
        newCompany.save((err, company) => {
            if (err) {
                res.status(500).send({
                    status: false,
                    message: err.message,
                });
            }
            else {
                res.status(201).send({
                    status: true,
                    message: "Data added successfully.",
                });
            }
        });
    }
    update(req, res) {
        const companyId = req.params.id;
        if (companyId) {
            company_model_1.Company.findByIdAndUpdate(companyId, req.body, (error, company) => {
                if (error) {
                    res.status(500).send({
                        status: false,
                        message: error,
                    });
                }
                // if company exist/found
                if (company) {
                    res.status(200).send({
                        status: true,
                        message: "Data has been updated",
                    });
                }
                else {
                    res.status(404).send({
                        status: false,
                        message: "Data Company not found",
                    });
                }
            });
        }
        else {
            res.status(404).send({
                status: false,
                message: "Company ID can not be null.",
            });
        }
    }
    delete(req, res) {
        const companyId = req.params.id;
        if (companyId) {
            company_model_1.Company.findByIdAndDelete(companyId, (err, deleted) => {
                if (err) {
                    res.status(500).send({
                        status: false,
                        message: err.message,
                    });
                }
                // if company exist/found
                if (deleted) {
                    res.status(200).send({
                        status: true,
                        message: "Data successfully deleted.",
                    });
                }
                else {
                    res.status(404).send({
                        status: false,
                        message: "Data company not found",
                    });
                }
            });
        }
        else {
            res.status(500).send({
                status: false,
                message: "Company ID can not be null.",
            });
        }
    }
}
exports.CompanyController = CompanyController;
//# sourceMappingURL=company.controller.js.map
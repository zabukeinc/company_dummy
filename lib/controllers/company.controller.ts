import { Request, Response } from "express";
import { MongooseDocument } from "mongoose";
import { Company, CompanyInterface } from "../models/company.model";

export class CompanyController {
  public index(req: Request, res: Response) {
    Company.find({}, (err: Error, company: any) => {
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

  public show(req: Request, res: Response) {
    const companyId: any = req.params.id;
    if (companyId) {
      Company.findById(companyId, (err: Error, company: any) => {
        if (err) {
          res.status(500).send({
            status: false,
            message: err.message,
          });
        }

        if (company) {
          res.status(200).send({
            status: true,
            message: "Get data by ID",
            data: company,
          });
        } else {
          res.status(404).send({
            status: false,
            message: "Company not found",
          });
        }
      });
    } else {
      res.status(500).send({
        status: false,
        message: "Company ID can not be null.",
      });
    }
  }

  public create(req: Request, res: Response) {
    const newCompany = new Company(req.body);
    newCompany.save((err: Error, company: MongooseDocument) => {
      if (err) {
        res.status(500).send({
          status: false,
          message: err.message,
        });
      } else {
        res.status(201).send({
          status: true,
          message: "Data added successfully.",
        });
      }
    });
  }

  public update(req: Request, res: Response) {
    const companyId: any = req.params.id;
    if (companyId) {
      Company.findByIdAndUpdate(
        companyId,
        req.body,
        (error: Error, company: any) => {
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
          } else {
            res.status(404).send({
              status: false,
              message: "Data Company not found",
            });
          }
        }
      );
    } else {
      res.status(404).send({
        status: false,
        message: "Company ID can not be null.",
      });
    }
  }

  public delete(req: Request, res: Response) {
    const companyId: any = req.params.id;
    if (companyId) {
      Company.findByIdAndDelete(companyId, (err: Error, deleted: any) => {
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
        } else {
          res.status(404).send({
            status: false,
            message: "Data company not found",
          });
        }
      });
    } else {
      res.status(500).send({
        status: false,
        message: "Company ID can not be null.",
      });
    }
  }
}

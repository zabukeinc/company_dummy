import * as chai from "chai";
import chaiHttp = require("chai-http");
import { NextFunction, response } from "express";
import { Response } from "superagent";
import { expect } from "chai";
const server = require("../server");

describe("Service Company API", () => {
  /**
   * Company GET end point
   */
  describe("Route GET /api/company", () => {
    it("Should GET to /api/company", (done: NextFunction) => {
      chai
        .request(server)
        .get("/api/company")
        .end((err: any, res: Response) => {
          res.should.have.status(200);
          expect(res).to.be.a("object");
          done();
        });
    });
  });

  /**
   * Company GET by ID end point
   */
  describe("Route GET BY ID /api/company/:id", () => {
    const correctId = "5f44943fdb64472f104402c1";
    it("Should GET to /api/compny/:id", (done: NextFunction) => {
      chai
        .request(server)
        .get(`/api/company/${correctId}`)
        .end((err: any, res: Response) => {
          res.should.have.status(200);
          expect(res).to.be.a("object");
          done();
        });
    });

    it("Should NOT GET to /api/company/:id", (done: NextFunction) => {
      chai
        .request(server)
        .get(`/api/company/wrong123wrong`)
        .end((err: any, res: Response) => {
          res.should.have.status(404);
          expect(res).to.be.a("object");
          done();
        });
    });
  });

  /**
   * Company Add End Point
   */

  describe("Route POST /api/company", () => {
    // it("Should POST to /api/company", (done: NextFunction) => {
    //   chai
    //     .request(server)
    //     .post("/api/company")
    //     .set("content-type", "application/x-www-form-urlencoded")
    //     .send({
    //       company_name: "Eigen Test",
    //       address: "Address Test",
    //       province: "Province Test",
    //       postal_code: 40971,
    //       country: "Indonesia",
    //       logo_url: "http://img.url/asd",
    //       email: "eigen@trimathema.com",
    //       site_address: "http://eigen.co.id",
    //     })
    //     .end((err: any, res: Response) => {
    //       res.should.have.status(201);
    //       done();
    //     });
    // });

    it("Should NOT POST to /api/company because DUPLICATE COMPANY NAME", (done: NextFunction) => {
      chai
        .request(server)
        .post("/api/company")
        .set("content-type", "application/x-www-form-urlencoded")
        .send({
          company_name: "Eigen Test",
          address: "Address Test",
          province: "Province Test",
          postal_code: 40971,
          country: "Indonesia",
          logo_url: "http://img.url/asd",
          email: "eigen@trimathema.com",
          site_address: "http://eigen.co.id",
        })
        .end((err: any, res: Response) => {
          res.should.have.status(500);
          done();
        });
    });

    it("Should NOT POST to /api/company because Empty COMPANY NAME", (done: NextFunction) => {
      chai
        .request(server)
        .post("/api/company")
        .set("content-type", "application/x-www-form-urlencoded")
        .send({
          company_name: "",
          address: "Address Test",
          province: "Province Test",
          postal_code: 40971,
          country: "Indonesia",
          logo_url: "http://img.url/asd",
          email: "eigen@trimathema.com",
          site_address: "http://eigen.co.id",
        })
        .end((err: any, res: Response) => {
          res.should.have.status(500);
          done();
        });
    });
  });

  /**
   * Company Update End Point
   */
  describe("Route Update /api/company/:id", () => {
    it("Should Update to /api/company/:id", (done: NextFunction) => {
      chai
        .request(server)
        .put("/api/company/5f43c80fc2549e3864c677c0")
        .send({
          company_name: "Eigen Test Update",
          address: "Address Test",
          province: "Province Test",
          postal_code: 40971,
          country: "Indonesia",
          logo_url: "http://img.url/asd",
          email: "eigen@trimathema.com",
          site_address: "http://eigen.co.id",
        })
        .end((err: any, res: Response) => {
          res.should.have.status(200);
          done();
        });
    });

    it("Should NOT Update to /api/company/:id because ID NOT FOUND", (done: NextFunction) => {
      chai
        .request(server)
        .put("/api/company/5f43asd7c0")
        .send({
          company_name: "Eigen Test 123",
          address: "Address Test",
          province: "Province Test",
          postal_code: 40971,
          country: "Indonesia",
          logo_url: "http://img.url/asd",
          email: "eigen@trimathema.com",
          site_address: "http://eigen.co.id",
        })
        .end((err: any, res: Response) => {
          res.should.have.status(404);
          done();
        });
    });
  });

  /**
   * Company Delete End Point
   */
  describe("Route Delete /company/:id", () => {
    it("Should DELETE to /api/company/:id", (done: NextFunction) => {
      chai
        .request(server)
        .delete("/api/company/5f43c80fc2549e3864c677c0")
        .end((err: any, res: Response) => {
          res.should.have.status(204);
          done();
        });
    });

    it("Should NOT DELETE to /api/company/:id because ID NOT FOUND", (done: NextFunction) => {
      chai
        .request(server)
        .delete("/api/company/x123")
        .end((err: any, res: Response) => {
          res.should.have.status(404);
          done();
        });
    });
  });
});

chai.should();
chai.use(chaiHttp);

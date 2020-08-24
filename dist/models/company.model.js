"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = exports.CompanySchema = void 0;
const mongoose = require("mongoose");
exports.CompanySchema = new mongoose.Schema({
    company_name: { type: String, required: true },
    address: { type: String },
    province: { type: String },
    postal_code: { type: Number },
    country: { type: String },
    logo_url: { type: String },
    phone: { type: Number || String },
    email: { type: String },
    site_address: { type: String },
});
exports.Company = mongoose.model("Company", exports.CompanySchema);
//# sourceMappingURL=company.model.js.map
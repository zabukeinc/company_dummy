"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = exports.CompanySchema = void 0;
const mongoose = require("mongoose");
exports.CompanySchema = new mongoose.Schema({
    company_name: {
        type: String,
        required: true,
    },
    address: { type: String },
    province: { type: String },
    postal_code: { type: Number },
    country: { type: String },
    logo_url: { type: String },
    phone: { type: Number || String },
    email: { type: String },
    site_address: { type: String },
});
// unique validation for company name
exports.CompanySchema.path("company_name").validate((value) => __awaiter(void 0, void 0, void 0, function* () {
    const isNameExisted = yield exports.Company.countDocuments({ company_name: value });
    return !isNameExisted;
}), "Company name already exist");
exports.Company = mongoose.model("Company", exports.CompanySchema);
//# sourceMappingURL=company.model.js.map
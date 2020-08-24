import * as mongoose from "mongoose";

export interface CompanyInterface extends mongoose.Document {
  company_name: string;
  address: string;
  province: string;
  postal_code: number;
  country: string;
  logo_url: string;
  phone: number | string;
  email: string;
  site_address: string;
}

export const CompanySchema: mongoose.Schema = new mongoose.Schema({
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

export const Company = mongoose.model<CompanyInterface>(
  "Company",
  CompanySchema
);

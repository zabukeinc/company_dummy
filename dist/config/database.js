"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const mongoose = require("mongoose");
const uri = "mongodb://127.0.0.1:27017/local";
exports.db = mongoose.connect(uri, (err) => {
    if (err) {
        throw new Error("Couldn't connect to database.");
    }
    else {
        console.log("Successfully connected to database.");
    }
});
//# sourceMappingURL=database.js.map
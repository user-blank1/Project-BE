import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        required: true,
    },
    imgSrc: {
        type: String,
        required: true,
    },
});

const Company = mongoose.model("Company", companySchema, "Companies");

export default Company;

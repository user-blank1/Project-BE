import Company from "../Models/Company.js";
export async function load_companies(req, res) {
    try {
        const companies = await Company.find();
        res.json({ companies });
    } catch (error) {
        console.error("Error loading companies:", error);
        res.status(500).json({ error: "Error loading all companies" });
    }
}

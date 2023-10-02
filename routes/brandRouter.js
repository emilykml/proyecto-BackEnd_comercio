import express from "express";
import { getAllBrands } from "../controllers/brandController.js";
import { createBrand } from "../controllers/brandController.js";
import { updateBrand } from "../controllers/brandController.js";
import { deleteBrand } from "../controllers/brandController.js";

const router = express.Router();

router.get("/", getAllBrands)

router.post("/", createBrand)

router.put("/", updateBrand) 

router.delete("/", deleteBrand)

export default router;
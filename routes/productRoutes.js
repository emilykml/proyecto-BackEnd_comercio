import express from "express";
import { getAllProducts } from "../controllers/productController.js";
import { createProduct } from "../controllers/productController.js";
import { updateProduct } from "../controllers/productController.js";
import { deleteProduct } from "../controllers/productController.js";

const router = express.Router();

router.get("/", getAllProducts)

router.post("/", createProduct)

router.put("/", updateProduct) 

router.delete("/", deleteProduct)

export default router;
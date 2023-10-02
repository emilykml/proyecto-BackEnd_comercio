import ProductModel from "../models/productModel.js";

//GET

export const getAllProducts = async (req , res) =>{
    try{
        const products = await ProductModel.findAll()
        res.json(products)

    }catch(error){
        res.status(500).json({message: error.message})
    }

}

//POST

export const createProduct = async (req , res) =>{
    try{
        await ProductModel.create(req.body)
        res.json({message: "The products has been created successfully"})

    }catch(error){
        res.status(500).json({message: error.message})
    }
}

//PUT
export const updateProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await ProductModel.findByPk(productId);
        if (!product) {
        res.status(404).json({ message: "product does not exist" });
        } else {
        const { product_name, product_description,price,stock, brand_id } = req.body;
            const productUpdate = {
            product_name: product_name || product.product_name,
            product_description:product_description || product.product_description,
            price:price || product.price,
            stock:stock || product.stock,
            brand_id:brand_id || product.brand_id
        };
        const updated = await ProductModel.update(productUpdate, { where: { id: productId } });
        res.status(200).json({ message: "product updated successfully" });
    }
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
};
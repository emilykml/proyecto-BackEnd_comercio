import BrandModel from "../models/brandModel.js";

//GET

export const getAllBrands = async (req , res) =>{
    try{
        const brands = await BrandModel.findAll()
        res.status(200).json(brands)

    }catch(error){
        res.status(500).json({message: error.message})
    }

}

//POST

export const createBrand = async (req , res) =>{
    try{
        await BrandModel.create(req.body)
        res.json({message: "The brand has been created successfully"})

    }catch(error){
        res.status(500).json({message: error.message})
    }
}

//PUT

export const updateBrand = async (req, res) => {
    try {
        const brandsId = req.params.id;
        const brands = await BrandModel.findByPk(brandsId);
        if (!brands) {
        res.status(404).json({ message: "brand does not exist" });
        } else {
        const { brand_name } = req.body;
            const brandsUpdate = {
                brand_name: brand_name || brands.brand_name,
                
        };
        const updated = await BrandModel.update(brandsUpdate, { where: { id: brandsId } });
        res.status(200).json({ message: "brand updated successfully" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    };

//DELETE

export const deleteBrand = async (req, res) => {
    try {
        const brandsId = req.params.id;
        const brand = await BrandModel.findByPk(brandsId);
        if (!brand) {
        res.status(404).json({ message: "brand does not exits" });
        } else {
        await BrandModel.destroy({ where: { id: brandsId } });
        res.status(200).json({ message: "brand deleted successfully" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
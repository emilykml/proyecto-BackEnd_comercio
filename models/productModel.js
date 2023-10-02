import db from '../database/db.js';
import {DataTypes} from 'sequelize';

const ProductModel = db.define("products", {
    product_name:{type:DataTypes.STRING},
    product_description:{type:DataTypes.TEXT},
    price:{type:DataTypes.NUMBER},
    stock:{type:DataTypes.NUMBER},
},{
    timestamps: false
})


export default ProductModel;
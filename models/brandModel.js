import db from '../database/db.js';
import {DataTypes} from 'sequelize';

const BrandModel = db.define("brands", {
    brand_name: {type:DataTypes.STRING},
},{
    timestamps: false
})

export default BrandModel;
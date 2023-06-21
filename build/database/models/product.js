"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Product extends sequelize_1.Model {
    static initModel(sequelize) {
        Product.init({
            id: {
                type: sequelize_1.DataTypes.STRING,
                primaryKey: true,
                field: 'ProdID',
            },
            productName: {
                type: sequelize_1.DataTypes.STRING,
                field: 'ProdName',
            },
            baseCost: {
                type: sequelize_1.DataTypes.DOUBLE,
                field: 'Base_Cost',
            },
        }, {
            sequelize,
            tableName: 'Product',
            timestamps: false,
        });
    }
}
exports.default = Product;

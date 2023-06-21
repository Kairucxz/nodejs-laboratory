import { Model, Sequelize, DataTypes } from 'sequelize';
import { ProductAttributes } from '../attributes';

class Product extends Model implements ProductAttributes {
    public id!: string;
    public productName!: string;
    public baseCost!: number;

    static initModel(sequelize: Sequelize): void {
        Product.init(
            {
                id: {
                    type: DataTypes.STRING,
                    primaryKey: true,
                    field: 'ProdID',
                },
                productName: {
                    type: DataTypes.STRING,
                    field: 'ProdName',
                },
                baseCost: {
                    type: DataTypes.DOUBLE,
                    field: 'Base_Cost',
                },
            },
            {
                sequelize,
                tableName: 'Product',
                timestamps: false,
            }
        );
    }
}

export default Product;

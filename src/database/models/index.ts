import SequelizeConnection from '../configuration';
import Employee from './employee';
import Product from './product';
import Query from './query';

const sequelize = SequelizeConnection.getInstance();

//Initialize Models
Employee.initModel(sequelize);
Product.initModel(sequelize);
Query.initModel(sequelize);

export const db = {
    sequelize,
    Employee,
    Product,
    Query,
};

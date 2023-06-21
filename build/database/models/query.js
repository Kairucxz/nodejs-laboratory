"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Query extends sequelize_1.Model {
    static initModel(sequelize) {
        Query.init({
            id: {
                type: sequelize_1.DataTypes.STRING,
                primaryKey: true,
                field: 'QID',
            },
            submissionDate: {
                type: sequelize_1.DataTypes.DATE,
                field: 'Sub_Date',
            },
            customerId: {
                type: sequelize_1.DataTypes.STRING,
                field: 'Cust_ID',
            },
            employeeId: {
                type: sequelize_1.DataTypes.STRING,
                field: 'EmpID',
            },
            responseDate: {
                type: sequelize_1.DataTypes.DATE,
                field: 'Res_Date',
            },
            status: {
                type: sequelize_1.DataTypes.STRING,
                field: 'Status',
            },
            feedback: {
                type: sequelize_1.DataTypes.INTEGER,
                field: 'Feedback',
            },
            queryText: {
                type: sequelize_1.DataTypes.STRING,
                field: 'Query_Text',
            },
            queryResponse: {
                type: sequelize_1.DataTypes.STRING,
                field: 'Query_Response',
            },
        }, {
            sequelize,
            tableName: 'QueryHandling',
            timestamps: false,
        });
    }
}
exports.default = Query;

import { Model, Sequelize, DataTypes } from 'sequelize';
import { QueryAttributes } from '../attributes';

class Query extends Model implements QueryAttributes {
    public id!: string;
    public submissionDate!: Date;
    public customerId!: string;
    public employeeId!: string;
    public responseDate!: Date;
    public status!: string;
    public feedback!: number;
    public queryText!: string;
    public queryResponse!: string;

    static initModel(sequelize: Sequelize): void {
        Query.init(
            {
                id: {
                    type: DataTypes.STRING,
                    primaryKey: true,
                    field: 'QID',
                },
                submissionDate: {
                    type: DataTypes.DATE,
                    field: 'Sub_Date',
                },
                customerId: {
                    type: DataTypes.STRING,
                    field: 'Cust_ID',
                },
                employeeId: {
                    type: DataTypes.STRING,
                    field: 'EmpID',
                },
                responseDate: {
                    type: DataTypes.DATE,
                    field: 'Res_Date',
                },
                status: {
                    type: DataTypes.STRING,
                    field: 'Status',
                },
                feedback: {
                    type: DataTypes.INTEGER,
                    field: 'Feedback',
                },
                queryText: {
                    type: DataTypes.STRING,
                    field: 'Query_Text',
                },
                queryResponse: {
                    type: DataTypes.STRING,
                    field: 'Query_Response',
                },
            },
            {
                sequelize,
                tableName: 'QueryHandling',
                timestamps: false,
            }
        );
    }
}

export default Query;

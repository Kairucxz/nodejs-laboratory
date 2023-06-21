import { Model, Sequelize, DataTypes } from 'sequelize';
import { EmployeeAttributes } from '../attributes';

class Employee extends Model implements EmployeeAttributes {
    public id!: string;
    public firstName!: string;
    public lastName!: string;
    public address!: string;
    public dateJoined!: Date;
    public age!: number;
    public department!: string;
    public salary!: number;

    static initModel(sequelize: Sequelize): void {
        Employee.init(
            {
                id: {
                    type: DataTypes.STRING,
                    primaryKey: true,
                    field: 'EmpID',
                },
                firstName: {
                    type: DataTypes.STRING,
                    field: 'EFirstName',
                },
                lastName: {
                    type: DataTypes.STRING,
                    field: 'ELastName',
                },
                address: {
                    type: DataTypes.STRING,
                    field: 'Address',
                },
                dateJoined: {
                    type: DataTypes.DATE,
                    field: 'D_Join',
                },
                age: {
                    type: DataTypes.INTEGER,
                    field: 'Age',
                },
                department: {
                    type: DataTypes.STRING,
                    field: 'Dept',
                },
                salary: {
                    type: DataTypes.DOUBLE,
                    field: 'Salary',
                },
            },
            {
                sequelize,
                tableName: 'Employees',
                timestamps: false,
            }
        );
    }
}

export default Employee;

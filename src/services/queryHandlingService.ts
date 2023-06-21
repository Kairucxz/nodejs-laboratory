import { db } from '../database/models';
import Query from '../database/models/query';

class QueryHandlingService {
    private static instance: QueryHandlingService;

    static getInstance(): QueryHandlingService {
        if (!QueryHandlingService.instance) {
            QueryHandlingService.instance = new QueryHandlingService();
        }
        return QueryHandlingService.instance;
    }

    findAll = async () => {
        const queries: Query[] = await Query.findAll();
        return queries;
    };

    findById = async (id: string) => {
        const existingQuery: Query | null = await Query.findByPk(id);
        return existingQuery;
    };

    save = async (object: any) => {
        try {
            if (!object && Object.keys(object).length == 0) {
                throw new Error('Object must contain atleast one property.');
            }
            const query = await Query.create({ ...object });
            return query;
        } catch (err) {
            throw err;
        }
    };

    update = async (id: string, object: any) => {
        if (!object && Object.keys(object).length == 0) {
            throw new Error(
                'Object to be updated must contain at least one property.'
            );
        }

        let existingQuery = await this.findById(id);
        if (!existingQuery) {
            throw new Error('query_not_found');
        }

        try {
            await Query.update(
                { ...object },
                {
                    where: { id },
                }
            );

            existingQuery = await this.findById(id);
            return existingQuery;
        } catch (err) {
            throw err;
        }
    };

    deleteByPrimaryKey = async (id: string) => {
        let existingQuery = await this.findById(id);
        if (!existingQuery) {
            throw new Error('query_not_found');
        }

        try {
            await existingQuery.destroy();
        } catch (err) {
            throw err;
        }
    };
}

export default QueryHandlingService;

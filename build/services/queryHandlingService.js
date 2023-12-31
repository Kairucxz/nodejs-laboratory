"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_1 = __importDefault(require("../database/models/query"));
class QueryHandlingService {
    constructor() {
        this.findAll = () => __awaiter(this, void 0, void 0, function* () {
            const queries = yield query_1.default.findAll();
            return queries;
        });
        this.findById = (id) => __awaiter(this, void 0, void 0, function* () {
            const existingQuery = yield query_1.default.findByPk(id);
            return existingQuery;
        });
        this.save = (object) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (!object && Object.keys(object).length == 0) {
                    throw new Error('Object must contain atleast one property.');
                }
                const query = yield query_1.default.create(Object.assign({}, object));
                return query;
            }
            catch (err) {
                throw err;
            }
        });
        this.update = (id, object) => __awaiter(this, void 0, void 0, function* () {
            if (!object && Object.keys(object).length == 0) {
                throw new Error('Object to be updated must contain at least one property.');
            }
            let existingQuery = yield this.findById(id);
            if (!existingQuery) {
                throw new Error('query_not_found');
            }
            try {
                yield query_1.default.update(Object.assign({}, object), {
                    where: { id },
                });
                existingQuery = yield this.findById(id);
                return existingQuery;
            }
            catch (err) {
                throw err;
            }
        });
        this.deleteByPrimaryKey = (id) => __awaiter(this, void 0, void 0, function* () {
            let existingQuery = yield this.findById(id);
            if (!existingQuery) {
                throw new Error('query_not_found');
            }
            try {
                yield existingQuery.destroy();
            }
            catch (err) {
                throw err;
            }
        });
    }
    static getInstance() {
        if (!QueryHandlingService.instance) {
            QueryHandlingService.instance = new QueryHandlingService();
        }
        return QueryHandlingService.instance;
    }
}
exports.default = QueryHandlingService;

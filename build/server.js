"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = exports.app = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const pino_1 = require("pino");
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const requestLogger_1 = __importDefault(require("@common/middleware/requestLogger"));
const healthCheckRouter_1 = require("@modules/healthCheck/healthCheckRouter");
const openAPIRouter_1 = require("@api-docs/openAPIRouter");
dotenv_1.default.config();
const logger = (0, pino_1.pino)({ name: 'sever start' });
exports.logger = logger;
const app = (0, express_1.default)();
exports.app = app;
//Middleware
app.use((0, helmet_1.default)());
//Request Logger
app.use((0, requestLogger_1.default)());
//Routes
app.use('/health-check', healthCheckRouter_1.healthCheckRouter);
//Swagger UI
app.use(openAPIRouter_1.openAPIRouter);

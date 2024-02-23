"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateOpenAPIDocument = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
function generateOpenAPIDocument() {
    return (0, swagger_jsdoc_1.default)({
        swaggerDefinition: {
            restapi: '3.0.0',
            info: {
                title: 'Litegram API',
                version: '1.0.0',
                description: '',
            },
            servers: [
                {
                    url: 'http://localhost:3000',
                },
            ],
        },
        apis: ['**/*.ts'],
    });
}
exports.generateOpenAPIDocument = generateOpenAPIDocument;

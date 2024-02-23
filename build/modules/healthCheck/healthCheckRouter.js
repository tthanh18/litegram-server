"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthCheckRouter = void 0;
const express_1 = require("express");
exports.healthCheckRouter = (() => {
    const router = (0, express_1.Router)();
    router.get('/', () => {
        return 'OK';
    });
    return router;
})();

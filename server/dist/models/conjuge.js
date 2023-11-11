"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Conjuge = connection_1.default.define('t_conjuge', {
    cel_conjuge: { type: sequelize_1.DataTypes.STRING },
    nm_conjuge: { type: sequelize_1.DataTypes.STRING },
    dt_nasc_conjuge: { type: sequelize_1.DataTypes.DATE },
    renda_conjuge: { type: sequelize_1.DataTypes.DECIMAL },
    status_conjuge: { type: sequelize_1.DataTypes.STRING }
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Conjuge;

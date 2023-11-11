"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Lead = connection_1.default.define('t_lead', {
    cel_lead: { type: sequelize_1.DataTypes.STRING },
    nm_lead: { type: sequelize_1.DataTypes.STRING },
    dt_nasc: { type: sequelize_1.DataTypes.DATE },
    escritura_imovel: { type: sequelize_1.DataTypes.STRING },
    fin_aberto: { type: sequelize_1.DataTypes.STRING },
    imp_renda: { type: sequelize_1.DataTypes.STRING },
    ind_corretor: { type: sequelize_1.DataTypes.STRING },
    local: { type: sequelize_1.DataTypes.STRING },
    nm_corretor: { type: sequelize_1.DataTypes.STRING },
    cel_corretor: { type: sequelize_1.DataTypes.STRING },
    dt_indicacao: { type: sequelize_1.DataTypes.DATE },
    qt_parcela: { type: sequelize_1.DataTypes.INET },
    qt_Parcela: { type: sequelize_1.DataTypes.STRING },
    renda_atual: { type: sequelize_1.DataTypes.DECIMAL },
    sinal: { type: sequelize_1.DataTypes.DECIMAL },
    situacao_imovel: { type: sequelize_1.DataTypes.STRING },
    tp_imovel: { type: sequelize_1.DataTypes.STRING },
    vl_parcela: { type: sequelize_1.DataTypes.DECIMAL },
    fgts: { type: sequelize_1.DataTypes.DECIMAL },
    endereco_id_fk: { type: sequelize_1.DataTypes.STRING },
    orig_renda: { type: sequelize_1.DataTypes.STRING },
    id_conjuge_fk: { type: sequelize_1.DataTypes.NUMBER },
    status_lead: { type: sequelize_1.DataTypes.STRING }
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Lead;

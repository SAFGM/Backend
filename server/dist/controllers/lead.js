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
exports.updatetLead = exports.postLead = exports.deleteLead = exports.getLead = exports.getListLead = void 0;
const lead_1 = __importDefault(require("../models/lead"));
const getListLead = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listLeads = yield lead_1.default.findAll();
    res.json(listLeads);
});
exports.getListLead = getListLead;
const getLead = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'get leads',
        id
    });
};
exports.getLead = getLead;
const deleteLead = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'delete lead',
        id
    });
};
exports.deleteLead = deleteLead;
const postLead = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield lead_1.default.create(body);
        res.json({
            msg: `Lead fue agregado con exito!`
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocorreio un error, comunique ao soporte`
        });
    }
});
exports.postLead = postLead;
const updatetLead = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    res.json({
        msg: 'update leads',
        id,
        body
    });
};
exports.updatetLead = updatetLead;

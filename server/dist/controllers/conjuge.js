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
exports.updatetConjuge = exports.postConjuge = exports.deleteConjuge = exports.getConjuge = exports.getListConjuge = void 0;
const conjuge_1 = __importDefault(require("../models/conjuge"));
const getListConjuge = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listConjuges = yield conjuge_1.default.findAll();
    res.json(listConjuges);
});
exports.getListConjuge = getListConjuge;
const getConjuge = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'get conjuges',
        id
    });
};
exports.getConjuge = getConjuge;
const deleteConjuge = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'delete Conjuge',
        id
    });
};
exports.deleteConjuge = deleteConjuge;
const postConjuge = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield conjuge_1.default.create(body);
        res.json({
            msg: `Conjuge fue agregado con exito!`
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocorreio un error, comunique ao soporte`
        });
    }
});
exports.postConjuge = postConjuge;
const updatetConjuge = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    res.json({
        msg: 'update conjuges',
        id,
        body
    });
};
exports.updatetConjuge = updatetConjuge;

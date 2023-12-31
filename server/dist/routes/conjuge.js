"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conjuge_1 = require("../controllers/conjuge");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', conjuge_1.getListConjuge);
router.get('/:id', conjuge_1.getConjuge);
router.delete('/:id', conjuge_1.deleteConjuge);
router.post('/', conjuge_1.postConjuge);
router.put('/:id', conjuge_1.updatetConjuge);
exports.default = router;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const livreController_1 = require("../controllers/livreController");
const router = express_1.default.Router();
router.get('/livres', livreController_1.getAllLivres);
router.get('/livres/:id', livreController_1.getLivreById);
router.post('/livres', livreController_1.createLivre);
router.put('/livres/:id', livreController_1.updateLivre);
router.delete('/livres/:id', livreController_1.deleteLivre);
exports.default = router;

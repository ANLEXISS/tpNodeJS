import express, { Router } from 'express';
import { getAllLivres, getLivreById, createLivre, updateLivre, deleteLivre ,check} from '../controllers/livreController';

const router: Router = express.Router();
router.get('/', getAllLivres);
router.get('/:id', getLivreById);
router.post('/', createLivre);
router.put('/:id', updateLivre);
router.delete('/:id', deleteLivre);
router.get("/health",check);

export default router;

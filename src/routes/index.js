import { Router } from 'express';
import { createPolygon, getPolygon, getPolygonById, deletePolygon, welcome } from '../controllers/indexController.js';

const router = Router();

router.get('', welcome)
router.get('/poligons', getPolygon);
router.get('/poligons/:id', getPolygonById);
router.post('/poligons', createPolygon);
router.delete('/poligons/:id', deletePolygon);

export default router;


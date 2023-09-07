import { Router } from 'express';
import { getHumans } from '../controllers/characters';

const router = Router();

router.get('/', getHumans)

export default router;
import { Router } from 'express';
import HealthcheckController from '../controllers/Healthcheck'
import AliasController from '../controllers/Alias'

const router = Router();

router.get('/health', HealthcheckController.index);
router.get('/aliases', AliasController.index)

export default router;
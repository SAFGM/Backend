import { getListLead, readById, deleteLead, postLead, updatetLead, getListConjuge, getIdCelLead} from '../controllers/lead';
import { Router } from 'express';

const router = Router();
const morgan = require('morgan');
router.use(morgan('dev'));

router.get('/', getListLead);
router.get('/conjuge', getListConjuge)
router.get('/cj/:cel', getIdCelLead);
router.get('/:id', readById);
router.delete('/:id', deleteLead);
router.post('/', postLead);
router.put('/:id', updatetLead);


export default router;
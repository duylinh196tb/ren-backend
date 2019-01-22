
import express from 'express';
// import {
//   isVerifiedToken,
//   requiredField,
//   validateField,
//   isAdmin
// } from '../middlewares';
import controller from 'PATH_TO_CONTROLLER/cms/service';

const router = express.Router();

router.post('/', controller.createService);
router.get('/', controller.getAllServices);
router.get('/:id', controller.getService);
router.delete('/:id', controller.deleteService);
router.patch('/:id', controller.updateService);
export default router;


module.exports = model => `
import express from 'express';
// import {
//   isVerifiedToken,
//   requiredField,
//   validateField,
//   isAdmin
// } from '../middlewares';
import controller from 'PATH_TO_CONTROLLER/cms/${model.toLowerCase()}';

const router = express.Router();

router.post('/', controller.create${model});
router.get('/', controller.getAll${model}s);
router.get('/:id', controller.get${model});
router.delete('/:id', controller.delete${model});
router.patch('/:id', controller.update${model});
export default router;

`;


import express from 'express';
// import {
//   isVerifiedToken,
//   requiredField,
//   validateField,
//   isAdmin
// } from '../middlewares';
import controller from 'PATH_TO_CONTROLLER/cms/user';

const router = express.Router();

router.post('/', controller.createUser);
router.get('/', controller.getAllUsers);
router.get('/:id', controller.getUser);
router.delete('/:id', controller.deleteUser);
router.patch('/:id', controller.updateUser);
export default router;


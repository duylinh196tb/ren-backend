
import express from 'express';
// import {
//   isVerifiedToken,
//   requiredField,
//   validateField,
//   isAdmin
// } from '../middlewares';
import controller from 'PATH_TO_CONTROLLER/cms/notification';

const router = express.Router();

router.post('/', controller.createNotification);
router.get('/', controller.getAllNotifications);
router.get('/:id', controller.getNotification);
router.delete('/:id', controller.deleteNotification);
router.patch('/:id', controller.updateNotification);
export default router;


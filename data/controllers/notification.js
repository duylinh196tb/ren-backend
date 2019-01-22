
import service from 'PATH_TO_FOLDER_SERVICE/service';
import Notification from 'PATH_TO_FOLDER_MODELS/models/notification';

const createNotification = async (req, res) => {
  const data = await Notification.create(req.body);
  res.json(service.response.success('Tạo Notification thành công!', data));
};

const getAllNotifications = async (req, res) => {
  const data = await Notification.find().sort('-createdAt');
  res.json(
    service.response.success('Lấy danh sách Notifications thành công!', data)
  );
};

const getNotification = async (req, res) => {
  const data = await Notification.findById(req.params.id);
  if (data)
    return res.json(service.response.success('Lấy Notification thành công', data));
  res.json(service.response.objectNotFound('Khong tim thay Notification'));
};

const deleteNotification = async (req, res) => {
  const data = await Notification.findOneAndDelete({ _id: req.params.id });
  if (data)
    return res.json(
      service.response.success('Xoa Notification thanh cong', {
        _id: data._id
      })
    );
  res.json(service.response.objectNotFound('Không tìm thấy Notification'));
};

const updateNotification = async (req, res) => {
  const data = await Notification.findByIdAndUpdate(
    req.params.id,
    {
      $set: { ...req.body }
    },
    { new: true }
  );

  if (data)
    return res.json(service.response.success('Update thành công', data));
  res.json(service.response.objectNotFound('Không tìm thấy'));
};
export default {
  createNotification,
  getAllNotifications,
  getNotification,
  deleteNotification,
  updateNotification
};



import service from 'PATH_TO_FOLDER_SERVICE/service';
import User from 'PATH_TO_FOLDER_MODELS/models/user';

const createUser = async (req, res) => {
  const data = await User.create(req.body);
  res.json(service.response.success('Tạo User thành công!', data));
};

const getAllUsers = async (req, res) => {
  const data = await User.find().sort('-createdAt');
  res.json(
    service.response.success('Lấy danh sách Users thành công!', data)
  );
};

const getUser = async (req, res) => {
  const data = await User.findById(req.params.id);
  if (data)
    return res.json(service.response.success('Lấy User thành công', data));
  res.json(service.response.objectNotFound('Khong tim thay User'));
};

const deleteUser = async (req, res) => {
  const data = await User.findOneAndDelete({ _id: req.params.id });
  if (data)
    return res.json(
      service.response.success('Xoa User thanh cong', {
        _id: data._id
      })
    );
  res.json(service.response.objectNotFound('Không tìm thấy User'));
};

const updateUser = async (req, res) => {
  const data = await User.findByIdAndUpdate(
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
  createUser,
  getAllUsers,
  getUser,
  deleteUser,
  updateUser
};


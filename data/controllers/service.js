
import service from 'PATH_TO_FOLDER_SERVICE/service';
import Service from 'PATH_TO_FOLDER_MODELS/models/service';

const createService = async (req, res) => {
  const data = await Service.create(req.body);
  res.json(service.response.success('Tạo Service thành công!', data));
};

const getAllServices = async (req, res) => {
  const data = await Service.find().sort('-createdAt');
  res.json(
    service.response.success('Lấy danh sách Services thành công!', data)
  );
};

const getService = async (req, res) => {
  const data = await Service.findById(req.params.id);
  if (data)
    return res.json(service.response.success('Lấy Service thành công', data));
  res.json(service.response.objectNotFound('Khong tim thay Service'));
};

const deleteService = async (req, res) => {
  const data = await Service.findOneAndDelete({ _id: req.params.id });
  if (data)
    return res.json(
      service.response.success('Xoa Service thanh cong', {
        _id: data._id
      })
    );
  res.json(service.response.objectNotFound('Không tìm thấy Service'));
};

const updateService = async (req, res) => {
  const data = await Service.findByIdAndUpdate(
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
  createService,
  getAllServices,
  getService,
  deleteService,
  updateService
};


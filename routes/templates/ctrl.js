module.exports = model => `
import service from 'PATH_TO_FOLDER_SERVICE/service';
import ${model} from 'PATH_TO_FOLDER_MODELS/models/${model.toLowerCase()}';

const create${model} = async (req, res) => {
  const data = await ${model}.create(req.body);
  res.json(service.response.success('Tạo ${model} thành công!', data));
};

const getAll${model}s = async (req, res) => {
  const data = await ${model}.find().sort('-createdAt');
  res.json(
    service.response.success('Lấy danh sách ${model}s thành công!', data)
  );
};

const get${model} = async (req, res) => {
  const data = await ${model}.findById(req.params.id);
  if (data)
    return res.json(service.response.success('Lấy ${model} thành công', data));
  res.json(service.response.objectNotFound('Khong tim thay ${model}'));
};

const delete${model} = async (req, res) => {
  const data = await ${model}.findOneAndDelete({ _id: req.params.id });
  if (data)
    return res.json(
      service.response.success('Xoa ${model} thanh cong', {
        _id: data._id
      })
    );
  res.json(service.response.objectNotFound('Không tìm thấy ${model}'));
};

const update${model} = async (req, res) => {
  const data = await ${model}.findByIdAndUpdate(
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
  create${model},
  getAll${model}s,
  get${model},
  delete${model},
  update${model}
};

`;

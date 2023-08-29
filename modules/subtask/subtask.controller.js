const SubtaskModel = require("./subtask.model");

const create = async (payload) => {
  return await SubtaskModel.create(payload);
};

const list = async () => {
  return await SubtaskModel.find();
};

const getById = async (id) => {
  return await SubtaskModel.findById({ _id: id });
};

const updateById = async (id, payload) => {
  return await SubtaskModel.updateOne({ _id: id }, payload);
};
const deleteById = async (id) => {
  return await SubtaskModel.deleteOne({ _id: id });
};

module.exports = { create, list, getById, updateById, deleteById };

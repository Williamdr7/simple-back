import models from "../models";

export const getById = (entity, id, params) => {
  if (!id || id === 0) {
    throw new Error('Param "id" not found');
  }

  return models[entity].findByPk(id, params);
};

export const getByEmail = (entity, email) => {
  if (!email || email === 0) {
    throw new Error('Param "email" not found');
  }

  return models[entity].findOne({ where: { email_user: email } });
};

export const getByFilter = (entity, filter, params) => {
  return models[entity].scope(filter).findAll(params);
};

export const getAndCountByFilter = (entity, filter, params) => {
  return models[entity].scope(filter).findAndCountAll(params);
};

export const countByFilter = (entity, filter, params) => {
  return models[entity].scope(filter).count(params);
};

export const findAll = (entity) => {
  return models[entity].findAll();
};

export const create = (entity, data) => {
  return models[entity].create(data);
};

export const destroy = (entity, prop, id) => {
  return models[entity].destroy({ where: { [prop]: id } });
};

export const update = (entity, propId, id, values) => {
  return models[entity].update(values, { where: { [propId]: id } });
};

const raw = () => {
  return models.sql;
};

export default {
  getById,
  getByEmail,
  getByFilter,
  getAndCountByFilter,
  countByFilter,
  raw,
  findAll,
  create,
  destroy,
  update,
};

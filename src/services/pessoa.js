import db from "./common";

const ENTITY_NAME = "Pessoa";

export const getById = (id, params) => {
  return db.getById(ENTITY_NAME, id, params);
};

export const getAll = () => {
  return db.findAll(ENTITY_NAME);
};

export const getByFilter = (filter, params) => {
  return db.getByFilter(ENTITY_NAME, filter, params);
};

export const getAndCountByFilter = (filter, params) => {
  return db.getAndCountByFilter(ENTITY_NAME, filter, params);
};

export const countByFilter = (filter, params) => {
  return db.countByFilter(ENTITY_NAME, filter, params);
};

export const createPerson = (value) => {
  return db.create(ENTITY_NAME, value);
};

export const updatePersonById = (id, value) => {
  return db.update(ENTITY_NAME, "id", id, value);
};

import db from "./common";

const ENTITY_NAME = "User";

export const getByEmail = (email) => {
  return db.getByEmail(ENTITY_NAME, email);
};

export const createUser = (user) => {
  return db.create(ENTITY_NAME, user);
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

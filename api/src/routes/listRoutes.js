const express = require('express');
const { body } = require('express-validator');

const listValidationSchema = [
  body('title')
    .notEmpty()
    .withMessage('El título no puede estar vacío')
    .isString()
    .withMessage('El título debe ser una cadena de texto válida'),
  body('userId')
    .notEmpty()
    .withMessage('El ID del usuario es requerido')
    .isString()
    .withMessage('El ID del usuario debe ser una cadena de texto válida'),

];

const ListController = require('./controllers/listController');

const router = express.Router();

router.post(
  '/lists',
  listValidationSchema,
  ListController.createList
);

router.put(
  '/lists/:listId',
  listValidationSchema,
  ListController.updateList
);

module.exports = router;
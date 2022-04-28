const { Router } = require('express');
const ContactController = require('./app/controllers/ContactController');
const CategoryController = require('./app/controllers/CategoryController');

const router = Router();

// contacts routes
router.get(
  '/contacts',

  (req, res, next) => {
    req.middleware = 'middleware';
    next();
  },

  ContactController.index,
);
router.get('/contacts/:id', ContactController.show);
router.post('/contacts', ContactController.store);
router.delete('/contacts/:id', ContactController.delete);
router.put('/contacts/:id', ContactController.update);

// categories routes
router.get('/categories', CategoryController.index);
router.get('/categories/:id', CategoryController.show);
router.post('/categories', CategoryController.store);
router.delete('/categories/:id', CategoryController.delete);

module.exports = router;

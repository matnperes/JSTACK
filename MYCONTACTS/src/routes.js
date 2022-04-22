const { Router } = require('express');
const ContactController = require('./app/controllers/ContactController');

const router = Router();

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

module.exports = router;

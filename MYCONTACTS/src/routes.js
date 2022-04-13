const { Router } = require('express');
const contactController = require('./app/controllers/contactController');

const router = Router();

router.get('/contacts', contactController.index);// contact list
router.get('/contacts/:id', contactController.show);// contact
router.post('/contacts', contactController.store);// add contact
router.put('/contacts/:id', contactController.update);
router.delete('/contacts/:id', contactController.delete);// delete contact

module.exports = router;

// podemos adicionar middlewares como segundo argumento dentro das rotas, depois do endpoint e
// antes da chamada de reloução da rota

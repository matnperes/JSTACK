const ContactRepositorie = require('../repositories/ContactRepositories');

class ContactController {
  async index(req, res) {
    const contacts = await ContactRepositorie.findAll();

    if (contacts) {
      res.status(404).json({ error: 'Contact not found !' });
    }

    res.json(contacts);
  }// list all register

  async show(req, res) {
    const { id } = req.params;
    const contact = await ContactRepositorie.findById(id);

    if (!contact) {
      // 404: not found
      return res.status(404).json({ error: 'Contact not found!' });
    }

    res.json(contact);
  }// Get a register

  store() {

  }// Create a register

  update() {

  }// update a register

  async delete(req, res) {
    const { id } = req.params;
    const contact = await ContactRepositorie.findById(id);

    if (!contact) {
      return res.status(404).json({ error: 'Contact not found!' });
    }

    await ContactRepositorie.delete(id);
    res.sendStatus(204);
  }// delete a register
}

// singleton
module.exports = new ContactController();

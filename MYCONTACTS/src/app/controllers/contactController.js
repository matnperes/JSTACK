const ContactRepositorie = require('../repositories/ContactRepositories');

class ContactController {
  async index(req, res) {
    const contacts = await ContactRepositorie.findAll();

    if (!contacts) {
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

  async store(req, res) {
    const { name, email } = req.body;

    if (!name) {
      res.status(400).json({ error: 'Name is required' });
    }

    const contactExist = await ContactRepositorie.findByEmail(email);

    if (contactExist) {
      res.status(400).json({ error: 'This contact already exist' });
    }

    const contact = await ContactRepositorie.create({ name, email });

    res.json(contact);
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

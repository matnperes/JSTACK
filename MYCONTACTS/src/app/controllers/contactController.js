const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  async index(req, res) {
    const { orderBy } = req.query;
    const contacts = await ContactRepository.findAll(orderBy);

    if (!contacts) {
      res.status(404).json({ error: 'Contact not found!' });
    }

    res.json(contacts);
  }// list all register

  async show(req, res) {
    const { id } = req.params;
    const contact = await ContactRepository.findById(id);

    if (!contact) {
      // 404: not found
      return res.status(404).json({ error: 'Contact not found!' });
    }

    res.json(contact);
  }// Get a register

  async store(req, res) {
    const {
      name, email, phone, category_id,
    } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    const contactExist = await ContactRepository.findByEmail(email);

    if (contactExist) {
      return res.status(400).json({ error: 'This contact already exist' });
    }

    const contact = await ContactRepository.create({
      name, email, phone, category_id,
    });

    res.json(contact);
  }// Create a register

  async update(req, res) {
    const { id } = req.params;
    const {
      name, email, phone, category_id,
    } = req.body;

    if (!name) {
      return res.json({ error: 'Name is required!' });
    }

    const contactExist = await ContactRepository.findById(id);

    if (!contactExist) {
      return res.status(404).json({ error: 'User not found' });
    }

    const contactByEmail = await ContactRepository.findByEmail(email);

    if (contactByEmail && contactByEmail.id !== id) {
      return res.status(400).json({ error: 'email already in use' });
    }

    const contact = await ContactRepository.update(id, {
      name, email, phone, category_id,
    });

    return res.json(contact);
  }// update a register

  async delete(req, res) {
    const { id } = req.params;

    await ContactRepository.delete(id);
    res.sendStatus(204);
  }// delete a register
}

// singleton
module.exports = new ContactController();

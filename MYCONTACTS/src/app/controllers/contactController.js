/* eslint-disable camelcase */
const contactRepository = require('../repositories/ContactRepository');

class ContactController {
  async index(req, res) {
    const contacts = await contactRepository.findAll();

    res.json(contacts);
  }

  async show(req, res) {
    const { id } = await req.params;
    const contact = await contactRepository.findById(id);
    if (!contact) {
      return res.status(404).json({ error: 'Contact Not Found' });
    }

    res.json(contact);
  }

  async store(req, res) {
    const {
      // eslint-disable-next-line camelcase
      name, email, phone,
    } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'The fill "name" is not complete' });
    }

    const contactExist = await contactRepository.findByEmail(email);

    if (contactExist) {
      return res.status(400).json({ error: 'This e-mail is already in use' });
    }
    const contact = await contactRepository.addContact({
      // eslint-disable-next-line camelcase
      name, email, phone,
    });
    res.json(contact);
  }

  async update(req, res) {
    const { id } = req.params;
    const {
      name, email, phone, category_id,
    } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'The fill "name" is not complete' });
    }

    const contactByEmail = await contactRepository.findById(id);

    if (!contactByEmail && contactByEmail.id !== id) {
      return res.status(404).json({ error: 'User not found' });
    }

    const contact = await contactRepository.update(id, {
      name, email, phone, category_id,
    });

    res.json(contact);
  }

  async delete(req, res) {
    const { id } = req.params;
    const contact = await contactRepository.findById(id);

    if (!contact) {
      return res.status(404).json({ error: 'Contact Not Found' });
    }
    await contactRepository.delete(id);
    res.sendStatus(204);
  }
}

module.exports = new ContactController();

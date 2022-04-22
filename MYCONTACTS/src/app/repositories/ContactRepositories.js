const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Matheus',
    email: 'matheus@jstack.com.br',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Manuel',
    email: 'Manuel@jstack.com.br',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'José',
    email: 'José@jstack.com.br',
    category_id: v4(),
  },
];

class ContactRepositorie {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }

  findByEmail(email) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.email === email),
    ));
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  create({ name, email }) {
    return new Promise((resolve) => {
      const contact = {
        id: v4(),
        name,
        email,
        category_id: v4(),
      };
      contacts.push(contact);
      resolve();
    });
  }
}

module.exports = new ContactRepositorie();

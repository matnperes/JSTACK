/* eslint-disable camelcase */
const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Matheus',
    email: 'fulano@suits.com',
    phone: '1854454481',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'João',
    email: 'fulano@rag.com',
    phone: '454548554',
    category_id: v4(),
  },
]; // mockes

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }// index

  findById(id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }// show

  findByEmail(email) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.email === email),
    ));
  }// show

  addContact({
    name, email, phone,
  }) {
    return new Promise((resolve) => {
      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id: v4(),
      };
      resolve();
      contacts.push(newContact);
    });
  }// store

  update(id, {
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const updateContact = {
        id,
        name,
        email,
        phone,
        category_id,
      };

      contacts = contacts.map((contact) => (
        contact.id === id ? updateContact : contact
      ));
      resolve(updateContact);
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();

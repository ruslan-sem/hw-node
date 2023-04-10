const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "contacts.json");

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    throw new Error(err);
  }
};

const getContactById = async (contactId) => {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    return JSON.parse(data).find((item) => item.id === contactId);
  } catch (err) {
    throw new Error(err);
  }
};

const removeContact = async (contactId) => {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    const contacts = JSON.parse(data).filter((item) => item.id !== contactId);
    try {
      await fs.writeFile(contactsPath, JSON.stringify(contacts), "utf8");
    } catch (err) {
      throw new Error(err);
    }
    return JSON.parse(data).find((item) => item.id === contactId);
  } catch (err) {
    throw new Error(err);
  }
};

const addContact = async (body) => {};

const updateContact = async (contactId, body) => {};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};

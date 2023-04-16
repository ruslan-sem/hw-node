const contacts = require("../models/contacts");
const { HttpError, ctrlWrapper } = require("../helpers");

const getContacts = async (req, res) => {
  const result = await contacts.listContacts();

  return res.status(200).json(result);
};

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.getContactById(contactId);

  if (!result) {
    throw HttpError(404, "Not found");
  }

  return res.status(200).json(result);
};

const createContact = async (req, res) => {
  const result = await contacts.addContact(req.body);

  return res.status(201).json(result);
};

const updateContactById = async (req, res) => {
  console.log(req.body);

  const { contactId } = req.params;

  const result = await contacts.updateContact(contactId, req.body);

  if (!Object.keys(req.body).length) {
    throw HttpError(400, "Missing fields");
  }

  if (!result) {
    throw HttpError(404, "Not found");
  }

  return res.json(result);
};

const deleteContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.removeContact(contactId);

  if (!result) {
    throw HttpError(404, "Not found");
  }

  return res.status(200).json({ message: "contact deleted" });
};

module.exports = {
  getContacts: ctrlWrapper(getContacts),
  getContactById: ctrlWrapper(getContactById),
  createContact: ctrlWrapper(createContact),
  updateContactById: ctrlWrapper(updateContactById),
  deleteContactById: ctrlWrapper(deleteContactById),
};

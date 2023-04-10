const express = require("express");
const dataValidation = require("../../helpers/dataValidation");

const router = express.Router();

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require("../../models/contacts");

router.get("/", async (req, res, next) => {
  try {
    const data = await listContacts();
    res.json(data);
  } catch (err) {
    next(err);
  }
});

router.get("/:contactId", async (req, res, next) => {
  try {
    const data = await getContactById(req.params.contactId);
    if (!data) {
      return res.status(404).json({ message: "Not found" });
    }
    res.json(data);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  const { error } = dataValidation(req.body);
  if (error) {
    return res.status(400).json({ message: "missing required name field" });
  }
  try {
    const data = await addContact(req.body);
    res.status(201).json(data);
  } catch (err) {
    next(err);
  }
});

router.delete("/:contactId", async (req, res, next) => {
  try {
    const data = await removeContact(req.params.contactId);
    if (!data) {
      return res.status(404).json({ message: "Not found" });
    }
    res.json({ message: "contact deleted" });
  } catch (err) {
    next(err);
  }
});

router.put("/:contactId", async (req, res, next) => {
  const { error } = dataValidation(req.body);
  if (error) {
    return res.status(400).json({ message: "missing fields" });
  }
  try {
    const data = await updateContact(req.params.contactId, req.body);
    if (!data) {
      return res.status(404).json({ message: "Not found" });
    }
    res.json(data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

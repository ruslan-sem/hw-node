const express = require("express");
const ctrl = require("../../controllers/contacts");
const { validateBody } = require("../../middlewares");
const schemas = require("../../schemas/contactsSchemas");

const router = express.Router();

router.get("/", ctrl.getContacts);

router.get("/:contactId", ctrl.getContactById);

router.post("/", validateBody(schemas.postSchema), ctrl.createContact);

router.put(
  "/:contactId",
  validateBody(schemas.putSchema),
  ctrl.updateContactById
);

router.delete("/:contactId", ctrl.deleteContactById);

module.exports = router;

const express = require("express");
const ctrl = require("../../controllers/contacts");
const { validateBody, isValidId } = require("../../middlewares");
const { schemas } = require("../../schemas/contactsSchemas");

const router = express.Router();

router.get("/", ctrl.getContacts);

router.get("/:contactId", isValidId, ctrl.getContactById);

router.post("/", validateBody(schemas.postSchema), ctrl.createContact);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.putSchema),
  ctrl.updateContactById
);

router.delete("/:contactId", isValidId, ctrl.deleteContactById);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schemas.patchSchema),
  ctrl.updateStatusContact
);

module.exports = router;

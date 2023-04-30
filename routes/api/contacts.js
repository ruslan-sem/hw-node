const express = require("express");
const ctrl = require("../../controllers/contacts");
const { validateBody, isValidId, authenticate } = require("../../middlewares");
const { schemas } = require("../../schemas/contactsSchemas");

const router = express.Router();

router.get("/", authenticate, ctrl.getContacts);

router.get("/:contactId", authenticate, isValidId, ctrl.getContactById);

router.post(
  "/",
  authenticate,
  validateBody(schemas.postSchema),
  ctrl.createContact
);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schemas.putSchema),
  ctrl.updateContactById
);

router.delete("/:contactId", authenticate, isValidId, ctrl.deleteContactById);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.patchSchema),
  ctrl.updateStatusContact
);

module.exports = router;

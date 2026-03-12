const express = require("express");
const announcementController = require("../Controller/announcementController");
const authMiddleware = require("../Middleware/authMiddleware");

const announcementRouter = express.Router();

announcementRouter.use(authMiddleware);
announcementRouter.post("/", announcementController.postAnnouncementAdd);

module.exports = announcementRouter;

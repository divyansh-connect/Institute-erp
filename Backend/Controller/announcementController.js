const Announcement = require("../Model/announcement");
exports.postAnnouncementAdd = (req, res, next) => {
  const { title, message } = req.body;
  if (!title || !message) {
    return res.status(400).json({
      message: "Title and Message is required",
    });
  }
};

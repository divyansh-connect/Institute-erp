import React, { useState } from "react";
import { institudeAnnouncement } from "../../../Services/InstitudeServices";

const AddAnnouncement = () => {
  const [validator, setValidator] = useState("");
  const [announcement, setAnnouncement] = useState({
    title: "",
    description: "",
  });
  let error = {};

  const handlePublishBtn = async () => {
    const cleanAnnouncement = {
      title: announcement.title.trim(),
      description: announcement.description.trim(),
    };

    if (!cleanAnnouncement.title) {
      error.title = "Announcement Title is required";
    }
    if (!cleanAnnouncement.description) {
      error.description = "Announcement Details is required";
    }
    setValidator(error);

    if (Object.keys(error).length === 0) {
      const payload = {
        title: cleanAnnouncement.title,
        message: cleanAnnouncement.description,
      };
      try {
        // API Calls
        const response = await institudeAnnouncement(payload);
      } catch (error) {}

      setAnnouncement({
        title: "",
        description: "",
      });
    }
  };
  return (
    <>
      {/* Add Announcement Form */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h5 className="mb-3">Add New Announcement</h5>

          <div className="row g-2">
            {/* Title */}
            <div className="col-12 ">
              {validator.title && (
                <div className="text-danger small">{validator.title}</div>
              )}
              <input
                type="text"
                className="form-control mb-2"
                placeholder="*Enter announcement title "
                value={announcement.title}
                required
                onChange={(e) => {
                  setAnnouncement({ ...announcement, title: e.target.value });
                }}
              />

              {/* Description */}
              {validator.description && (
                <div className="text-danger small">{validator.description}</div>
              )}
              <textarea
                className="form-control"
                rows="3"
                placeholder="*Write announcement details... "
                value={announcement.description}
                onChange={(e) => {
                  setAnnouncement({
                    ...announcement,
                    description: e.target.value,
                  });
                }}
              ></textarea>
            </div>
            {/* Button */}
            <div className="col-12">
              <button className="btn btn-primary" onClick={handlePublishBtn}>
                Publish Announcement
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAnnouncement;

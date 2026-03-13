import React from "react";
import AddAnnouncement from "./AddAnnouncement";
import ShowAnnouncement from "./ShowAnnouncement";
import { useState } from "react";

const Announcements = () => {
  const [refresh, setRefresh] = useState(false);
  return (
    <>
      <h3 className="mb-3">Manage Announcements</h3>
      <div className="row ">
        <div className="col-12">
          <AddAnnouncement setRefresh={setRefresh} />
        </div>
        <div className="col-12 ">
          <ShowAnnouncement refresh={refresh} setRefresh={setRefresh} />
        </div>
      </div>
    </>
  );
};

export default Announcements;

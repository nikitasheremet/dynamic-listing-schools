import React, { useState } from "react";
import UpdateSchool from "./UpdateSchool";

export default function School({
  updateSchool,
  schoolInfo,
  schoolInfo: { name, about, location, admission, image_url }
}) {
  const [updateClicked, setUpdateClicked] = useState(false);
  return (
    <div>
      <div style={{ display: updateClicked ? "none" : "flex" }}>
        <img src={image_url} style={{ width: "80px", height: "80px" }} />
        <div>{name}</div>
        <div>{about}</div>
        <div>{location}</div>
        <div>{admission}</div>

        <button onClick={() => setUpdateClicked(!updateClicked)}>Update</button>
      </div>
      <div style={{ display: updateClicked ? "flex" : "none" }}>
        <UpdateSchool schoolInfo={schoolInfo} updateSchool={updateSchool} />
        <button onClick={() => setUpdateClicked(!updateClicked)}>Close</button>
      </div>
    </div>
  );
}

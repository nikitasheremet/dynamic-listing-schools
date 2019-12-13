import React, { useState } from "react";
import UpdateSchool from "./UpdateSchool";
import "./styles/School.sass";

export default function School({
  updateSchool,
  schoolInfo,
  schoolInfo: { name, about, location, admission, image_url }
}) {
  const [updateClicked, setUpdateClicked] = useState(false);
  const [schoolClicked, setSchoolClicked] = useState(false);
  return (
    <div>
      <div
        style={{ display: updateClicked ? "none" : "flex" }}
        onClick={() => setSchoolClicked(!schoolClicked)}
        className="school-listing"
      >
        <img src={image_url} style={{ width: "120px", height: "100px" }} />
        <div className="school-info">
          <div className="school-unclicked">
            <div>{name}</div>
          </div>
          <div
            className="school-clicked"
            style={{ display: schoolClicked ? "flex" : "none" }}
          >
            <div className="school-clicked-info">
              <div>About: {about}</div>
              <div>Location: {location}</div>
              <div>Admission Requirements: {admission}</div>
            </div>
            <button
              className="school-update-button"
              onClick={() => setUpdateClicked(!updateClicked)}
            >
              Update
            </button>
          </div>
        </div>
      </div>
      <div
        className="update-form"
        style={{ display: updateClicked ? "flex" : "none" }}
      >
        <UpdateSchool
          schoolInfo={schoolInfo}
          updateSchool={updateSchool}
          updateClicked={updateClicked}
          setUpdateClicked={setUpdateClicked}
        />
      </div>
    </div>
  );
}

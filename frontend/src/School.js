import React, { useState } from "react";
import UpdateSchool from "./UpdateSchool";

export default function School({
  schoolInfo: { name, about, location, admission }
}) {
  const [updateClicked, setUpdateClicked] = useState(false);
  console.log(updateClicked);
  return (
    <div>
      <div style={{ display: updateClicked ? "none" : "flex" }}>
        <div>{name}</div>
        <div>{about}</div>
        <div>{location}</div>
        <div>{admission}</div>
        <button onClick={() => setUpdateClicked(!updateClicked)}>Update</button>
      </div>
      <div style={{ display: updateClicked ? "flex" : "none" }}>
        <UpdateSchool />
        <button onClick={() => setUpdateClicked(!updateClicked)}>Close</button>
      </div>
    </div>
  );
}

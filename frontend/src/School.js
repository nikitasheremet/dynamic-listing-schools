import React from "react";

export default function School({
  schoolInfo: { name, about, location, admission }
}) {
  return (
    <div>
      <div>{name}</div>
      <div>{about}</div>
      <div>{location}</div>
      <div>{admission}</div>
    </div>
  );
}

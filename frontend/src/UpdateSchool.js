import React, { useState, useEffect } from "react";
import "./styles/UpdateSchool.sass";

export default function UpdateSchool({
  updateSchool,
  updateClicked,
  setUpdateClicked,
  schoolInfo: { id, name, about, location, admission, image_url }
}) {
  const [formFields, setFormFields] = useState({
    name: "",
    about: "",
    location: "",
    admission: "",
    image_url: ""
  });

  useEffect(() => {
    setFormFields({
      ...formFields,
      name,
      about,
      location,
      admission,
      image_url
    });
  }, []);
  return (
    <div className="update-school-form">
      <div className="input-field">
        <p>School Name</p>
        <input
          value={formFields.name}
          onChange={e => setFormFields({ ...formFields, name: e.target.value })}
        />
      </div>
      <div className="input-field">
        <p>School Description</p>
        <input
          value={formFields.about}
          onChange={e =>
            setFormFields({ ...formFields, about: e.target.value })
          }
        />
      </div>
      <div className="input-field">
        <p>School Location</p>
        <input
          value={formFields.location}
          onChange={e =>
            setFormFields({ ...formFields, location: e.target.value })
          }
        />
      </div>
      <div className="input-field">
        <p>Admission Requirements</p>
        <input
          value={formFields.admission}
          onChange={e =>
            setFormFields({ ...formFields, admission: e.target.value })
          }
        />
      </div>

      <div>
        <p>Update School Picture</p>
        <input
          type="file"
          name="image"
          onChange={e =>
            setFormFields({ ...formFields, image_url: e.target.files[0] })
          }
        />
      </div>
      <div className="buttons-update">
        <button
          className="save-button"
          type="submit"
          onClick={() => {
            if (
              Object.values(formFields).includes("") ||
              Object.values(formFields).includes(null)
            ) {
              alert("Please fill out all fields!");
            } else {
              updateSchool(formFields, id);
              setUpdateClicked(!updateClicked);
            }
          }}
        >
          Save
        </button>
        <button
          className="close"
          onClick={() => setUpdateClicked(!updateClicked)}
        >
          X
        </button>
      </div>
    </div>
  );
}

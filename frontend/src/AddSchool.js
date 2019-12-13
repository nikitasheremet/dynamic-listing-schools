import React, { useState } from "react";
import "./styles/AddSchool.sass";

export default function AddSchool({ handleAdd }) {
  const [formFields, setFormFields] = useState({
    name: "",
    about: "",
    location: "",
    admission: "",
    image_url: ""
  });

  const handleAddSchool = () => {
    if (Object.values(formFields).includes("")) {
      alert("Please fll out all fields");
    } else {
      handleAdd(formFields);
      setFormFields({
        ...formFields,
        name: "",
        about: "",
        location: "",
        admission: "",
        image_url: ""
      });
    }
  };

  return (
    <div className="add-school-form">
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
        <p>Upload School Picture</p>
        <input
          type="file"
          name="image"
          onChange={e =>
            setFormFields({ ...formFields, image_url: e.target.files[0] })
          }
        />
      </div>
      <button onClick={() => handleAddSchool()}>Add</button>
    </div>
  );
}

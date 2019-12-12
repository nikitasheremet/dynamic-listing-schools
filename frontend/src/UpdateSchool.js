import React, { useState } from "react";

export default function UpdateSchool({ handleUpdate }) {
  const [formFields, setFormFields] = useState({
    name: "",
    about: "",
    location: "",
    admission: ""
  });
  return (
    <div>
      <input
        placeholder="Name of School"
        value={formFields.name}
        onChange={e => setFormFields({ ...formFields, name: e.target.value })}
      />
      <textarea
        placeholder="Description"
        value={formFields.about}
        onChange={e => setFormFields({ ...formFields, about: e.target.value })}
      />
      <input
        placeholder="Location"
        value={formFields.location}
        onChange={e =>
          setFormFields({ ...formFields, location: e.target.value })
        }
      />
      <input
        placeholder="Admission"
        value={formFields.admission}
        onChange={e =>
          setFormFields({ ...formFields, admission: e.target.value })
        }
      />
      <input
        type="submit"
        value="Save"
        onClick={() => handleUpdate(formFields)}
      />
    </div>
  );
}

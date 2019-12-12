import React, { useState } from "react";

export default function AddSchool({ handleAdd }) {
  const [formFields, setFormFields] = useState({
    name: "",
    about: "",
    location: "",
    admission: "",
    image_url: ""
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
        type="file"
        name="image"
        onChange={e =>
          setFormFields({ ...formFields, image_url: e.target.files[0] })
        }
      />
      <input type="submit" value="Add" onClick={() => handleAdd(formFields)} />
    </div>
  );
}

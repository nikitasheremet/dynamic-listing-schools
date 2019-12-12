import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import School from "./School";
import AddSchool from "./AddSchool";

function App() {
  const [schools, setSchools] = useState({});
  const [update, setUpdate] = useState(true);

  useEffect(() => {
    Axios.get("http://localhost:4000/").then(result => {
      let queryResult = result.data.rows;
      let schoolList = queryResult.reduce((directory, school) => {
        return {
          ...directory,
          [school.id]: {
            id: school.id,
            name: school.name,
            about: school.about,
            location: school.location,
            admission: school.admission,
            image_url: school.image_url
          }
        };
      }, {});
      setSchools(schoolList);
    });
  }, [update]);
  const handleAdd = ({ name, about, location, admission, image_url }) => {
    console.log(image_url);
    let formData = new FormData();
    formData.append("name", name);
    formData.append("about", about);
    formData.append("location", location);
    formData.append("admission", admission);
    formData.append("image", image_url);
    Axios.post("http://localhost:4000/school/add", formData).then(() => {
      setUpdate(!update);
    });
  };
  const updateSchool = (
    { name, about, location, admission, image_url },
    id
  ) => {
    console.log(id);
    let formData = new FormData();
    formData.append("name", name);
    formData.append("about", about);
    formData.append("location", location);
    formData.append("admission", admission);
    formData.append("image", image_url);
    console.log(name, about, location, admission, image_url);
    Axios.put(`http://localhost:4000/school/update/${id}`, formData).then(
      () => {
        setSchools({
          ...schools,
          [id]: { name, about, location, admission, image_url }
        });
      }
    );
  };
  console.log(schools);
  return (
    <div className="App">
      <AddSchool handleAdd={handleAdd} />
      {Object.values(schools).map(school => {
        return (
          <School
            key={school.id}
            schoolInfo={school}
            updateSchool={updateSchool}
          />
        );
      })}
    </div>
  );
}

export default App;

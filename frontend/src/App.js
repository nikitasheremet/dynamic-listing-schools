import React, { useState, useEffect } from "react";
import "./styles/App.sass";
import Axios from "axios";
import School from "./School";
import AddSchool from "./AddSchool";
import createForm from "./helperFunction";

function App() {
  const [schools, setSchools] = useState({});
  const [update, setUpdate] = useState(true);
  const [addButtonClicked, setAddButtonClicked] = useState(false);

  useEffect(() => {
    Axios.get("https://cryptic-harbor-64765.herokuapp.com/").then(result => {
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
    let formData = createForm(name, about, location, admission, image_url);
    Axios.post(
      "https://cryptic-harbor-64765.herokuapp.com/school/add",
      formData
    ).then(() => {
      setUpdate(!update);
      setAddButtonClicked(!addButtonClicked);
    });
  };
  const updateSchool = (
    { name, about, location, admission, image_url },
    id
  ) => {
    let formData = createForm(name, about, location, admission, image_url);
    Axios.put(
      `https://cryptic-harbor-64765.herokuapp.com/school/update/${id}`,
      formData
    ).then(() => {
      setUpdate(!update);
    });
  };
  console.log(schools);
  return (
    <div className="App">
      <div className="header">
        <h2>Dynamic School List</h2>
        <h4>Home</h4>
      </div>
      <div className="all-schools">
        <h3>List of Schools</h3>
        <div className="add-school-div">
          <button
            className="add-school-button"
            onClick={() => setAddButtonClicked(!addButtonClicked)}
          >
            Add School <span>+</span>
          </button>
          <div style={{ display: addButtonClicked ? "block" : "none" }}>
            <AddSchool handleAdd={handleAdd} />
          </div>
        </div>
        <div className="school-list">
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
      </div>
    </div>
  );
}

export default App;

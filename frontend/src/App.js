import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import School from "./School";

function App() {
  const [schools, setSchools] = useState({});

  useEffect(() => {
    Axios.get("http://localhost:4000/").then(result => {
      let queryResult = result.data.rows;
      let schoolList = queryResult.reduce((directory, school) => {
        return {
          ...directory,
          [school.id]: {
            name: school.name,
            about: school.about,
            location: school.location,
            admission: school.admission
          }
        };
      }, {});
      setSchools(schoolList);
    });
  }, []);
  console.log(schools);
  return (
    <div className="App">
      {Object.values(schools).map(school => {
        return <School key={school.id} schoolInfo={school} />;
      })}
    </div>
  );
}

export default App;

import React, { useState } from "react";

const PatientScherm = ({ patient }) => {
  const [formState, setFormState] = useState(
    data[patient]
      ? data[patient]
      : {
          naam: "",
          opnamedatum: "",
          titel: "",
          fase: "0",
          opnameadmin: {
            opname89: false,
            opnamemedicatie: false,
            ZVT: false,
          },
          doorlopendeadmin: {
            taxatie: false,
          },
          ontslagadmin: {
            ontslagmed: false,
            ontslag816: false,
            ontslagbrief: false,
          },
          ZAG: [],
        }
  );

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form>
      <label>
        Naam:
        <input
          type="text"
          name="naam"
          value={formState.naam}
          onChange={handleChange}
        />
      </label>
      <label>
        Opnamedatum:
        <input
          type="date"
          name="opnamedatum"
          value={Date.now()}
          onChange={handleChange}
        />
      </label>
      <label>
        Titel:
        <select name="titel" value={formState.titel} onChange={handleChange}>
          <option value="WvGGZ">WvGGZ</option>
          <option value="WFZ">WFZ</option>
        </select>
      </label>
      <label>
        Fase:
        <select name="fase" value={formState.fase} onChange={handleChange}>
          <option value="0a">0a</option>
          <option value="0b">0b</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3a">3a</option>
          <option value="3b">3b</option>
          <option value="3c">3c</option>
          <option value="3d">3d</option>
          <option value="4a">4a</option>
          <option value="4b">4b</option>
          <option value="4c">4c</option>
          <option value="4d">4d</option>
          <option value="5a">5a</option>
          <option value="5b">5b</option>
        </select>
      </label>
      <label>
        8.9 opname:
        <input type="checkbox" name="opname89" onChange={handleChange} />
      </label>
      <label>
        Opnamemedicatie:
        <input type="checkbox" name="opnamemedicatie" onChange={handleChange} />
      </label>
      <label>
        ZVT:
        <input type="checkbox" name="ZVT" onChange={handleChange} />
      </label>
    </form>
  );
};

export default PatientScherm;

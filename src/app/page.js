"use client";

import { useState } from "react";
import styles from "./page.module.css";
const firstFalse = (obj) => Object.keys(obj).find((i, key) => obj[i] === false);

const HomePage = () => {
  const [data, setData] = useState([
    {
      naam: "Piet",
      opnamedatum: "01-01-2024",
      titel: "WvGGZ",
      fase: "1",
      ZAG: [],
      opnameadmin: {
        opname89: true,
        medicatie: false,
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
    },
    {
      naam: "Piet",
      opnamedatum: "01-04-2024",
      titel: "WvGGZ",
      fase: "1",
      ZAG: [],
      opnameadmin: {
        opname89: true,
        medicatie: true,
        ZVT: true,
      },
      doorlopendeadmin: {
        taxatie: false,
      },
      ontslagadmin: {
        ontslagmed: false,
        ontslag816: false,
        ontslagbrief: false,
      },
      ZAG: ["01-01-2024", "03-02-2024", "05-03-2024"],
    },
  ]);

  return (
    <div>
      <h1>Werkbriefje</h1>
      <table className={styles.tabel}>
        <thead>
          <tr>
            <th>Naam</th>
            <th>Opnamedatum</th>
            <th>Volgend ZAG</th>
            <th>To-do</th>
          </tr>
        </thead>
        <tbody>
          {data.map((pat) => (
            <tr key={pat.naam}>
              <td>{pat.naam}</td>
              <td>{`${pat.opnamedatum} (${Math.round(
                (Date.now() - Date.parse(pat.opnamedatum)) / 604800000
              )} weken)`}</td>
              <td>
                {Date.parse(pat.ZAG[pat.ZAG.length - 1]) > Date.now()
                  ? pat.ZAG[pat.ZAG.length - 1]
                  : "Nog niet gepland"}
              </td>
              <td>
                {firstFalse({
                  ...pat.opnameadmin,
                  ...pat.doorlopendeadmin,
                  ...pat.ontslagadmin,
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;

<script>
    import { db } from "$lib/db";
    import { liveQuery } from "dexie";
    const addPatient = async () => {
      const id = await db.fhic.add({
        naam: naam,
        opnamedatum: opnamedatum,    
      });
      status = `Patient toegevoegd met id ${id}`;
    };

    const deletePatient = async (id) => {
      await db.fhic.delete(id);
    };
    
    let patienten = liveQuery(() => db.fhic.toArray());

</script>

<div>
  <h1>Werkbriefje FHIC</h1>
  <table>
    <thead>
      <tr>
        <th>Naam</th>
        <th>Data</th>
        <th>Medicatie</th>
        <th>To-do</th>
      </tr>
    </thead>
    <tbody>
        {#if $patienten}
          {#each $patienten as patient}
          <tr>
            <td>{patient.naam}</td>
            <td>{patient.opnamedatum} (opname) <br /> (voorlopig ontslag) <br /> (eerstvolgend ZAG)</td>
          </tr>
          {/each}
        {/if}
    </tbody>
  </table>

</div>

<style>
  div {
    width: 80%;
    line-height: 1.5rem;
    font-family: sans-serif;
  }
  div > * {
    margin: 2rem;
  }
  table {
    border-collapse: collapse;
  }
  td, th {
    text-align: left;
    padding: 0 1rem;
  }
  td {
    font-size: 20px;
  }
  th {
    height: 3rem;
    font-size: 24px;
  }
</style>
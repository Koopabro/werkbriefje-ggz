<script>
    import { db } from "$lib/db";
    import { liveQuery } from "dexie";
    let naam = '';
    let opnamedatum = '';
  
    let status = '';

    async function addPatient() {
      const id = await db.fhic.add({
        naam: naam,
        opnamedatum: opnamedatum,    
      });
      status = `Patient toegevoegd met id ${id}`;
    };

    const deletePatient = (id) => async () => {
      await db.fhic.delete(id);
    };
    
    let patienten = liveQuery(() => db.fhic.toArray());

</script>
<div>
  <h1>Werkbriefje GGZ</h1>
  <table>
    <thead>
      <tr>
        <th>Naam</th>
        <th>Opnamedatum</th>
      </tr>
    </thead>
    <tbody>
        {#if $patienten}
          {#each $patienten as patient}
          <tr>
            <td>{patient.naam}</td>
            <td>{patient.opnamedatum}</td>
            <td><a on:click={deletePatient(patient.id)}>verwijder</a></td>
          </tr>
          {/each}
        {/if}
    </tbody>
  </table>
  <form>
    <label for="naam">Naam</label>
    <input type="text" id="naam" bind:value={naam} />
    <label for="opnamedatum">Opnamedatum</label>
    <input type="date" id="opnamedatum" bind:value={opnamedatum} />
    <button on:click={addPatient} abort="submit">Toevoegen</button>
    <p>{status}</p>
  </form>
</div>

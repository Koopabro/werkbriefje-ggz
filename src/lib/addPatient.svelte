  <script>    const addPatient = async () => {
    const id = await db.fhic.add({
      naam: naam,
      opnamedatum: opnamedatum,    
    });
    status = `Patient toegevoegd met id ${id}`;
  };

  const deletePatient = async (id) => {
    await db.fhic.delete(id);
  };
  </script>
  <form>
    <label for="naam">Naam</label>
    <input type="text" id="naam" bind:value={naam} />
    <label for="opnamedatum">Opnamedatum</label>
    <input type="date" id="opnamedatum" bind:value={opnamedatum} />
    <button on:click={addPatient} abort="submit">Toevoegen</button>
    <p>{status}</p>
  </form>
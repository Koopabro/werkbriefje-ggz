<script>
	import { db } from '$lib/db';
	let naam = '';
	const datum = new Date();
	let opnamedatum = datum.toISOString().slice(0, 10);
	let titel = 'WvGGZ';
	let fase = '0a';
	let opnameadmin = {
		opname89: false,
		opnamemedicatie: false,
		ZVT: false
	};
	let doorlopendadmin = {
		instrument: titel === 'WvGGZ' ? 'IFBE' : 'HKT-R',
		risicotaxatie: false,
		risinclin: false,
		bhp: false
	};
	let ontslagadmin = {
		ontslagmed: false,
		amo: false,
		achtzestien: false,
		wvggzstop: false,
		brief: false
	};
	let status = '';

	const addPatient = async () => {
		const id = await db.fhic.add({
			naam: naam,
			opnamedatum: opnamedatum,
			titel: titel,
			fase: fase,
			opnameadmin: opnameadmin,
			doorlopendadmin: doorlopendadmin,
			ontslagadmin: ontslagadmin
		});
		status = `Patient toegevoegd met id ${id}`;
	};
</script>

<form>
	<label for="naam">Naam</label>
	<input type="text" id="naam" bind:value={naam} />
	<label for="opnamedatum">Opnamedatum</label>
	<input type="date" id="opnamedatum" bind:value={opnamedatum} />
	<label for="titel">Titel</label>
	<select name="titel" id="titel" bind:value={titel}>
		<option value="WvGGZ">WvGGZ</option>
		<option value="WFZ">WFZ</option>
	</select>
	<label for="fase">Fase</label>
	<select name="fase" id="fase" bind:value={fase}>
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
	<button on:click={addPatient} abort="submit">Toevoegen</button>
	<p>{status}</p>
</form>

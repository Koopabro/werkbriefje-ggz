<script>
	import { db } from '$lib/db';
	import FormField from '@smui/form-field';
	import SegmentedButton, { Segment } from '@smui/segmented-button';
	import Button from '@smui/button';
	import { Label } from '@smui/common';
	import Select, { Option } from '@smui/select';
	import Snackbar, { Actions } from '@smui/snackbar';

	//snackbar
	let reason = 'nothing yet';
	let snackbar = Snackbar;
	// function handleClosed(e: CustomEvent<{ reason: string | undefined }>) {
	// 	reason = e.detail.reason ?? 'Undefined.';
	// }

	const handleClosed = () => {};

	//form
	let titelkeuze = ['WvGGZ', 'WFZ'];
	let fasekeuze = [
		'0a',
		'0b',
		'1',
		'2',
		'3a',
		'3b',
		'3c',
		'3d',
		'4a',
		'4b',
		'4c',
		'4d',
		'5a',
		'5b'
	];

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
	let laatsteId = '';

	const addPatient = async () => {
		id = await db.fhic.add({
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

	const verwijderPatient = async (id) => {
		await db.fhic.delete(id);
	};

	const deleteAll = async () => {
		await db.fhic.clear();
	};
</script>

<FormField>
	<label for="naam">Naam</label>
	<input type="text" id="naam" bind:value={naam} />
	<label for="opnamedatum">Opnamedatum</label>
	<input type="date" id="opnamedatum" bind:value={opnamedatum} />
	<label for="titel">Titel</label>
	<SegmentedButton segments={titelkeuze} let:segment singleSelect bind:titel>
		<!-- Note: the `segment` property is required! -->
		<Segment {segment}>
			<Label>{segment}</Label>
		</Segment>
	</SegmentedButton>
	<label for="fase">Fase</label>
	<Select name="fase" id="fase" bind:value={fase}>
		{#each fasekeuze as fasen}
			<Option value={fasen}>{fasen}</Option>
		{/each}
	</Select>
	<button
		on:click={async () => {
			await addPatient;
			snackbar.open();
		}}
		abort="submit">Toevoegen</button
	>
	<Snackbar leading bind:this={snackbar}>
		<Label>{status}</Label>
		<Actions>
			<Button on:click={verwijderPatient(laatsteId)}>Ongedaan</Button>
		</Actions>
	</Snackbar>
	<button on:click={deleteAll}>Verwijder alles</button>
</FormField>

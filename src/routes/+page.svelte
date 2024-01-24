<script>
	import { db } from '$lib/db';
	import { liveQuery } from 'dexie';
	import AddPatient from '$lib/addPatient.svelte';
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
						<td> {patient.naam} </td>
						<td>
							Opname: {patient.opnamedatum} <br /> 5 <br />
							{patient.zag
								? `ZAG: ${patient.zag[patient.zag.length - 1]}`
								: 'ZAG moet nog worden ingepland'}
						</td>
					</tr>
				{/each}
			{/if}
		</tbody>
	</table>
	<AddPatient />
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
	td,
	th {
		text-align: left;
		vertical-align: top;
		padding-left: 20px;
	}

	td {
		padding-bottom: 1em;
	}
	td {
		font-size: 20px;
	}
	th {
		height: 3rem;
		font-size: 24px;
	}
</style>

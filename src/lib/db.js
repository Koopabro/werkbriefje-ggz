import Dexie from 'dexie';

export const db = new Dexie('data');

db.version(1).stores({
	fhic: '++id, naam, opnamedatum' // Primary key and indexed props
});

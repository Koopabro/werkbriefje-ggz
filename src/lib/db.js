import Dexie from 'dexie';

export const db = new Dexie('data');

db.version(1).stores({
	fhic: '++id, naam, opnamedatum, titel, zag, medicatie, opnameadmin, doorlopendadmin, ontslagadmin' // Primary key and indexed props
});

/* 
titel, zag, medicatie, opnameadmin, doorlopendadmin, ontslagadmin

opnameadministratie: {
	wvggz (alleen als wvggz)
	zvt
	bo
}

ontslagadmin: {
	amo
	ontslagmedicatie
	achtzestien
	wvggzstop
	brief
}

doorlopendadmin: {
	risicotax: {instrument: ifbe/hkt, deadline: opname+1/opname+6}
  risinafsp
	bhp
	briefstart
}
titel: "WvGGZ", "WFZ"
zag: [datum1, datum2...]
medicatie: [{middel, start, stop, spiegel: {datum, waarde}}]
*/

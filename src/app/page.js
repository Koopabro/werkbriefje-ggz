'use client'
import { AgGridReact } from 'ag-grid-react';
import { useState } from 'react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const App = () => {
    // dataopslag: VERSLEUTELD VANWEGE PATIËNTGEHEIM.
    

    const [rowData] = useState([
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxster", price: 72000}
    ]);
    
    const [columnDefs] = useState([
        { field: 'Patiënt' },
        { field: 'model' },
        { field: 'price' }
    ]);

    return (
        <div className="ag-theme-alpine" style={{height: "600px", width: "600px" }}>
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}>
            </AgGridReact>
        </div>
    );
};

export default App
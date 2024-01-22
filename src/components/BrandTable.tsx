import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { AgGridReact } from 'ag-grid-react';
import { useEffect, useMemo, useState } from 'react';

// Row Data Interface
interface IRow {
  no: number;
  name: string;
  created_at: Date;
  date: string;

}

// Create new GridExample component
const BrandTable = () => {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState<IRow[]>([]);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs] = useState<ColDef[]>([
    { field: 'no' },
    { field: 'name' },
    { field: 'Created At' },
    { field: 'Action' },
  ]);

  // Fetch data & update rowData state
  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/space-mission-data.json') // Fetch data from server
      .then((result) => result.json()) // Convert to JSON
      .then((rowData) => setRowData(rowData)); // Update state of `rowData`
  }, []);

  const defaultColDef = useMemo<ColDef>(() => {
    return {
      filter: true,
      editable: true,
    };
  }, []);

  // Container: Defines the grid's theme & dimensions.
  return (
    <div
      className={  "ag-theme-quartz"}
      style={{ width: '100%', height: '50vh' }}
    >
      {/* The AG Grid component, with Row Data & Column Definition props */}
      <AgGridReact
       rowData={rowData}
        columnDefs={colDefs} 
        defaultColDef={defaultColDef}
        pagination ={true}/>
    </div>
  );
};

export default BrandTable
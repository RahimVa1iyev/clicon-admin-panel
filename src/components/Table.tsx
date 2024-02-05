import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { Brands } from '../interfaces/';
import { CustomColDef } from './BrandTable';
import { useCallback } from 'react';

type TableProps = {
    data : Brands[],
    columns : CustomColDef[],
    onShow : () => void
}

const Table = ({data,columns,onShow} : TableProps) => {

    const defaultColDef = {
            sortable: true, 
            editable: true, 
            filter: true, 
            floatingFilter: true, 
            flex: 1, 
    }


    // const [gridApi, setGridApi] = useState<any>(null);

    // const onGridReady = (params: any) => {
    //     setGridApi(params.api);
    // }

    // const onExportClick = () => {
    //     if (gridApi) {
    //         gridApi.exportDataAsCsv();
    //     }
    // }

    return (
        <div>
            <div className='flex items-center justify-between my-[20px]'>
                <h5 className='text-[18px] font-semibold text-graydark'>Brand Table</h5>
                <button onClick={onShow} className='bg-primary text-white font-medium rounded-[6px] px-[25px] py-2'>Create</button>
            </div>
            <div className="ag-theme-quartz" style={{ height: 500 }}>
                <AgGridReact
                    animateRows={true}
                    rowData={data}
                    columnDefs={columns}
                    defaultColDef={defaultColDef}
                    // onGridReady={onGridReady}
                />
            </div>
        </div>
    )
}

export default Table

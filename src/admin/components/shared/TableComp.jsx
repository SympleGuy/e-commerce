import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const TableComp = ({ col, rowData }) => {
    return (
        <Box>
            <Box height="75vh">
                <DataGrid
                    rows={rowData}
                    columns={col}
                    components={{
                        Toolbar: GridToolbar
                    }}
                    checkboxSelection
                />
            </Box>
        </Box>
    );
};
export default TableComp;

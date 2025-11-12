import { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Collapse,
} from "@mui/material";

interface ChildRow {
    col1: string;
    col2: string;
    col3: string;
    col4: string;
    col5: string;
}

interface ParentRow {
    id: number;
    col1: string;
    col2: string;
    col3: string;
    col4: string;
    col5: string;
    children: ChildRow[];
}

function ExpandableRow({ row }: { row: ParentRow }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Main row */}
            <TableRow onClick={() => setOpen(!open)} className="hover:bg-gray-50">
                <TableCell><h1>Akshaya</h1> </TableCell>
                <TableCell>{row.col1}</TableCell>
                <TableCell>{row.col2}</TableCell>
                <TableCell>{row.col3}</TableCell>
                <TableCell>{row.col4}</TableCell>
                {/* <TableCell>{row.col5}</TableCell> */}
            </TableRow>
            {/* Expansion: Child rows aligned with same columns */}
            <TableRow >
                <TableCell colSpan={12} >
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <div>
                            <div className="grid grid-cols-5 w-full ">
                                <div>
                                    <h1>
                                        Akshaya
                                    </h1>
                                </div>
                                <div>
                                    <h1>
                                        Multiple
                                    </h1>
                                </div>
                                <div>
                                    <h1>
                                        Multiple
                                    </h1>
                                </div>
                                <div>
                                    <h1>
                                        Multiple
                                    </h1>
                                </div>
                                <div>
                                    <h1>
                                        Multiple
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}

export default function ExpansionTable() {
    const rows: ParentRow[] = [
        {
            id: 1,
            col1: "Parent 1",
            col2: "Data 1",
            col3: "Data 2",
            col4: "Data 3",
            col5: "Data 4",
            children: [
                { col1: "Child 1.1", col2: "CData 1", col3: "CData 2", col4: "CData 3", col5: "CData 4" },
                { col1: "Child 1.2", col2: "CData 5", col3: "CData 6", col4: "CData 7", col5: "CData 8" },
            ],
        },
        {
            id: 2,
            col1: "Parent 2",
            col2: "Data A",
            col3: "Data B",
            col4: "Data C",
            col5: "Data D",
            children: [
                { col1: "Child 2.1", col2: "X1", col3: "X2", col4: "X3", col5: "X4" },
            ],
        },
    ];

    return (
        <TableContainer component={Paper} className="shadow-lg rounded-lg">
            <Table>
                <TableHead className="bg-gray-200">
                    <TableRow>
                        <TableCell className="font-bold">Column 1</TableCell>
                        <TableCell className="font-bold">Column 2</TableCell>
                        <TableCell className="font-bold">Column 3</TableCell>
                        <TableCell className="font-bold">Column 4</TableCell>
                        <TableCell className="font-bold">Column 5</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <ExpandableRow key={row.id} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

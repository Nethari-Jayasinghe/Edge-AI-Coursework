import { Button, Table, TableHead, TableRow, TableCell } from "@mui/material";
import React from "react";
import arrowdown from "../../Components/Assets/Arrowdown.png";
import elephantsample1 from "../../Components/Assets/elephantsamlple1.jpeg";
import elephantsample2 from "../../Components/Assets/elephantsample2.jpeg";

export default function HistoryBody() {
    const data = [
        { date: "2024-03-22", time: "8:30 AM", image: elephantsample1, count: 6 },
        { date: "2024-03-23", time: "11:45 AM", image: elephantsample2, count: 2 },
        { date: "2024-03-24", time: "10:45 PM", image: elephantsample2, count: 1 },
        { date: "2024-03-25", time: "6:30 AM", image: elephantsample1, count: 4 },
        { date: "2024-03-26", time: "7:30 PM", image: elephantsample1, count: 7 },
    ];

    return (
        <div style={{ width: "100%", height: "100%", justifyContent: "flex-end", alignContent: "flex-end", display: "flex" }}>
            <div style={{ position: "absolute", top: 90, left: 300, width: 1100, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                <div>
                    <p style={{ fontSize: 28, fontWeight: "500" }}>History</p>
                </div>

                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <p style={{ paddingBottom: 5, fontSize: 18, fontWeight: "500" }}>Filter by :</p>
                    <Button style={{ marginLeft: 18, backgroundColor: "#E9C47D", fontSize: 18, fontWeight: "500", color: "black", height: 32, width: 105 }}>
                        Week
                        <img style={{ marginLeft: 5 }} src={arrowdown} alt="arrowdown" />
                    </Button>
                </div>

                <div style={{ position: "absolute", top: 200, left: 50, width: 1040 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell>Time</TableCell>
                                <TableCell>Image</TableCell>
                                <TableCell>Count</TableCell>
                            </TableRow>
                        </TableHead>
                        <tbody>
                            {data.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell>{row.date}</TableCell>
                                    <TableCell>{row.time}</TableCell>
                                    <TableCell><img src={row.image} alt="elephant" style={{ width: 100, height: 100 }} /></TableCell>
                                    <TableCell>{row.count}</TableCell>
                                </TableRow>
                            ))}
                        </tbody>
                    </Table>
                </div>

            </div>
        </div>
    );
}
import React, { useState } from "react";
import Cell from "./Cell";
import { createEmptyGrid, toggleCellAndNeighbors, applyConstraints } from "../utils/gridLogic";

const Grid = () => {
    const [grid, setGrid] = useState(createEmptyGrid(10, 10));
    const [error, setError] = useState("");

    const handleCellClick = (row, col) => {
        const newGrid = toggleCellAndNeighbors(grid, row, col);

        if (applyConstraints(newGrid)) {
            setGrid(newGrid);
            setError("");
        } else {
            setError("Action violates constraints!");
        }
    };

    const handleReset = () => {
        setGrid(createEmptyGrid(10, 10));
    };

    const handleRandomFill = () => {
        let newGrid = createEmptyGrid(10, 10);

        for (let r = 0; r < 10; r++) {
            let filledCount = 0;
            for (let c = 0; c < 10; c++) {
                if (Math.random() < 0.5 && filledCount < 3) {
                    newGrid[r][c] = 1;
                    filledCount++;
                }
            }
        }

        while (!applyConstraints(newGrid)) {
            newGrid = createEmptyGrid(10, 10);

            for (let r = 0; r < 10; r++) {
                let filledCount = 0;
                for (let c = 0; c < 10; c++) {
                    if (Math.random() < 0.5 && filledCount < 3) {
                        newGrid[r][c] = 1;
                        filledCount++;
                    }
                }
            }
        }
        setGrid(newGrid);
    }



    return (
        <div>
            {error && <p className="error">{error}</p>}
            <div className="controls">
                <button className="control-btn" onClick={() => handleReset()}>Reset</button>
                <button className="control-btn" onClick={() => handleRandomFill()}>Random Fill</button>
            </div>
            <div className="grid">
                {grid.map((row, rowIndex) =>
                    row.map((cell, colIndex) => (
                        <Cell
                            key={`${rowIndex}-${colIndex}`}
                            value={cell}
                            onClick={() => handleCellClick(rowIndex, colIndex)}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default Grid;

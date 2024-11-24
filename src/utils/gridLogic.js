export const createEmptyGrid = (rows, cols) => {
    return Array.from({ length: rows }, () => Array(cols).fill(0));
};

export const applyConstraints = (grid) => {
    const rows = grid.length;
    const cols = grid[0].length;

    for (let r = 0; r < rows; r++) {
        if (grid[r].filter((cell) => cell === 1).length > 3) return false;
    }

    for (let c = 0; c < cols; c++) {
        let count = 0;
        for (let r = 0; r < rows; r++) {
            if (grid[r][c] === 1) count++;
        }
        if (count > 3) return false;
    }

    for (let r = 0; r < rows - 1; r++) {
        for (let c = 0; c < cols - 1; c++) {
            if (
                grid[r][c] === 1 &&
                grid[r + 1][c] === 1 &&
                grid[r][c + 1] === 1 &&
                grid[r + 1][c + 1] === 1
            ) {
                return false;
            }
        }
    }

    return true;
};

export const toggleCellAndNeighbors = (grid, row, col) => {
    const newGrid = grid.map((row) => [...row]);

    newGrid[row][col] = grid[row][col] === 1 ? 0 : 1;

    if (grid[row][col] == 0) {
        if (row > 0) newGrid[row - 1][col] = 1;
        if (row < grid.length - 1) newGrid[row + 1][col] = 1;
        if (col > 0) newGrid[row][col - 1] = 1;
        if (col < grid[0].length - 1) newGrid[row][col + 1] = 1;
    }

    return newGrid;
};

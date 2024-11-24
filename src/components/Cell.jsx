import React from "react";
import "../styles/GridApp.css";
const Cell = ({ value, onClick }) => {
    return (
        <div
            className={`cell ${value === 1 ? "cell-filled" : "cell-empty"}`}
            onClick={onClick}
        ></div>
    );
};

export default Cell;



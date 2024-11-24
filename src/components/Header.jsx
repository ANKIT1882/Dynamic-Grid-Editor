import React from "react";

const Header = () => {
    return (
        <header>
            <h1>Dynamic Grid Editor</h1>
            <div className="legend">
                <div className="legend-item">0 = Empty (White)</div>
                <div className="legend-item">1 = Filled (Blue)</div>
            </div>
        </header>
    );
};

export default Header; 

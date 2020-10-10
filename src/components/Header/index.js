import React from "react";
import "./Header.css";

function Header () {
    return (
        <div className="header">
            <h1>Employee Directory</h1>
            <p>Click on the "Name" heading to filter or use the search box to find an employee with a specific name</p>
        </div>
    )
}

export default Header;
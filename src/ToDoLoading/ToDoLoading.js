import React from "react";
import './ToDoLoading.css';

function ToDoLoading() {
    return (
        <div className="loading-container">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
        </div>
    );
};

export { ToDoLoading }
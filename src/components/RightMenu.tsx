import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

const styles = {
    ulRow: {
        listStyleType: "none",
        marginBottom: "0",
    },
    liRow: {
        display: "inline",
        padding: "0 10px"
    }
}

const RightMenu = () => {
    return (
        <ul style={styles.ulRow}>
            <li key="mail" style={styles.liRow}>
                <Link to="/sign">Signin</Link>
            </li>
            <li key="app" style={styles.liRow}>
                <Link to="">Signup</Link>
            </li>
        </ul>
    );
};

export default RightMenu;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

const styles = {
  ulRow: {
      listStyleType: "none",
      margin: "0",
  },
  liRow: {
      display: "inline",
      padding: "0 10px"
  }
}

const LeftMenu = () => {
    return (
        <ul style={styles.ulRow}>
            <li key="home" style={styles.liRow}>
                <Link to="/home">Home</Link>
            </li>
            <li key="create" style={styles.liRow}>
                <Link to="/create">Create</Link>
            </li>
        </ul>
    );
};

export default LeftMenu;

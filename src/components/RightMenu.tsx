import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import { Menu, Button } from "antd";
import userContext from "../contexts/userContext";
import GoogleAuth from "./GoogleAuth";

const RightMenu = () => {
    const { userInfo } = useContext(userContext);

    return (
        <ul style={{ listStyleType: "none", marginBottom: "0", display: "flex", padding: "0"}}>
            {userInfo.name ? (
                <>
                    <li className="nav-item nav-link-item">
                        <p style={{marginBottom: 0, fontStyle: "italic", color: "gray", marginRight: "15px"}}>Hi there, {userInfo.name.split(" ")[0]}!</p>
                    </li>
                    <li className="nav-item nav-link-item">
                        <Link className="nav-link" to="/account">
                            My Account
                        </Link>
                    </li>
                    <li className="nav-item nav-link-item">
                        <Link className="nav-link" to="/my-cart">
                            Cart
                        </Link>
                    </li>
                </>
            ) : (
                <GoogleAuth />
            )}
        </ul>
    );
};

export default RightMenu;

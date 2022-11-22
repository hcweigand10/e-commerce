import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Badge } from "antd";
import {ShoppingCartOutlined} from "@ant-design/icons"
import userContext from "../contexts/userContext";
import GoogleAuth from "./GoogleAuth";

const RightMenu = () => {
    const { userInfo, cart } = useContext(userContext);

    return (
        <ul style={{ listStyleType: "none", marginBottom: "0", display: "flex", padding: "0"}}>
            {userInfo.name ? (
                <>
                    <li className="nav-item nav-link-item">
                        <p style={{marginBottom: 0, fontStyle: "italic", color: "lightgray", marginRight: "15px"}}>Hi there, {userInfo.name.split(" ")[0]}!</p>
                    </li>
                    <li className="nav-item nav-link-item">
                        <Link className="nav-link" to="/create">
                            Get Started
                        </Link>
                    </li>
                    <li className="nav-item nav-link-item">
                        <Link className="nav-link" to="/my-cart">
                            <Badge count={cart.length} size="small">
                            <ShoppingCartOutlined style={{fontSize: "18px", marginBottom: "0px"}}/>

                            </Badge>
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

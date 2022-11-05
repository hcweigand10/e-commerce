import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Drawer } from "antd";

import RightMenu from "./RightMenu";
// const styles =

const Navbar = () => {
    // const [currentPage, setCurrentPage] = useState("home");
    const [openDrawer, setOpenDrawer] = useState(false);

    const toggleDrawer = (): void => setOpenDrawer(!openDrawer);

    return (
        <nav className="menuBar" id="sticky-nav">
            <div className="logo">
                <Link to="/">Logo</Link>
            </div>
            <div className="menuCon">
                <div className="rightMenu">
                    <RightMenu />
                </div>
                <Button
                    className="barsMenu"
                    type="primary"
                    onClick={toggleDrawer}
                >
                    <span className="barsBtn"></span>
                </Button>
                <Drawer
                    title="Basic Drawer"
                    placement="right"
                    closable={true}
                    onClose={() => setOpenDrawer(false)}
                    open={openDrawer}
                >
                    <RightMenu />
                </Drawer>
            </div>
        </nav>
    );
};

export default Navbar;

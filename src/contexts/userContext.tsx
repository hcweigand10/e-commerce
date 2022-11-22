import React from "react";
import {userContext} from "../interfaces/userInfo"

export default React.createContext<userContext>({
    userInfo: {
        email: null,
        name: null,
        pic: null
    },
    setUserInfo: () => {},
    cart: [],
    setCart: () => {}
});

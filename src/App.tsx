import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useQuery } from "react-query";

// import api from "./utils/api";
import {
    Experimental_CssVarsProvider as CssVarsProvider,
    experimental_extendTheme as extendTheme,
} from "@mui/material/styles";
import UserContext from "./contexts/userContext";
import Navbar from "./components/Navbar";
import Footer from "./components/CustomFooter";
import Landing from "./pages/Landing";
import Account from "./pages/Account";
import GetStarted from "./pages/GetStarted";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import { userInfo, cart } from "./interfaces/userInfo";
import "./css/App.css";

const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: "#EEA47F"
                },
                secondary: {
                    main: "#FFFFFFF"
                }
            }
        }
    }
});

const App = () => {
    const [userInfo, setUserInfo] = useState<userInfo>({
        email: null,
        name: null,
        pic: null,
    });
    const [cart, setCart] = useState<cart>([{ id: 3 }]);
    // const [signedIn, setSignedIn] = useState(null);
    // const [auth, setAuth] = useState(null);

    // useEffect(() => {
    //     window.gapi.load("client:auth2", () => {
    //         window.gapi.client
    //             .init({
    //                 clientId: process.env.REACT_APP_CLIENT_ID,
    //                 scope: "email",
    //                 plugin_name: "Streamy",
    //             })
    //             .then(() => {
    //                 setAuth(window.gapi.auth2.getAuthInstance());
    //             });
    //     });
    // }, []);

    // useEffect(() => {
    //     if (auth) {
    //         onAuthChange();
    //         auth.isSignedIn.listen(onAuthChange);
    //     }
    // }, [auth]);

    // const onAuthChange = () => {
    //     setSignedIn(auth.isSignedIn.get());
    // };

    // const signInClick = () => {
    //     auth.signIn();
    // };

    // const signOutClick = () => {
    //     auth.signOut();
    //     // window.location.reload()
    // };

    // const logout = (): void => {
    //     setUserInfo({ email: null, name: null });
    //     localStorage.removeItem("token");
    // };

    // const login = (): void => {};

    return (
        <CssVarsProvider theme={theme}>
            <Router>
                <UserContext.Provider
                    value={{ userInfo, setUserInfo, cart, setCart }}
                >
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="/create" element={<GetStarted />} />
                        <Route path="/account" element={<Account />} />
                        <Route path="/my-cart" element={<Cart />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </UserContext.Provider>
                <Footer />
            </Router>
        </CssVarsProvider>
    );
};

export default App;

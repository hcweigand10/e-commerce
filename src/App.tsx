import React, { useState, } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useQuery } from "react-query";

// import api from "./utils/api";
import UserContext from "./contexts/userContext";
import Navbar from "./components/Navbar";
import Footer from "./components/CustomFooter";
import Landing from "./pages/Landing";
import Account from "./pages/Account";
import Create from "./pages/Create";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import "./css/App.css";

const App = () => {
    const [userInfo, setUserInfo] = useState<{
        email: string | null;
        name: string | null;
    }>({ email: null, name: null });
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
        <Router>
            <UserContext.Provider value={{ userInfo, setUserInfo }}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/my-cart" element={<Cart />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </UserContext.Provider>
            <Footer />
        </Router>
    );
};

export default App;

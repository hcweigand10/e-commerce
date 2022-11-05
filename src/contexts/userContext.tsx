import React from "react";

export default React.createContext<{
    userInfo: {
        email: string | null,
        name: string | null,
    }
    setUserInfo: React.Dispatch<React.SetStateAction<{
        email: string | null,
        name: string | null
    }>>
}>({
    userInfo: {
        email: null,
        name: null,
    },
    setUserInfo: () => {}
});

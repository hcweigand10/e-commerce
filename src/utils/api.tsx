import axios from "axios"
// import constants from "./constants"

// const baseurl = constants.apiBaseurl

const api = {
    // checkToken: (token: string) => axios.post('/gettokendata', {
    //     headers: {
    //         authorization: `Bearer ${token}`
    //     }
    // }),
    getGoogleInfo: (token: string) => axios.get(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${token}`).then((response) => response)
}

export default api
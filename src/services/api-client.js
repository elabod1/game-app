import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "4c4651d43ca74d0b8790630a08d4d30e",
    },
});

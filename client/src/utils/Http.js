import {create} from 'axios';
import config from "../config/config";
import {TOKEN} from "./constants";

export default create({
    baseURL: `${config.API_URL}/api`,
    headers: {
        Authorization: localStorage.getItem(TOKEN)
    }
});
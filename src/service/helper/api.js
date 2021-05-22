import axios from 'axios';
export class Api {
    constructor(){}
    get(url){
        return axios.get(url);
    }
}
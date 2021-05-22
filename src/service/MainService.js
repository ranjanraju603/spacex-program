import { Api } from './helper/api';
const apiHelper = new Api();
const baseUrl = "http://localhost:5000/v1/rocket?";
export class MainService {
    constructor(){}
    getAllData(year,launch,land){
        let url = `${baseUrl}?limit=100`;
        if(year){
            url += `&launch_year=${year}`;
        }
        if(launch){
            url += `&launch_success=${launch}`;
        }
        if(land){
            url += `&land_success=${land}`;
        }
        return apiHelper.get(url);

    }

}



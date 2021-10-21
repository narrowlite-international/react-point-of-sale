import axios from "axios";

const BASE_URL = "http://somethinghere.com/another"

export function saveSetup(body){

    makeRequest(body, 'POST');

}

const makeRequest = async (body, method) => {

    return await axios(
        {
            method: method,
            url: `${BASE_URL}`,
            data: body
        }
    );

    

}
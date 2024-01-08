import { backEndUrl } from "../utilityPack/commonConstants";
import axios from 'axios';
import { print } from 'graphql';

//getUserCompanies

export const postApi = async (variables: any, queryValue: any) => {
    const response = await axios.post(backEndUrl, {
        query: print(queryValue),
        variables: variables
    });

    return response;
}

export const getApi = async (queryValue: any) => {
    const response = await axios.post(backEndUrl, {
        query: print(queryValue)
    });

    return response;
}
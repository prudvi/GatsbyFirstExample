import gql from 'graphql-tag';

export const ADD_TO_BOUGHT_LIST = gql`
    mutation addToUserCompany($id:String!) {
        addToUserCompany(id:$id) { 
            _id
            companyId
            companyName
        }
    }
`

export const REMOVE_FROM_BOUGHT_LIST = gql`
    mutation deleteFromUserCompany($id:String!) {
        deleteFromUserCompany(id:$id) { 
            _id
            companyId
            companyName
        }
    }
`

export const ADD_TO_WATCH_LIST = gql`
    mutation addToUserWatchListCompany($id:String!) {
        addToUserWatchListCompany(id:$id) { 
            _id
            companyId
            companyName
        }
    }
`

export const REMOVE_FROM_WATCH_LIST = gql`
    mutation deleteFromUserWatchListCompany($id:String!) {
        deleteFromUserWatchListCompany(id:$id) { 
            _id
            companyId
            companyName
        }
    }
`

export const GET_USER_COMPANIES = gql`
    query {
        getUserCompanies {
            _id
            companyId
            companyName
        }
        
    }
`;

export const GET_WATCHLIST_COMPANIES = gql`
    query {
        geWatchListCompanies {
            _id
            companyId
            companyName
        }
  }
`;
import { graphql } from 'gatsby';
import { useState } from 'react';
import CustomLayout from '../../components/layout';
import * as React from 'react';
import TableLayout from '../../templates/Table/GridTable';
import {
    ADD_TO_BOUGHT_LIST, ADD_TO_WATCH_LIST,
    GET_USER_COMPANIES, GET_WATCHLIST_COMPANIES,
    REMOVE_FROM_BOUGHT_LIST, REMOVE_FROM_WATCH_LIST
} from '../../graphql/queries';
import { getApi, postApi } from '../../services/apiServices';
import { SUCCESS } from '../../utilityPack/commonConstants';


const Company = ({ data }: any) => {
    const [securityData, setSecurity] = useState(data.external.companies);
    const [ownedCompanies, setOwnedCompanies] = useState([]);
    const [watchListedCompanies, setWatchListedCompanies] = useState([]);

    const addOrRemoveTo = async (companyId: string, actionType: string) => {
        try {
            let queryValue = actionType === "ADD" ? ADD_TO_BOUGHT_LIST : REMOVE_FROM_BOUGHT_LIST;
            let params = { id: String(companyId) };
            const apiResponse = await postApi(params, queryValue);
            if (apiResponse.status == SUCCESS) {
                await getUserCompanies();
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const addOrRemoveToWatchList = async (companyId: string, actionType: string) => {
        try {
            let queryValue = actionType === "ADD" ? ADD_TO_WATCH_LIST : REMOVE_FROM_WATCH_LIST;
            let params = { id: String(companyId) };
            const apiResponse = await postApi(params, queryValue);
            if (apiResponse.status == SUCCESS) {
                await getWatchListCompanies();
            }
        } catch (error) {
            console.error('Error in addOrRemoveToWatchList:', error);
        }
    }

    const getUserCompanies = async () => {
        try {
            const apiResponse = await getApi(GET_USER_COMPANIES);
            setOwnedCompanies(apiResponse.data?.data?.getUserCompanies);
        } catch (error) {
            console.error('Error fetching getUserCompanies:', error);
            setOwnedCompanies([]);
        }
    }

    const getWatchListCompanies = async () => {
        try {
            const apiResponse = await getApi(GET_WATCHLIST_COMPANIES);
            setWatchListedCompanies(apiResponse.data?.data?.geWatchListCompanies);
        } catch (error) {
            console.error('Error fetching getWatchListCompanies:', error);
            setWatchListedCompanies([]);
        }
    }

    React.useEffect(() => {
        getUserCompanies();
        getWatchListCompanies();
    }, [])

    return (
        <CustomLayout pageTitle="Companies">
            {ownedCompanies || watchListedCompanies ?
                <TableLayout data={securityData} addOrRemoveTo={addOrRemoveTo}
                    addOrRemoveToWatchList={addOrRemoveToWatchList}
                    ownedCompanies={ownedCompanies} watchListedCompanies={watchListedCompanies}
                    customRow={true}></TableLayout>
                : ""}
        </CustomLayout>
    );
}

export default Company
export const query = graphql`
  query {
    external {
        companies {
            _id
            companyId
            companyName
        }
    }
}
`
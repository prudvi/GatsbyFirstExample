import * as React from 'react';
import { graphql } from 'gatsby';
import { useState } from 'react';
import CustomLayout from '../components/layout';
import TwoColumnLayout from "./TwoColumLayout";

const CompanyByFilter = ( props: any) => {
    const { data, location } = props;
    const [securityData, setSecurity] = useState(data.external.dailyEquityData.data);
    const [metaData, setMetaData] = useState(data.external.dailyEquityData.meta);
    return (
        <CustomLayout pageTitle="Stock Securities">
            <TwoColumnLayout data={securityData} metaData={metaData} value={location.pathname} />
        </CustomLayout>
    );
}

export default CompanyByFilter
export const query = graphql`
   query ($companyName: String)  {
    external {
        dailyEquityData(input: {value : $companyName, property: "SLONGNAME", limit: 100}) {
            data {
                filterName
                values {
                    values {
                        HEADLINE
                        NEWSSUB
                        CATEGORYNAME
                        SLONGNAME
                        NSURL
                        ATTACHMENTNAME
                        PDFFLAG
                        CRITICALNEWS
                        DT_TM
                    }
                    filterName
                }
            }
            meta {
                count
                limit
            }
        }
    }
}
`
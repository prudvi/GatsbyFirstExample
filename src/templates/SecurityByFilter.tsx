import * as React from 'react';
import { graphql } from 'gatsby';
import { useState } from 'react';
import CustomLayout from '../components/layout';
import TwoColumnLayout from "./TwoColumLayout";

const SecurityByFilter = ({ data }: any) => {
    const [securityData, setSecurity] = useState(data.external.dailyEquityData.data);
    const [metaData, setMetaData] = useState(data.external.dailyEquityData.meta);
    return (
        <CustomLayout pageTitle="Stock Securities">
            <TwoColumnLayout data={securityData} metaData={metaData}/>
        </CustomLayout>
    );
}

export default SecurityByFilter
export const query = graphql`
   query ($dateValue: String)  {
    external {
        dailyEquityData(input: {value : $dateValue, property: "NEWS_DT", limit: 2000}) {
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
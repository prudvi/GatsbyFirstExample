import { graphql } from 'gatsby';
import { useState } from 'react';
import CustomLayout from '../../components/layout';
import TwoColumnLayout from "../../templates/TwoColumLayout";
import * as React from 'react';

import './security.scss';

const Security = ({ data }: any) => {
    const [securityData, setSecurity] = useState(data.external.dailyEquityData.data);
    const [metaData, setMetaData] = useState(data.external.dailyEquityData.meta);
    return (
        <CustomLayout pageTitle="Stock Securities">
            <TwoColumnLayout data={securityData} metaData={metaData}/>
        </CustomLayout>
    );
}

export default Security
export const query = graphql`
  query {
    external {
        dailyEquityData(input: {value : "2022-07-01", property: "NEWS_DT", limit: 2000}) {
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